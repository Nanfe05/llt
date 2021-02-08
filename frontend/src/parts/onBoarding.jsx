import {connect} from 'react-redux';
import {switchOnBoarding}from '../store/actions';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import step1 from '../assets/images/step1.jpeg';
import step2 from '../assets/images/step2.jpeg';
import step3 from '../assets/images/step3.jpeg';
import step4 from '../assets/images/step4.jpeg';

function OnBoarding({onBoarding,switchOnBoarding}){
    return(
        <AutoRotatingCarousel
        label='SKIP'
        open={onBoarding}
        interval={6000}
        onClose={switchOnBoarding}
        onStart={switchOnBoarding}
        landscape={true}
        mobile={false}
        >
            <Slide
            media={<img src={step1} alt='step1' className='steps-img'/>}
            mediaBackgroundStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: '#DB9D47'}}
            title="1. Write"
            subtitle="Write the name of the company and the user"
            />
            <Slide
            media={<img src={step2} alt='step2' className='steps-img'/>}
            mediaBackgroundStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: '#DB9D47'}}
            title="2. Pick one"
            subtitle="Pick one of the suggestions that will appear below"
            />
            <Slide
            media={<img src={step3} alt='step3' className='steps-img'/>}
            mediaBackgroundStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: '#DB9D47'}}
            title="3. Train AI"
            subtitle="Train the AI algorithm (up to 50 members of the company will be evaluated against  the personal traits of the user profile chosen)"
            />
             <Slide
             media={<img src={step4} alt='step4' className='steps-img'/>}
            mediaBackgroundStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: '#DB9D47'}}
            title="4. Compare"
            subtitle="Compare the time the user will probably be in a company against other companies and choose one that will most fit you!"
            />
        </AutoRotatingCarousel>
    );
}

const mapStateToProps = state =>({
    onBoarding: state.onBoarding
});

export default connect(mapStateToProps,{switchOnBoarding})(OnBoarding);