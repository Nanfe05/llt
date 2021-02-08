import {useEffect} from 'react';
import Header from '../parts/header';
import Footer from '../parts/footer';
import OnBoarding from '../parts/onBoarding';
import Form from '../parts/form';
import Resume from '../parts/resume';
import GlobalLoading from '../parts/globalLoding'
import GlobalErrors from '../parts/globalErrors';
import GlobalNotifications from '../parts/globalNotifications';
import {CheckUser} from '../services/firebase';
import {connect} from 'react-redux';
import {set_log_user,set_notifications} from '../store/actions';

const Home = ({set_log_user,set_notifications})=>{

    useEffect(()=>{
        CheckUser(set_log_user,set_notifications);
    },[set_log_user,set_notifications]);

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

export default connect(null,{set_log_user,set_notifications})(Home);