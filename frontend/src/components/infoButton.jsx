import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


function InfoButton({action}){
    return(
            <IconButton className='help-button' onClick={action}>
                <InfoIcon/>
            </IconButton>
    );
}

export default InfoButton;