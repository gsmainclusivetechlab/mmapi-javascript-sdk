import { checkForTokenExpire } from './initSdkWithTokenHandler';

test('Test token expire', () => {
    let oldTime = new Date(2021, 12, 12).getTime() / 1000;
    let newTime = new Date().getTime() / 1000 + 3600;
    expect(checkForTokenExpire(oldTime)).toBe(false);
    expect(checkForTokenExpire(newTime)).toBe(true);
});
