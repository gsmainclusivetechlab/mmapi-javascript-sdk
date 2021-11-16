import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
/**
 * Function to get all transaction for a specific account
 * @param  {} props must contain account identifier deatails and page offset & limit
 * @param  {} onError triggers some validation errors
 */
export default function getPreAuthCode(props, onError) {
    if (
        checkRequiredProps(
            props,
            ['identifierType', 'identifier','authorisationCode'],
            onError
        )
    ) {
        const { identifierType, identifier,authorisationCode } = props;
      
        return requestMaker(
            `/accounts/${identifierType}/${identifier}/authorisationcodes/${authorisationCode}`
        ).get();
    }
}
