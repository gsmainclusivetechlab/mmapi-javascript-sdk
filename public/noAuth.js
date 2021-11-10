gsma.noAuth.merchantPay({
    type: 'initPayment',
    data: {
        amount: '200.00',
        debitParty: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
        creditParty: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
        currency: 'RWF',
    },
    //     callbackUrl:
    //   'https://1527dea3-111f-48de-ba27-1c840df261c1.mock.pstmn.io/callback',
    onSuccess: ( data) => {
        console.log('NO-AUTH  success initPayment',  data);
    },
    onFailure: (error, status) => {
        console.error('NO-AUTH  error in payInit', error, status);
    },
});
