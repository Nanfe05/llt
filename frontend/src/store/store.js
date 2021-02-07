import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as actionTypes from './actionTypes';

const initialState = {
    onBoarding: true,
    user: false,
};

const store = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SWITCH_ONBOARDING:
            return {...state,onBoarding:!state.onBoarding};
        default:
            return state;
    }
}

export default createStore(store,composeWithDevTools(applyMiddleware(thunk)))