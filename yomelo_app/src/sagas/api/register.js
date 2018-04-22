const ip = '192.168.0.101';
const urlRegister = `http://${ip}:3000/api/register`;
const urlLogin = `http://${ip}:3000/api/login`;
const urlVerify = `http://${ip}:3000/api/register/verify`;

function* registerNewUser(newUser) {
    //console.log('API');
    //console.log(urlRegister);
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
    const result = yield respone.json();
    return result.code;
}
function* verifyAccount(user) {
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
    //console.log(result)
    return result.code;
}

export const ApiRegister = {
    registerNewUser,
    verifyAccount
}