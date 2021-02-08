import Header from '../parts/header';
import Footer from '../parts/footer';
import OnBoarding from '../parts/onBoarding';
import Form from '../parts/form';
import Resume from '../parts/resume';
import GlobalLoading from '../parts/globalLoding'
import GlobalErrors from '../parts/globalErrors';

const Home = ()=>{
    return(
        <>
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

export default Home;