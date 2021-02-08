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
                   <div className='content'>
                       <div className='info_main_row'>
                           <div className='info_colum'>
                                <span>Developer: </span>
                                <img className='profile_img' src='https://starrgate.s3.amazonaws.com:443/CACHE/images/users/c38f73e4361f85ad1de47c58be9422406d208625/profile_6JfYqxv/9a3695ff51c196045857a28ddb2c564f.jpeg' alt='profile_pic'/>
                                <div className='info_group'>
                                    <span className='title'>Name</span>
                                    <span>Hernan Felipe Londoño Rojas</span>
                                </div>
                                <div className='info_group'>
                                    <span className='title'>Torre User Name</span>
                                    <span >Nanfe05</span>
                                </div>
                                <p>FullStack Developer</p>
                           </div>
                           <div className='info_colum'>
                               <span className='title'>Technologies and Frameworks:</span>
                               <div className='technologies-group'>
                                   <div>ReactJS</div>
                                   <div>NodeJS</div>
                                   <div>Firebase</div>
                                   <div>TensorFlowJS</div>
                               </div>
                           </div>
                       </div>
                   </div>
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