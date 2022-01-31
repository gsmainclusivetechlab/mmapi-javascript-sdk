import checkRequiredProps from './checkRequiredKeys';

test('testing  checkRequiredProps function', () => {
    expect(
        checkRequiredProps(
            {
                type: 'balanceCheck',
            },
            ['type']
        )
    ).toBe(true);

    expect(
        checkRequiredProps(
            {
                type: 'balanceCheck',
            },
            ['data']
        )
    ).toBe(false);

    expect(checkRequiredProps({ type: 'balanceCheck' })).toBe(true);

    expect(
        checkRequiredProps(
            {
                typo: 'sdsd',
            },
            ['type'],
            (error) => {
                expect(error).toEqual({
                    errorCategory: 'validation',
                    errorCode: 'MandatoryValueNotSupplied',
                    errorDescription:
                        'A mandatory value has not been provided in the header and/or JSON body.',
                    errorParameters: [{ key: 'type', value: '' }],
                });
            }
        )
    ).toBe(false);
});
