import Modal from '@material-ui/core/Modal';
import {connect} from 'react-redux';
import {switchOnBoarding}from '../store/actions';
import Button from '@material-ui/core/Button';

function OnBoarding({onBoarding,switchOnBoarding}){
    return(
        <Modal
        open={onBoarding}
        onClose={switchOnBoarding}
        className='onBoarding'
        >
                <div className='paper'>
                    <div className='header'>
                        Welcome to <span> Long-lasting Teams</span>
                    </div>
                    <div className="content">
                        <p>
                            lsjkdfla
                        </p>
                    </div>
                    <div className='footer'>
                        <Button onClick={switchOnBoarding}>
                            SKIP
                        </Button>
                    </div>
                </div>
        </Modal>
    );
}

const mapStateToProps = state =>({
    onBoarding: state.onBoarding
});

export default connect(mapStateToProps,{switchOnBoarding})(OnBoarding);