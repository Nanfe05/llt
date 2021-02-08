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
    userProfiles:[],
    companiesProfiles:[],
    userSelected:null,
    serverResponse:null,
    errors:null,
    globalLoading:false,
};


const store = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_ERRORS:
            return {...state, errors: action.value};
        case actionTypes.SET_GLOBAL_LOADING:
            return {...state,globalLoading: !state.globalLoading};
        case actionTypes.SET_RESET_ANALYSIS:
            return {...state,user: false,serverResponse:null};
        case actionTypes.SET_SERVER_RESPONSE:
            return {...state, serverResponse: action.value};
        case actionTypes.SET_COMPANIES_PROFILES:
            return {...state, companiesProfiles:action.value}
        case actionTypes.SET_USER_PROFILES:
            return {...state, userProfiles:action.value};
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