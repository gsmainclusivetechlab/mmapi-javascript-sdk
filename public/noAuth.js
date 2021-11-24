gsma.noAuth.merchantPay({
    type: 'createAuthorisationCode',
    data: {
        requestDate: '2018-07-03T10:43:27.405Z',
        currency: 'GBP',
        amount: '1000.00',
    },
    callbackUrl:
        'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
    accountId: [
        {
            key: 'accountid',
            value: '2000',
        },
        {
            key: 'accountid',
            value: '2000',
        },
    ],
    onSuccess: (data) => {
        console.log('NO-AUTH  success auth code', data);
    },
    onFailure: (error, status) => {
        console.error('NO-AUTH  error auth code', error, status);
    },
});
