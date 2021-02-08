import LogButton from '../components/logButton';
import {connect} from 'react-redux';
import {Login,Logout} from '../services/firebase';
import {set_log_user,set_errors,set_notifications,set_team} from '../store/actions';

function Log ({logUserName,logUserEmail,set_log_user,set_errors,set_notifications,set_team}){

    return(
        <>
            <div className='log-button-container'>
                <LogButton title={logUserName || logUserEmail? 'Logout':'Login'}  logout={()=>{
                    Logout(set_log_user,set_errors,set_notifications,set_team);}} action={()=>{Login(set_log_user,set_errors,set_notifications);}} logged={logUserName || logUserEmail}/>
            </div>
        </>
    );
}


const mapStateToProps = state =>({
    logUserName:state.logUser.name,
    logUserEmail:state.logUser.email
});


export default connect(mapStateToProps,{set_log_user,set_errors,set_notifications,set_team})(Log);