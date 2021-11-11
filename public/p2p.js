GSMA_BASIC_AUTH = gsma.auth;

getRecepientName();
// requestQuotation();
// p2pTransfer();

function getRecepientName() {
    GSMA_BASIC_AUTH.p2p({
        type: 'getRecepientName',
        identifierType: 'accountid',
        identifier: '2000',

        onSuccess: (data, header, status) => {
            console.log('BASIC AUTH success getRecepientName', header, data);
        },
        onFailure: (error, status) => {
            console.error('BASIC AUTH error getRecepientName', error);
        },
    });
}

function requestQuotation() {
    GSMA_BASIC_AUTH.p2p({
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
        onSuccess: (data, header, status) => {
            console.log(
                'BASIC AUTH success requestQuotation',
                header,
                status,
                data
            );
        },
        onFailure: (error, status) => {
            console.error('BASIC AUTH error requestQuotation', error);
        },
    });
}

function p2pTransfer() {
    GSMA_BASIC_AUTH.p2p({
        type: 'transfer',
        data: {
            amount: '100.00',
            creditParty: [
                {
                    key: 'accountid',
                    value: '2000',
                },
            ],
            currency: 'GBP',
            debitParty: [
                {
                    key: 'accountid',
                    value: '2999',
                },
            ],
            internationalTransferInformation: {
                originCountry: 'AD',
                quotationReference: '{{quotationReference}}',
                quoteId: '{{quoteId}}',
                remittancePurpose: 'personal',
                deliveryMethod: 'agent',
            },
            requestingOrganisation: {
                requestingOrganisationIdentifierType: 'organisationid',
                requestingOrganisationIdentifier: 'testorganisation',
            },
        },
        onSuccess: (data, header, status) => {
            console.log('BASIC AUTH success p2pTransfer', data, header, status);
        },
        onFailure: (error, status) => {
            console.error('BASIC AUTH error p2pTransfer', error);
        },
    });
}
