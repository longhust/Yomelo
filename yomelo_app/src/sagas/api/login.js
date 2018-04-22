const ip = '192.168.0.101';
const urlLogin = `http://${ip}:3000/api/login`

function* loginAccount(params) {
    console.log(urlLogin, params.username, params.email, params.password)
    const respone = yield fetch(urlLogin, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: params.username,
            email: params.email,
            password: params.password,
        })
    });
    const resutl=yield respone.json();
    return resutl;
}

export const ApiLogin = {
    loginAccount
}