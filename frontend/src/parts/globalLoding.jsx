import {connect} from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Loading from '../components/loading';

function GlobalLoading ({isLoading,user,company}){
    return(
        <>
         <Modal 
            open={isLoading}
            className='modal'
            >
                <div className='paper'>
                   <div className='header'>{`Analizing ${user} personal traits and 50 ${company}'s team members`}</div>
                   <div className='content'><Loading/></div>
                   <div className='footer'>This may take a while, please be patient</div>
                </div>
            </Modal>
        </>
    );
}

const mapStateToProps=state=>({
    isLoading: state.globalLoading,
    user: state.userSelected,
    company: state.companySelected
});

export default connect(mapStateToProps,{})(GlobalLoading);