import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
/**
 * Function to get recepient name
 * @param  {} props must contain identifierType and identifier
 * @param  {} onError triggered when there is some error in validation
 */
export default function getRecepientName(props, onError) {
    if (checkRequiredProps(props, ['identifierType', 'identifier'], onError)) {
        let { identifierType, identifier } = props;
        return requestMaker(
            `/accounts/${identifierType}/${identifier}/accountname`
        ).get();
    }
}
