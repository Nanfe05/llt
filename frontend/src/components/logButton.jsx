import Button from '@material-ui/core/Button';

function LogButton({title,action,logged,logout}){
    return(
        <Button onClick={logged?logout:action} className={`log-button ${logged?'logged':''}`}>
            {title}
        </Button>
    );
}


export default LogButton;