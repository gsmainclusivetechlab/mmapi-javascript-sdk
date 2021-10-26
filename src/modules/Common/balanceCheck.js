import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
export default function balanceCheck(props, onError) {
    if (checkRequiredProps(props, ['identifierType', 'identifier'], onError)) {
        const { identifierType, identifier } = props;
        return requestMaker(
            `/accounts/${identifierType}/${identifier}/balance`
        ).get();
    }
}
