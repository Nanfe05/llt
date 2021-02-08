import Header from '../parts/header';
import Footer from '../parts/footer';
import OnBoarding from '../parts/onBoarding';
import Form from '../parts/form';
import Resume from '../parts/resume';
import GlobalLoading from '../parts/globalLoding'
import GlobalErrors from '../parts/globalErrors';
import GlobalNotifications from '../parts/globalNotifications';
import {CheckUser,GetDB} from '../services/firebase';
import {connect} from 'react-redux';
import {set_log_user,set_team} from '../store/actions';


const Home = ({set_log_user,user,set_team})=>{

    GetDB(user.id,set_team);
    if(!user.id){
        CheckUser(set_log_user);
    }
   

    return(
        <>
            <GlobalNotifications/>
            <GlobalErrors/>
            <GlobalLoading/>
            <OnBoarding/>
            <div className='home'>
            <Header/>
            <div className='content'>
                <Form/>
                <Resume/>
            </div>
            <Footer/>
        </div>
        </>
    );
};

const mapStateToProps=state=>({
    user: state.logUser,
});

export default connect(mapStateToProps,{set_log_user,set_team})(Home);