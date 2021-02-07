import InfoButton from '../components/infoButton';
import {connect} from 'react-redux';
import {switchInfoModal} from '../store/actions';
import Modal from '@material-ui/core/Modal';


function Info ({showModal,switchInfoModal}){
    return(
        <>
         <Modal 
            open={showModal}
            onClose={switchInfoModal}
            className='modal'
            >
                <div className='paper'>
                   <div className='header'>About this app:</div>
                   <div className='content'></div>
                   <div className='footer'></div>
                </div>
            </Modal>
            <InfoButton action={switchInfoModal}/>
        </>
    );
}

const mapStateToProps = state =>({
    showModal: state.infoModal
});

export default connect(mapStateToProps,{switchInfoModal})(Info);