import {connect} from 'react-redux';
import {switchOnBoarding}from '../store/actions';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

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
            mediaBackgroundStyle={{backgroundColor: '#DB9D47'}}
            style={{backgroundColor: '#DB9D47'}}
            title="Welcome"
            subtitle="lafdjslk"
            />
            <Slide
            title="Other1"
            subtitle="lafdjslk"
            />
            <Slide
            title="Other2"
            subtitle="lafdjslk"
            />
        </AutoRotatingCarousel>
    );
}

const mapStateToProps = state =>({
    onBoarding: state.onBoarding
});

export default connect(mapStateToProps,{switchOnBoarding})(OnBoarding);