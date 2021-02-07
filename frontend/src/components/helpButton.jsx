import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';


function HelpButton({action}){
    return(
            <IconButton className='help-button' onClick={action}>
                <HelpIcon/>
            </IconButton>
    );
}

export default HelpButton;