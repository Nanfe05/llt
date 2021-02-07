import LogButton from '../components/logButton';
import {connect} from 'react-redux';
import {switchLogModal} from '../store/actions';
import Modal from '@material-ui/core/Modal';


function Log ({showModal,switchLogModal}){

    return(
        <>
            <Modal 
            open={showModal}
            onClose={switchLogModal}
            className='modal'
            >
                <div className='paper'>
                   <div className='header'>Choose the option most suit you:</div>
                   <div className='content'></div>
                   <div className='footer'></div>
                </div>
            </Modal>
            <div className='log-button-container'>
                <LogButton title={'Login'}  action={switchLogModal} logged={false}/>
            </div>
        </>
    );
}


const mapStateToProps = state =>({
    showModal: state.logModal
});


export default connect(mapStateToProps,{switchLogModal})(Log);