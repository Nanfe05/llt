import InputText from '../components/inputText';
import Paper from '@material-ui/core/Paper';
import OptionPicker from '../components/optionPicker';
import {connect} from 'react-redux';
import {getCompanies, getUsers} from '../utils/webRequest';
import {setCompanies,setCompany,setUsers,setUser} from '../store/actions';

function Form ({company,companies,setCompanies,setCompany,setUsers,setUser,users,user}){

    return(
        <div className='form'>
            <Paper className="paper">
                    <p>Select a company and a User:</p>
                    <InputText label={'Company Name'} onChange={getCompanies} setState={setCompanies} />
                    <OptionPicker label={'Choose a Company'} options={companies} setState={setCompany} state={company}/>
                    <InputText label={'User Name'} onChange={getUsers} setState={setUsers}/>
                    <OptionPicker label={'Choose a User'} options={users} setState={setUser} state={user}/>
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

export default connect(mapStateToProps,{setCompanies,setCompany,setUsers,setUser})(Form);