import Button from '@material-ui/core/Button';

function LogButton({title,action,logged}){
    return(
        <Button onClick={action} className={`log-button ${logged?'logged':''}`}>
            {title}
        </Button>
    );
}


export default LogButton;