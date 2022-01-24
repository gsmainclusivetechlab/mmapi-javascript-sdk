import axios from 'axios';
import qs from 'qs';
const GSMA_TOKEN_URL = process.env.GSMA_TOKEN_URL;

export default ({ username, pass, onSuccess, onFailure }) => {
    const base64Data = window.btoa(`${username}:${pass}`);
    axios
        .post(
            GSMA_TOKEN_URL,
            qs.stringify({
                grant_type: 'client_credentials',
            }),
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${base64Data}`,
                },
            }
        )
        .then((res) => {
            if (res && res.data) {
                onSuccess(res?.data, res?.status);
            } else {
                onFailure(
                    {
                        errorCategory: 'Internal',
                        errorCode: 'GenericError',
                        errorDescription:
                            'The request could not be completed as access token is missing',
                        errorParameters: [{ key: 'accessToken', value: '' }],
                    },
                    400
                );
            }
        })
        .catch((error) => {
            if (error && error.response)
                onFailure((error?.response?.data, error?.response?.status));
            else onFailure(error);
        });
};
