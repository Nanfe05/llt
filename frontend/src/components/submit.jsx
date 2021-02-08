import Button from '@material-ui/core/Button';


function SubmitButton ({company,user,func,setResponse}){
    return(
        <Button variant="contained" className="submit-button" disabled={company && user ? false : true} 
        onClick={async()=>{
            const response = await func(company,user);
            if(response && response.data){
                setResponse(response.data);
            }
        }}
        >Analize !</Button>
    );
}

export default SubmitButton;