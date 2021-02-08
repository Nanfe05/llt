import HelpButton from '../components/helpButton';
import {connect} from 'react-redux';
import {switchOnBoarding} from '../store/actions';

function Help ({switchOnBoarding}){
    return(
        <>
            <HelpButton action={switchOnBoarding}/>
        </>
    );
}


export default connect(null,{switchOnBoarding})(Help);