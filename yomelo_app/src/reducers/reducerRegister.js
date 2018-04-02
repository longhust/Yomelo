import { REGISTER_ACCOUNT, VALIDATES_INPUT } from '../actions/type';

const initelState={
    informationAccount:{

    }
}

const registerReducer = (account = [], action) => {
    switch (action.type) {
        case REGISTER_ACCOUNT:
            return {

            }
        case VALIDATES_INPUT:
            return {

            }
        default:
            return account;
    }
}

export default registerReducer;