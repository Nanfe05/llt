import Header from '../parts/header';
import Footer from '../parts/footer';
import OnBoarding from '../parts/onBoarding';
const Home = ()=>{
    return(
        <>
            <OnBoarding/>
            <div className='home'>
            <Header/>
            <div className='content'>

            </div>
            <Footer/>
        </div>
        </>
    );
};

export default Home;