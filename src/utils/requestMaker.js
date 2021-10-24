export default function GenerateReqConfig(url, headers) {
  //   configure get request calls

  const get = (params) => {
    return {
      url,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'get',
      params: params,
    };
  };

  //  configure post request calls

  const post = (data, fileUpload = false) => {
    return {
      url,
      headers: {
        ...headers,
        'Content-Type': fileUpload ? 'multipart/form-data' : 'application/json',
        Accept: fileUpload ? 'multipart/form-data' : 'application/json',
      },
      data,
      method: 'post',
    };
  };

  //  configure patch request calls

  const patch = (data, fileUpload) => {
    return {
      url,
      headers: {
        ...headers,
        'Content-Type': fileUpload ? 'multipart/form-data' : 'application/json',
        Accept: fileUpload ? 'multipart/form-data' : 'application/json',
      },
      data: data,
      method: 'post',
    };
  };

  return {
    get,
    post,
    patch,
  };
}
