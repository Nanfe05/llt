import * as actionTypes from './actionTypes';


export const switchOnBoarding   = () =>({
    type: actionTypes.SWITCH_ONBOARDING
});

export const switchInfoModal   = () =>({
    type: actionTypes.SWITCH_INFOMODAL
});

export const switchLogModal   = () =>({
    type: actionTypes.SWITCH_LOG
});

export const setCompanies = (companies)=>({
    type: actionTypes.SET_COMPANIES,
    value: companies
});

export const setCompany = (company)=>({
    type: actionTypes.SET_COMPANY,
    value: company
});

export const setUsers = (users)=>({
    type: actionTypes.SET_USERS,
    value: users
});

export const setUser = (user)=>({
    type: actionTypes.SET_USER,
    value: user
});