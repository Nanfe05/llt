import Header from '../parts/header';
import Footer from '../parts/footer';
import OnBoarding from '../parts/onBoarding';
import Form from '../parts/form';
import Resume from '../parts/resume';

const Home = ()=>{
    return(
        <>
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