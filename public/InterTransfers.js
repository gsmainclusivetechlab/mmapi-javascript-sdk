GSMA_BASIC_AUTH = gsma.auth;

function requestQuotation() {
    GSMA_BASIC_AUTH.international({
        type: 'requestQuotation',
        data: {
            creditParty: [
                {
                    key: 'accountid',
                    value: '2000',
                },
            ],
            debitParty: [
                {
                    key: 'accountid',
                    value: '2999',
                },
            ],
            requestAmount: '75.30',
            requestCurrency: 'RWF',
            requestDate: '2018-07-03T11:43:27.405Z',
            type: 'inttransfer',
            subType: 'abc',
            chosenDeliveryMethod: 'agent',
            senderKyc: {
                nationality: 'GB',
                dateOfBirth: '1970-07-03T11:43:27.405Z',
                occupation: 'Manager',
                employerName: 'MFX',
                contactPhone: '+447125588999',
                gender: 'm',
                emailAddress: 'luke.skywalkeraaabbb@gmail.com',
                birthCountry: 'GB',
                idDocument: [
                    {
                        idType: 'nationalidcard',
                        idNumber: '1234567',
                        issueDate: '2018-07-03T11:43:27.405Z',
                        expiryDate: '2021-07-03T11:43:27.405Z',
                        issuer: 'UKPA',
                        issuerPlace: 'GB',
                        issuerCountry: 'GB',
                        otherIdDescription: 'test',
                    },
                ],
                postalAddress: {
                    country: 'GB',
                    addressLine1: '111 ABC Street',
                    city: 'New York',
                    stateProvince: 'New York',
                    postalCode: 'ABCD',
                },
                subjectName: {
                    title: 'Mr',
                    firstName: 'Luke',
                    middleName: 'R',
                    lastName: 'Skywalker',
                    fullName: 'Luke R Skywalker',
                    nativeName: 'ABC',
                },
            },
            customData: [
                {
                    key: 'keytest',
                    value: 'keyvalue',
                },
            ],
            sendingServiceProviderCountry: 'AD',
            originCountry: 'AD',
            receivingCountry: 'AD',
        },
        onSuccess: (data, status) => {
            console.log('BASIC AUTH success requestQuotation', status, data);
        },
        onFailure: (error, status) => {
            console.error('BASIC AUTH error requestQuotation', error);
        },
    });
}

// GSMA_BASIC_AUTH.international({
//     type: 'transfer',
//     data: {
//         amount: '100.00',
//         creditParty: [
//             {
//                 key: 'accountid',
//                 value: '2000',
//             },
//         ],
//         currency: 'GBP',
//         debitParty: [
//             {
//                 key: 'accountid',
//                 value: '2999',
//             },
//         ],
//         internationalTransferInformation: {
//             originCountry: 'GB',
//             // "quotationReference": "REF-1636537211456",
//             // "quoteId": "{{quoteId}}",
//             receivingCountry: 'RW',
//             remittancePurpose: 'personal',
//             relationshipSender: 'none',
//             deliveryMethod: 'agent',
//             sendingServiceProviderCountry: 'AD',
//         },
//         senderKyc: {
//             nationality: 'GB',
//             dateOfBirth: '1970-07-03T11:43:27.405Z',
//             occupation: 'Manager',
//             employerName: 'MFX',
//             contactPhone: '+447125588999',
//             gender: 'm',
//             emailAddress: 'luke.skywalkeraaabbb@gmail.com',
//             birthCountry: 'GB',
//             idDocument: [
//                 {
//                     idType: 'nationalidcard',
//                     idNumber: '1234567',
//                     issueDate: '2018-07-03T11:43:27.405Z',
//                     expiryDate: '2021-07-03T11:43:27.405Z',
//                     issuer: 'UKPA',
//                     issuerPlace: 'GB',
//                     issuerCountry: 'GB',
//                     otherIdDescription: 'test',
//                 },
//             ],
//             postalAddress: {
//                 country: 'GB',
//                 addressLine1: '111 ABC Street',
//                 city: 'New York',
//                 stateProvince: 'New York',
//                 postalCode: 'ABCD',
//             },
//             subjectName: {
//                 title: 'Mr',
//                 firstName: 'Luke',
//                 middleName: 'R',
//                 lastName: 'Skywalker',
//                 fullName: 'Luke R Skywalker',
//                 nativeName: 'ABC',
//             },
//         },
//         requestingOrganisation: {
//             requestingOrganisationIdentifierType: 'organisationid',
//             requestingOrganisationIdentifier: 'testorganisation',
//         },
//     },
//     onSuccess: (data, header, status) => {
//         console.log('BASIC AUTH success international transfer', status, data);
//         getState(data)
//     },
//     onFailure: (error, header, status) => {
//         console.error('BASIC AUTH error international transfer', error);
//     },
// });


// function getReference({objectReference}){
//     GSMA_BASIC_AUTH.international({
//         type: 'reversal',
//         transactionReference:objectReference,
//         onSuccess: (data, header, status) => {
//             console.log('BASIC AUTH success international reversal', status, data);
//         },
//         onFailure: (error, header, status) => {
//             console.error('BASIC AUTH error international reversal', error);
//         },
//     });
// }

// GSMA_BASIC_AUTH.international({
//     type:'retrieveMissingRequest',
//     clientCorrelationId:"c310f940-68d2-4887-98de-244df687a235",
//     onSuccess: (data, header,status) => {
//         console.log('BASIC AUTH success missing response', status, data);
//     },
//     onFailure: (error, status) => {
//         console.error('BASIC AUTH error missing response', error);
//     },
// })