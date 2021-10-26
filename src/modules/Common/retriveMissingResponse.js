import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';

export default function (props, onError) {
    if (checkRequiredProps(props, ['clientCorrelationId'], onError)) {
        const { clientCorrelationId } = props;
        return requestMaker(
            `/responses/${clientCorrelationId}`,
            null,
            (props, onError) => {
                if (checkRequiredProps(props, ['link'], onError)) {
                    const { link } = props;
                    return requestMaker(link).get();
                }
            }
        ).get();
    }
}
