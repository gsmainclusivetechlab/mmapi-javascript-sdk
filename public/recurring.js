GSMA_BASIC_AUTH = gsma.auth;

// setupRecurring();
viewDebitMandates()
function setupRecurring() {
    GSMA_BASIC_AUTH.RecurringPayment({
        type: 'createAccountDebitMandate',
        data:{
            "payee": [
             {
               "key": "accountid",
               "value": "2999"
             }
           ],
             "requestDate": "2018-07-03T10:43:27.405Z",
             "startDate": "2018-07-03T10:43:27.405Z",
             "currency": "GBP",
             "amountLimit": "1000.00",
             "endDate": "2028-07-03T10:43:27.405Z",
             "numberOfPayments": "2",
             "frequencyType": "sixmonths",
             "customData": [
                 {
                 "key": "keytest",
                 "value": "keyvalue"
                 }
             ]        
         },
         accountId:[{
             key:'accountId',
             value:'2000'
         }],

        onSuccess: (data, header, status) => {
            console.log('BASIC AUTH success createAccountDebitMandate', header, data);
        },
        onFailure: (error, status) => {
            console.error('BASIC AUTH error createAccountDebitMandate', error);
        },
    });
}

function viewDebitMandates() {
    GSMA_BASIC_AUTH.RecurringPayment({
        type: 'viewAccountDebitMandate',
        mandateReference:'REF-1637918417894',
        accountId:[{
            key:'accountId',
            value:'2000'
        }],
        onSuccess: (data, header, status) => {
            console.log(
                'BASIC AUTH success viewAccountDebitMandate',
                header,
                status,
                data
            );
        },
        onFailure: (error, status) => {
            console.error('BASIC AUTH error viewAccountDebitMandate', error);
        },
    });
}
