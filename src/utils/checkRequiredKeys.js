const checkRequiredKeys = (allObjs = null, keys = [], onError) => {
  if (keys.length > 0) {
    let hasErrors = [];
    keys.forEach((k) => {
      if (allObjs[k]) {
      } else {
        hasErrors.push(`${k} is required`);
      }
    });
    if (hasErrors.length > 0) {
      onError('00', hasErrors);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
export default checkRequiredKeys;
