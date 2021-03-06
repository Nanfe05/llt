import * as actionTypes from './actionTypes';


export const switchOnBoarding   = () =>({
    type: actionTypes.SWITCH_ONBOARDING,
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

export const setUserProfiles = (users) =>({
    type: actionTypes.SET_USER_PROFILES,
    value: users
});

export const setCompaniesProfiles = (companies) =>({
    type: actionTypes.SET_COMPANIES_PROFILES,
    value: companies
});

export const setServerResponse = (response) =>({
    type: actionTypes.SET_SERVER_RESPONSE,
    value:response
});

export const reset_analysis =()=>({
    type: actionTypes.SET_RESET_ANALYSIS
});

export const set_globalLoading =()=>({
    type: actionTypes.SET_GLOBAL_LOADING
});


export const set_errors= (errors)=>({
    type: actionTypes.SET_ERRORS,
    value: errors
});

export const set_notifications= (notifications)=>({
    type: actionTypes.SET_NOTIFICATIONS,
    value: notifications
});

export const set_log_user=(user)=>{
    return ({
    type: actionTypes.SET_LOG_USER,
    value:{
        name:user.displayName ,
        email:user.email ,
        id:user.uid 
    }
})};

export const set_team=(value)=>{
    return({
        type:actionTypes.SET_TEAM,
        value:value
    })
}

export const switch_team_modal=()=>({
    type: actionTypes.SWITCH_TEAM_MODAL
});