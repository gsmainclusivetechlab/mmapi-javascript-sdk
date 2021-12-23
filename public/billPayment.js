GSMA_BASIC_AUTH = gsma.auth;

GSMA_BASIC_AUTH.BillPayment({
    type:'viewAccountBills',
    accountId:[{
        key:'accountid',
        value:1
    }],
    filter:[
        {
            key:'offset',
            value:0
        },
        {
            key:'limit',
            value:20
        }
    ],
    onSuccess: (data,header, status) => {
        console.log('BASIC AUTH success view bills', data,header,status);
    },
    onFailure: (error, status) => {
        console.error('BASIC AUTH error view bills', error,status);
    },
})

GSMA_BASIC_AUTH.BillPayment({
    type:'createBillPayment',
    accountId:[{
        key:'accountid',
        value:1
    }],
    billReference:'REF-000001',
    data:{
    "currency": "GBP",
    "amountPaid": "5.30"
    },
    onSuccess: (data,header, status) => {
        console.log('BASIC AUTH success createBillPayment', data,header,status);
    },
    onFailure: (error, status) => {
        console.error('BASIC AUTH error createBillPayment', error,status);
    },
})


GSMA_BASIC_AUTH.BillPayment({
    type:'viewBillPayment',
    accountId:[{
        key:'accountid',
        value:1
    }],
    billReference:'REF-000001',
    filter:[
        {
            key:'offset',
            value:0
        },
        {
            key:'limit',
            value:20
        }
    ],
    onSuccess: (data,header, status) => {
        console.log('BASIC AUTH success viewBillPayment', data,header,status);
    },
    onFailure: (error, status) => {
        console.error('BASIC AUTH error viewBillPayment', error,status);
    },
})