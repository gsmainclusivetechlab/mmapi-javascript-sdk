export const regxChecker = (reg, item) => {
    return reg.test(item);
};
export function isValidURL(url) {
    return regxChecker(
        /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
        url
    );
}

export const callbackUrlValidateWrapperWithMandatoryCheck =
    (parent) => (props) => {
        const { callbackUrl = null, ...restProps } = props;
        let propsAfterValidatingCallbackUrl;
        const callbackUrlValidatorObject = {
            errorCategory: 'validation',
            errorCode: 'Invalid CallBack Url',
            errorDescription: 'SDK initiated without callback url',
            errorParameters: [{ key: 'callbackUrl', value: callbackUrl }],
        };
        // check for callback url
        if (callbackUrl) {
            if (isValidURL(callbackUrl)) {
                propsAfterValidatingCallbackUrl = props;
            } else {
                if (props?.onFailure) {
                    props.onFailure(callbackUrlValidatorObject, 400);
                } else {
                    console.error(callbackUrlValidatorObject);
                }

                propsAfterValidatingCallbackUrl = restProps;
            }
        } else {
            propsAfterValidatingCallbackUrl = restProps;
        }
        // check for required props
        if (props?.username && props?.pass && props?.apiKey) {
            parent(propsAfterValidatingCallbackUrl);
        } else {
            const missingPropsErrorObject = {
                errorCategory: 'validation',
                errorCode: 'MandatoryValueNotSupplied',
                errorDescription:
                    'Any of the mandatory value has not been provided while initialization.',
                errorParameters: [
                    { key: 'username', value: '' },
                    { key: 'pass', value: '' },
                    { key: 'apiKey', value: '' },
                ],
            };
            if (props?.onFailure) {
                props.onFailure(missingPropsErrorObject, 400);
            } else {
                console.error(missingPropsErrorObject);
            }
        }
    };

export const checkWhetherCallbackPresentAndValid = (
    config,
    props,
    proceedCallBack
) => {
    const {
        headers: { 'X-Callback-URL': callbackUrl = null },
    } = config;
    if (callbackUrl) {
        if (isValidURL(callbackUrl)) {
            proceedCallBack();
        } else {
            props.onFailure({
                errorCategory: 'validation',
                errorCode: 'Invalid CallBack Url',
                errorDescription: 'Provided CallBack Url is invalid',
                errorParameters: [{ key: 'callbackUrl', value: callbackUrl }],
            });
        }
    } else {
        proceedCallBack();
    }
};
