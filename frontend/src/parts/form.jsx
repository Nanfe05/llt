import InputText from '../components/inputText';
import Paper from '@material-ui/core/Paper';
import OptionPicker from '../components/optionPicker';
import {connect} from 'react-redux';
import {getCompanies, getUsers, analize} from '../utils/webRequest';
import {setCompanies,setCompany,setUsers,setUser,setUserProfiles, setCompaniesProfiles,setServerResponse,reset_analysis} from '../store/actions';
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
    reset_analysis
}){

    return(
        <div className='form'>
            <Paper className="paper">
                    <p>Select a company and a User:</p>
                    <InputText label={'Company Name'} onChange={getCompanies} setState={setCompanies} unset={setCompany} setProfiles={setCompaniesProfiles} reset={reset_analysis}/>
                    <OptionPicker label={'Choose a Company'} options={companies} setState={setCompany} state={company} reset={reset_analysis}/>
                    <InputText label={'User Name'} onChange={getUsers} setState={setUsers} unset={setUser} setProfiles={setUserProfiles} reset={reset_analysis}/>
                    <OptionPicker label={'Choose a User'} options={users} setState={setUser} state={user} reset={reset_analysis}/>
                    <SubmitButton company={company} user={user} func={analize} setResponse={setServerResponse}/>
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
        reset_analysis
    })(Form);