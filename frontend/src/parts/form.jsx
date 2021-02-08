import {useState} from 'react';
import InputText from '../components/inputText';
import Paper from '@material-ui/core/Paper';
import OptionPicker from '../components/optionPicker';
import {connect} from 'react-redux';
import {getCompanies, getUsers, analize} from '../utils/webRequest';
import {
    setCompanies,
    setCompany,setUsers,
    setUser,
    setUserProfiles,
    setCompaniesProfiles,
    setServerResponse,
    reset_analysis,
    set_globalLoading,
    set_errors
} from '../store/actions';
import SubmitButton from '../components/submit'

function Form ({
    company,
    companies,
    setCompanies,
    setCompany,
    setUsers,
    setUser,
    users,
    user,
    setUserProfiles,
    setCompaniesProfiles,
    setServerResponse,
    reset_analysis,
    set_globalLoading,
    set_errors
}){
    const [usersLoading, setUsersLoading] = useState(false);
    const [companiesLoading, setCompaniesLoading] = useState(false);


    return(
        <div className='form'>
            <Paper className="paper">
                    <p>Select a company and a User:</p>
                    <InputText label={'Company Name'} onChange={getCompanies} setState={setCompanies} unset={setCompany} setProfiles={setCompaniesProfiles} reset={reset_analysis} setLoading={setCompaniesLoading}/>
                    <OptionPicker label={'Choose a Company'} options={companies} setState={setCompany} state={company} reset={reset_analysis} loading={companiesLoading}/>
                    <InputText label={'User Name'} onChange={getUsers} setState={setUsers} unset={setUser} setProfiles={setUserProfiles} reset={reset_analysis} setLoading={setUsersLoading}/>
                    <OptionPicker label={'Choose a User'} options={users} setState={setUser} state={user} reset={reset_analysis} loading={usersLoading}/>
                    <SubmitButton company={company} user={user} func={analize} setResponse={setServerResponse} setLoading={set_globalLoading} setErrors={set_errors}/>
            </Paper>            
        </div>
    );
}

const mapStateToProps = state =>({
    companies: state.companies,
    company: state.companySelected,
    users: state.users,
    user: state.userSelected
});

export default connect(
    mapStateToProps,
    {
        setCompanies,
        setCompany,
        setUsers,
        setUser,
        setUserProfiles,
        setCompaniesProfiles,
        setServerResponse,
        reset_analysis,
        set_globalLoading,
        set_errors
    })(Form);