import { v4 as uuidv4 } from 'uuid';
// check payment type exist in a particular module
export default function checkForExistingType(
  payamentTypes,
  type,
  rest,
  onFailure
) {
  if (payamentTypes[type]) {
    const corelationId = uuidv4();
    let restWithCorelationId = { corelationId, ...rest };
    return payamentTypes[type](restWithCorelationId, onFailure);
  } else {
    onFailure('000', 'Invalid Payment Type', type);
    // return;
  }
}
