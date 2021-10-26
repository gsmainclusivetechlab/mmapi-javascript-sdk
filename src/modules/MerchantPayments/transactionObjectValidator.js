import { regxChecker } from '../../utils/validator';
export function transactionObjectValidtor(
    transactionObject,
    testKeys = [],
    onError
) {
    let errors = [];
    if (testKeys.length > 0) {
        testKeys.forEach((testKey) => {
            switch (testKey) {
                case 'amount': {
                    if (
                        !regxChecker(
                            /^([0]|([1-9][0-9]{0,17}))([.][0-9]{0,3}[0-9])?$/m,
                            transactionObject[testKey]
                        )
                    ) {
                        errors.push({
                            key: 'amount',
                            value: 'must match "^([0]|([1-9][0-9]{0,17}))([.][0-9]{0,3}[0-9])?$"',
                        });
                    }
                }
                default:
                    null;
            }
        });
    }

    if (errors.length > 0) {
        onError(
            {
                errorCategory: 'validation',
                errorCode: 'formatError',
                errorDescription: 'Invalid JSON Field',
                errorParameters: errors,
            },
            '400'
        );
    }
    return errors.length === 0;
}
