// check payment type exist in a particular module
export default function checkForExistingType(
  payamentTypes,
  type,
  rest,
  onFailure
) {
  if (payamentTypes[type]) {
    return payamentTypes[type](rest, onFailure);
  } else {
    onFailure('000', 'Invalid Payment Type');
    // return;
  }
}
