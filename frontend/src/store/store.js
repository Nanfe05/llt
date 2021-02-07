import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as actionTypes from './actionTypes';

const initialState = {
    onBoarding: true,
    infoModal:false,
    logModal:false,
    user: false,
    companies:[],
    companySelected:null,
    users:[],
    userSelected:null
};


const store = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SWITCH_ONBOARDING:
            return {...state,onBoarding:!state.onBoarding};
        case actionTypes.SWITCH_INFOMODAL:
            return {...state,infoModal:!state.infoModal};
        case actionTypes.SWITCH_LOG:
            return {...state,logModal: !state.logModal};
        case actionTypes.SET_COMPANIES:
            return {...state, companies: action.value};
        case actionTypes.SET_COMPANY:
            return {...state, companySelected:action.value};
        case actionTypes.SET_USERS:
            return {...state, users: action.value};
        case actionTypes.SET_USER:
            return{...state, userSelected: action.value};
        default:
            return state;
    }
}

export default createStore(store,composeWithDevTools(applyMiddleware(thunk)))