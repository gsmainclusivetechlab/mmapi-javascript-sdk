import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// material-ui
import { Button, Grid, Paper, Chip, CircularProgress } from '@material-ui/core';

import Alert from '@material-ui/core/Alert';

import Snackbar from '@material-ui/core/Snackbar';
import FormGenerator from '../../../ui-component/formGenerator';
import { RESET_FORM } from 'store/actions';

import './dashboard.css';

// ===========================|| DEFAULT DASHBOARD ||=========================== //

const Dashboard = () => {
    const customization = useSelector((state) => state.customization);
    const formData = useSelector((state) => state.formData);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [requestJson, setRequestJson] = useState(JSON.parse('{}'));
    const [responseJson, setResponseJson] = useState(null);
    const [responseHeader, setResponseHeader] = useState(null);
    const [responseStatus, setResponseStatus] = useState(null);
    const [clientCorrelId, setClientCorrelId] = useState(null);
    const [currentAPI, setCurrentAPI] = useState(null);
    const [pollTime, setPollTime] = useState(0);
    const [authType, chooseAuthType] = useState('noAuth');
    const [showToaster, handleToaster] = useState({
        status: false,
        type: 'info',
        message: '',
    });
    const changeAPIUrl = () => {
        console.log('Changing URL');
        setCurrentAPI(
            `${
                window.gsma && window.gsma.auth
                    ? 'window.gsma.auth'
                    : 'window.gsma.noAuth'
            }${
                customization.pageData.requestCategory
                    ? `.${customization.pageData.requestCategory}`
                    : ''
            }${
                customization.pageData.requestType
                    ? `.${customization.pageData.requestType}`
                    : ''
            }`
        );
    };

    useEffect(() => {
        dispatch({ type: RESET_FORM });
        setRequestJson(JSON.parse('{}'));
        setResponseJson(null);
        setResponseStatus(null);
        setResponseHeader(null);
        setClientCorrelId(null);
        setPollTime(0);
        changeAPIUrl();
    }, [customization.pageData.pageTitle, customization.authType]);

    const generateRequest = () => {
        const request = { ...formData.header };
        if (customization.pageData && customization.pageData.requestType) {
            request.type = customization.pageData.requestType;
        }
        if (formData.body && Object.keys(formData.body).length > 0) {
            request.data = JSON.parse(formData.body);
        }
        setRequestJson(request);
    };

    const checkRequestState = (
        requestFunction,
        serverCorrelationId,
        currentPollTime = 0,
        pollLimit
    ) => {
        return requestFunction({
            type: customization.pageData.pollingFunction
                ? customization.pageData.pollingFunction
                : 'viewRequestState',
            serverCorrelationId,
            onSuccess: (res, header, status) => {
                console.log(`Polling Response (${currentPollTime}):`, res);
                if (res.status === 'pending' || currentPollTime === pollLimit) {
                    setTimeout(() => {
                        setPollTime(parseInt(currentPollTime) + 1);
                        checkRequestState(
                            requestFunction,
                            serverCorrelationId,
                            parseInt(currentPollTime) + 1,
                            pollLimit
                        );
                    }, 2000);
                } else {
                    setResponseStatus(parseInt(status));
                    setResponseJson(JSON.parse(JSON.stringify(res)));
                    setResponseHeader(header);
                    setLoading(false);
                    return true;
                }
            },
            onFailure: (res, status) => {
                console.log('POLLING FAILED :', { res, status });
                setLoading(false);
                setResponseStatus(parseInt(status));
                setResponseJson(JSON.parse(JSON.stringify(res)));
                return true;
            },
        });
    };

    const sucessCallBack = (res, header, status) => {
        if (
            (customization.pageData.polling ||
                res.notificationMethod === 'polling') &&
            res.pollLimit &&
            res.status === 'pending'
        ) {
            setPollTime(1);
            let requestCatagory =
                window.gsma.noAuth[customization.pageData.requestCategory];

            if (authType === 'auth') {
                requestCatagory =
                    window.gsma.auth[customization.pageData.requestCategory];
            }

            checkRequestState(
                requestCatagory,
                res.serverCorrelationId,
                1,
                res.pollLimit
            );
        }
        setResponseStatus(parseInt(status));
        setLoading(false);
        setResponseJson(JSON.parse(JSON.stringify(res)));
        setResponseHeader(header);
        // handle test
        if (customization?.pageData?.testSuccessParams) {
            let testStatus = true;
            if (customization.pageData.testSuccessParams.length > 0) {
                testStatus = customization.pageData.testSuccessParams.every(
                    (value) => res.hasOwnProperty(value)
                );
            }
            // handle toaster
            handleToaster((prevState) => ({
                ...prevState,
                status: true,
                type: testStatus ? 'info' : 'error',
                message: testStatus
                    ? 'Test Passed On Success Response '
                    : 'Test Failed On Success Response',
            }));
        }
    };

    const failureCallback = (res, status) => {
        setResponseStatus(parseInt(status));
        setResponseJson(JSON.parse(JSON.stringify(res)));
        setLoading(false);

        // handle test
        if (customization?.pageData?.testErrorParams) {
            let testStatus = true;
            if (customization.pageData.testErrorParams.length > 0) {
                testStatus = customization.pageData.testErrorParams.every(
                    (value) => res.hasOwnProperty(value)
                );
            }
            // handle toaster
            handleToaster((prevState) => ({
                ...prevState,
                status: true,
                type: testStatus ? 'info' : 'error',
                message: testStatus
                    ? 'Test Passed On Failure Response '
                    : 'Test Failed On Failure Response',
            }));
        }
    };

    const getClientCorrelationIdCallBack = () =>
        customization.pageData.returnClientCorrelation
            ? (id) => setClientCorrelId(id)
            : false;

    const sendRequest = () => {
        setLoading(true);
        setResponseJson(null);
        setResponseStatus(null);
        pollTime > 0 && setPollTime(0);
        setClientCorrelId(null);
        if (customization.pageData.requestCategory) {
            if (
                window.gsma &&
                window.gsma.auth &&
                window.gsma.auth[customization.pageData.requestCategory]
            ) {
                chooseAuthType('auth');
                window.gsma.auth[customization.pageData.requestCategory]({
                    ...requestJson,
                    getClientCorrelationId: getClientCorrelationIdCallBack(),
                    onSuccess: sucessCallBack,
                    onFailure: failureCallback,
                });
            } else if (
                window.gsma.noAuth[customization.pageData.requestCategory]
            ) {
                chooseAuthType('noAuth');
                window.gsma.noAuth[customization.pageData.requestCategory]({
                    ...requestJson,
                    getClientCorrelationId: getClientCorrelationIdCallBack(),
                    onSuccess: sucessCallBack,
                    onFailure: failureCallback,
                });
            } else {
                alert('SDK Function is Unavailable');
            }
        }
    };

    return (
        <div>
            {customization.pageData && (
                <div>
                    {customization.pageData.pageTitle && (
                        <h1>{customization.pageData.pageTitle}</h1>
                    )}
                    <Grid container spacing={2}>
                        {currentAPI && (
                            <Chip
                                sx={{ m: 2 }}
                                label={currentAPI}
                                variant='outlined'
                                color='primary'
                            />
                        )}
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            {customization.pageData.apiHeaders &&
                                customization.pageData.apiHeaders.length >
                                    0 && (
                                    <>
                                        <h3>API Headers</h3>
                                        {customization.pageData.apiHeaders &&
                                            customization.pageData.apiHeaders.map(
                                                (item, index) => (
                                                    <div
                                                        className={
                                                            'header-item'
                                                        }
                                                    >
                                                        <FormGenerator
                                                            key={index}
                                                            component={item}
                                                            variant='header'
                                                        />
                                                    </div>
                                                )
                                            )}
                                    </>
                                )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {customization.pageData.apiParams &&
                                customization.pageData.apiParams.length > 0 && (
                                    <h3>API Body Parameters</h3>
                                )}
                            <Grid container>
                                {customization.pageData.apiParams &&
                                    customization.pageData.apiParams.map(
                                        (item, index) => {
                                            return (
                                                <Grid item xs={12}>
                                                    <FormGenerator
                                                        key={`${customization.pageData.requestCategory}-${customization.pageData.requestType}-${index}`}
                                                        component={item}
                                                        variant='body'
                                                    />
                                                </Grid>
                                            );
                                        }
                                    )}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )}
            <Grid container>
                <Grid
                    item
                    xs={6}
                    md={6}
                    sx={{
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    {customization.pageData.apiParams && (
                        <Button
                            variant='outlined'
                            color='primary'
                            fullWidth
                            onClick={() => generateRequest()}
                        >
                            Generate Request
                        </Button>
                    )}
                </Grid>
                <Grid
                    item
                    xs={6}
                    md={6}
                    sx={{
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    <Button
                        variant='contained'
                        color='success'
                        fullWidth
                        onClick={() => sendRequest()}
                    >
                        Send Request
                        {loading && (
                            <CircularProgress
                                color='inherit'
                                size={16}
                                sx={{ ml: '1rem' }}
                            />
                        )}
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    JSON Representation
                    <br />
                    <Paper
                        elevation={2}
                        sx={{
                            p: 2,
                            bgcolor: '#ffffff',
                            overflowY: 'scroll',
                            minHeight: '250px',
                            maxHeight: '250px',
                        }}
                    >
                        <pre id='request-json'>
                            {JSON.stringify(requestJson, null, 2)}
                        </pre>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>Response Header</span>
                    </div>
                    <Paper
                        elevation={2}
                        sx={{
                            p: 2,
                            bgcolor: '#ffffff',
                            overflowY: 'auto',
                            minHeight: '250px',
                            maxHeight: '250px',
                        }}
                    >
                        <pre id='response-json'>
                            {JSON.stringify(
                                clientCorrelId
                                    ? {
                                          clientCorrelationId: clientCorrelId,
                                          ...responseHeader,
                                      }
                                    : responseHeader,
                                null,
                                2
                            )}
                        </pre>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <span>Response &nbsp;</span>
                            {responseStatus && (
                                <span
                                    style={
                                        responseStatus >= 400
                                            ? { color: '#ff0000' }
                                            : responseStatus >= 300
                                            ? { color: '#ffff00' }
                                            : responseStatus >= 200 && {
                                                  color: '#00ff00',
                                              }
                                    }
                                >
                                    Status: {responseStatus}&nbsp;
                                </span>
                            )}
                        </div>
                        <span>
                            {pollTime > 0 ? `Polled Time:${pollTime}` : ''}
                        </span>
                    </div>
                    <Paper
                        elevation={2}
                        sx={{
                            p: 2,
                            bgcolor: '#ffffff',
                            overflowY: 'auto',
                            minHeight: '350px',
                            maxHeight: '350px',
                        }}
                    >
                        <pre id='response-json'>
                            {!(typeof responseJson === 'string')
                                ? JSON.stringify(responseJson, null, 2)
                                : responseJson}
                        </pre>
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar
                open={showToaster.status}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                onClose={() =>
                    handleToaster((prevState) => ({
                        ...prevState,
                        status: false,
                    }))
                }
            >
                <Alert
                    onClose={() =>
                        handleToaster((prevState) => ({
                            ...prevState,
                            status: false,
                        }))
                    }
                    severity={showToaster.type}
                    sx={{ width: '100%' }}
                >
                    {showToaster.message ? showToaster.message : ''}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Dashboard;
