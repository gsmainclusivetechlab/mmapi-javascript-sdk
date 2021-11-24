export default function requestMaker(
    url = '',
    headers = null,
    tailingFunctionCall = null
) {
    //   configure get request calls

    const get = (params = null) => {
        let localHeader = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        if (headers) {
            localHeader = { ...localHeader, ...headers };
        }

        let getConfig = {
            url,
            headers: localHeader,
            method: 'get',
        };
        // check for params
        if (params) {
            getConfig['params'] = params;
        }

        if (tailingFunctionCall) {
            getConfig['tailingFunctionCall'] = tailingFunctionCall;
        }
        return getConfig;
    };

    //  configure post request calls

    const post = (data, fileUpload = false) => {
        return {
            url,
            headers: {
                ...headers,
                'Content-Type': fileUpload
                    ? 'multipart/form-data'
                    : 'application/json',
                Accept: fileUpload ? 'multipart/form-data' : 'application/json',
            },
            data,
            method: 'post',
        };
    };

    //  configure patch request calls

    const patch = (data, fileUpload = false) => {
        return {
            url,
            headers: {
                ...headers,
                'Content-Type': fileUpload
                    ? 'multipart/form-data'
                    : 'application/json',
                Accept: fileUpload ? 'multipart/form-data' : 'application/json',
            },
            data,
            method: 'patch',
        };
    };

    return {
        get,
        post,
        patch,
    };
}
