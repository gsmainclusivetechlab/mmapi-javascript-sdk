import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// material-ui
import { Button, Grid, Paper, Chip } from "@material-ui/core";
import FormGenerator from "../../../ui-component/formGenerator";
import { RESET_FORM } from "store/actions";

// ===========================|| DEFAULT DASHBOARD ||=========================== //

const Dashboard = () => {
  const customization = useSelector((state) => state.customization);
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [requestJson, setRequestJson] = useState(JSON.parse("{}"));
  const [responseJson, setResponseJson] = useState(null);
  const [responseHeader, setResponseHeader] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [clientCorrelId, setClientCorrelId] = useState(null);
  const [currentAPI, setCurrentAPI] = useState(null);
  const [pollTime, setPollTime] = useState(0);
  const changeAPIUrl = () => {
    console.log("Changing URL");
    setCurrentAPI(
      `${
        window.gsma && window.gsma.auth
          ? "window.gsma.auth"
          : "window.gsma.noAuth"
      }${
        customization.pageData.requestCategory
          ? `.${customization.pageData.requestCategory}`
          : ""
      }${
        customization.pageData.requestType
          ? `.${customization.pageData.requestType}`
          : ""
      }`
    );
  };
  useEffect(() => {
    dispatch({ type: RESET_FORM });
    setRequestJson(JSON.parse("{}"));
    setResponseJson(null);
    setResponseStatus(null);
    setResponseHeader(null);
    setClientCorrelId(null);
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
  const checkRequestState = (requestFunction, serverCorrelationId) => {
    return requestFunction({
      type: customization.pageData.pollingFunction
        ? customization.pageData.pollingFunction
        : "viewRequestState",
      serverCorrelationId,
      onSuccess: (res, header, status) => {
        if (res.status === "pending") {
          return false;
        } else {
          setResponseStatus(parseInt(status));
          setResponseJson(res);
          setResponseHeader(header);
          return true;
        }
      },
      onFailure: (res, status) => {
        console.log("POLLING FAILED :", { res, status });
        setResponseStatus(parseInt(status));
        setResponseJson(res);
        return true;
      },
    });
  };
  function polling(timeout, pollLimit, currentPollTime = 0) {
    setPollTime(currentPollTime);

    if (window.gsma && window.gsma.auth) {
      window.gsma.auth[customization.pageData.requestCategory]({
        ...requestJson,
        onSuccess: (res, header, status) => {
          setResponseStatus(parseInt(status));
          setResponseJson(res);
          setResponseHeader(header);
          if (res.status === "pending" && currentPollTime < pollLimit) {
            currentPollTime++;
            if (
              !checkRequestState(
                customization.pageData.requestCategory,
                res.serverCorrelationId
              )
            ) {
              setTimeout(() => {
                polling(timeout, pollLimit, currentPollTime);
              }, timeout);
            }
          }
        },
        onFailure: (res, status) => {
          setResponseStatus(parseInt(status));
          setResponseJson(res);
          console.log("POLLING FAILED :", { res, status });
        },
      });
    } else {
      window.gsma.noAuth[customization.pageData.requestCategory]({
        ...requestJson,
        onSuccess: (res, header, status) => {
          setResponseStatus(parseInt(status));
          setResponseJson(res);
          setResponseHeader(header);
          if (res.status === "pending" && currentPollTime < pollLimit) {
            currentPollTime++;
            if (
              !checkRequestState(
                customization.pageData.requestCategory,
                res.serverCorrelationId
              )
            ) {
              setTimeout(() => {
                polling(timeout, pollLimit, currentPollTime);
              }, timeout);
            }
          }
        },
        onFailure: (res, status) => {
          setResponseStatus(parseInt(status));
          setResponseJson(res);
          console.log("POLLING FAILED :", { res, status });
        },
      });
    }
  }
  const sendRequest = () => {
    setClientCorrelId(null);
    if (customization.pageData.requestCategory) {
      if (
        window.gsma &&
        window.gsma.auth &&
        window.gsma.auth[customization.pageData.requestCategory]
      ) {
        window.gsma.auth[customization.pageData.requestCategory]({
          ...requestJson,
          getClientCorrelationId: customization.pageData.returnClientCorrelation
            ? (id) => setClientCorrelId(id)
            : false,
          onSuccess: (res, header, status) => {
            console.log("header ::", header);
            if (
              (customization.pageData.polling ||
                res.notificationMethod === "polling") &&
              res.pollLimit &&
              res.status === "pending"
            ) {
              if (
                !checkRequestState(
                  window.gsma.auth[customization.pageData.requestCategory],
                  res.serverCorrelationId
                )
              ) {
                polling(2000, res.pollLimit);
              }
            }
            setResponseStatus(parseInt(status));
            setResponseJson(res);
            setResponseHeader(header);
          },
          onFailure: (res, status) => {
            setResponseStatus(parseInt(status));
            setResponseJson(res);
          },
        });
      } else if (window.gsma.noAuth[customization.pageData.requestCategory]) {
        window.gsma.noAuth[customization.pageData.requestCategory]({
          ...requestJson,
          getClientCorrelationId: customization.pageData.returnClientCorrelation
            ? (id) => setClientCorrelId(id)
            : false,
          onSuccess: (res, header, status) => {
            if (
              (customization.pageData.polling ||
                res.notificationMethod === "polling") &&
              res.pollLimit &&
              res.status === "pending"
            ) {
              if (
                !checkRequestState(
                  window.gsma.noAuth[customization.pageData.requestCategory],
                  res.serverCorrelationId
                )
              ) {
                polling(2000, res.pollLimit);
              }
            }
            setResponseStatus(parseInt(status));
            setResponseHeader(header);
            setResponseJson(res);
          },
          onFailure: (res, status) => {
            console.log(res);
            setResponseStatus(parseInt(status));
            setResponseJson(res);
          },
        });
      } else {
        alert("SDK Function is Unavailable");
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
                variant="outlined"
                color="primary"
              />
            )}
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {customization.pageData.apiHeaders &&
                customization.pageData.apiHeaders.length > 0 && (
                  <>
                    <h3>API Headers</h3>
                    {customization.pageData.apiHeaders &&
                      customization.pageData.apiHeaders.map((item, index) => (
                        <div>
                          <FormGenerator
                            key={index}
                            component={item}
                            variant="header"
                          />
                        </div>
                      ))}
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
                  customization.pageData.apiParams.map((item, index) => {
                    return (
                      <Grid item xs={12}>
                        <FormGenerator
                          key={`${customization.pageData.requestCategory}-${customization.pageData.requestType}-${index}`}
                          component={item}
                          variant="body"
                        />
                      </Grid>
                    );
                  })}
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
              variant="outlined"
              color="primary"
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
            variant="contained"
            color="success"
            fullWidth
            onClick={() => sendRequest()}
          >
            Send Request
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
              bgcolor: "#ffffff",
              overflowY: "scroll",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <pre id="request-json">{JSON.stringify(requestJson, null, 2)}</pre>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Response Header</span>
          </div>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              bgcolor: "#ffffff",
              overflowY: "auto",
              minHeight: "250px",
              maxHeight: "250px",
            }}
          >
            <pre id="response-json">
              {JSON.stringify(
                clientCorrelId
                  ? { clientCorrelationId: clientCorrelId, ...responseHeader }
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>Response &nbsp;</span>
              {responseStatus && (
                <span
                  style={
                    responseStatus >= 400
                      ? { color: "#ff0000" }
                      : responseStatus >= 300
                      ? { color: "#ffff00" }
                      : responseStatus >= 200 && {
                          color: "#00ff00",
                        }
                  }
                >
                  Status: {responseStatus}&nbsp;
                </span>
              )}
            </div>
            <span>
              {customization.pageData.polling ? `Polled Time:${pollTime}` : ""}
            </span>
          </div>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              bgcolor: "#ffffff",
              overflowY: "auto",
              minHeight: "350px",
              maxHeight: "350px",
            }}
          >
            <pre id="response-json">
              {JSON.stringify(responseJson, null, 2)}
            </pre>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
