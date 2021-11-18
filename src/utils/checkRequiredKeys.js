const checkRequiredKeys = (allObjs = null, keys = [], onError = null) => {
    if (keys.length > 0) {
        let errors = [];
        keys.forEach((k) => {
            if (!allObjs.hasOwnProperty(k)) {
                errors.push({ key: k, value: '' });
            }
        });
        if (onError && errors.length > 0) {
            onError(
                {
                    errorCategory: 'validation',
                    errorCode: 'MandatoryValueNotSupplied',
                    errorDescription:
                        'A mandatory value has not been provided in the header and/or JSON body.',
                    errorParameters: errors,
                },
                '400'
            );
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
};
export default checkRequiredKeys;
