import {useState} from 'react';
import stp from '../assets/images/stamp.svg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import {AddToDB} from '../services/firebase';
import { set_errors, set_notifications } from '../store/actions';

function Stamp({response,companyName,userName,user,set_errors,set_notifications,prediction}){

    const [selected,setSelected]= useState(false);

    const months = response?.prediction ? Math.round(response.prediction/30): '';

    return(
        <div className='quality-stamp'>
           
            <div className='stamp'>
                <img src={stp} alt="stamp-quality"/>
                <span className='label-stamp'>{`${months} Months`}</span>  
            </div>
            <span>{`Our Tensorflow algorithm predicted that ${userName} would last at least ${months} months working in ${companyName}.`}</span>
            {user && user.id ?
                <IconButton className='save-fav' onClick={()=>{
                    if(!selected){
                        setSelected(true);
                        AddToDB(user.id,{
                            userName,
                            companyName,
                            prediction
                        },set_errors,set_notifications);
                    }else{
                        set_errors('Analysis already saved');
                    }
                }}>
                    <FavoriteIcon className={`icon-save-fav ${selected ? 'red' : ''}`}/>
                </IconButton>
            :
            <div/>
            }
        </div>
    );
};

const mapStateToProps=state=>({
    user: state.logUser,
    prediction: state.serverResponse.prediction,
});

export default connect(mapStateToProps,{set_errors,set_notifications})(Stamp);