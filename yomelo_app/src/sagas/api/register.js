
const urlRegister = 'http://192.168.1.28:3000/api/register'
const urlLogin = 'http://192.168.1.28:3000/api/login';
const urlVerify = 'http://192.168.1.28:3000/api/register/verify'

export function* registerNewUser(newUser) {
    //console.log('API');
    const respone = yield fetch(urlRegister, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            phone: newUser.phone,
            password: newUser.password,
            type: newUser.type,
        })
    });
    //console.log(yield respone.json());
    const result= yield respone.json();
    //console.log(result.code)
    return result.code;
}
export function* verifyAccount(user) {
    console.log("api verify", user)
    const respone = yield fetch(urlVerify, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            token: user.token
        })
    });
    const result = yield respone.json();
    console.log(result)
    return result.code;
}

export const Api = {
    registerNewUser,
    verifyAccount
}