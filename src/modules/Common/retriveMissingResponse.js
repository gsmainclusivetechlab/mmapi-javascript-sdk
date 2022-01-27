import { checkRequiredProps, requestMaker } from '../../utils';

export default function (props, onError) {
    if (checkRequiredProps(props, ['clientCorrelationId'], onError)) {
        const { clientCorrelationId } = props;
        return requestMaker(
            `/responses/${clientCorrelationId}`,
            null,
            (props_inner, onError_inner) => {
                if (checkRequiredProps(props_inner, ['link'], onError_inner)) {
                    const { link } = props_inner;
                    return requestMaker(link).get();
                }
            }
        ).get();
    }
}
