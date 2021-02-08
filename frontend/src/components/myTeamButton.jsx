import Button from '@material-ui/core/Button';

function MyTeamButton({disabled,action}){
    return(
        <Button variant="contained" className={`myTeam-button ${!disabled ? 'color': ''}`} disabled={disabled} 
        onClick={async()=>{
           action();
        }}
        >My Team</Button>
    );
};

export default MyTeamButton;