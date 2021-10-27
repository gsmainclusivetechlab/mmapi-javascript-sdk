// ------------ Standard Auth  --------------

//1.  sdk handling token creation and its expirey

gsma.initStandardAuth({
    username: '59vthmq3f6i15v6jmcjskfkmh', //consumer key
    pass: 'ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb', //consumer secret key
    apiKey: 'oVN89kXyTx1cKT3ZohH7h6foEmQmjqQm3OK2U8Ue', //api key
    onSuccess: (data) => {
        console.log('Std Auth1 sucess=>', data);
        afterInit();
    },
    onFailure: (error) => {
        console.log('Std Auth1  error=>', error);
    },
});

function afterInit() {
    //   call for balance check
    gsma.auth.merchantPay({
        type: 'balanceCheck',
        identifierType: 'accountid',
        identifier: 1,
        onSuccess: (status, data) => {
            console.log('STD-AUTH 1 success balance check', status, data);
        },
        onFailure: (status, data) => {
            console.log('STD-AUTH 1 error balance check', status, data);
        },
    });
}
