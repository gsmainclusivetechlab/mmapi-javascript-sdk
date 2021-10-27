gsma.noAuth.merchantPay({
    type: 'balanceCheck',
    identifierType: 'accountid',
    identifier: 1,
    onSuccess: (status, data) => {
        console.log('NO-AUTH  success balance check', status, data);
    },
    onFailure: (status, data) => {
        console.log('NO-AUTH  error balance check', status, data);
    },
});
