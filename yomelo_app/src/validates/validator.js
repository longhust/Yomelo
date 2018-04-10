const regFullName = /[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
const regUsername = /^[a-zA-Z0-9_-]{3,15}$/
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regPhoneNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
const regPassWord = /^(?=.*[a-z])(?=.{8,})/

const validator = {

    checkLenght: (input, min, max) => {
        return (input.lenght >= min && input.lenght <= max);
    },
    checkEmail: (input) => {
        return regEmail.test(input);
    },
    checkPhoneNumber: (input) => {
        return regPhoneNumber.test(input);
    },
    checkFullName: (input) => {
        return regFullName.test(input)
    },
    checkUsername: (input) => {
        return regUsername.test(input);
    },
    checkPassword: (input) => {
        return regPassWord.test(input)
    }
}
export default validator;