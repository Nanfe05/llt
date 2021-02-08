import Button from '@material-ui/core/Button';


function SubmitButton ({company,user,func,setResponse,setLoading,setErrors}){
    return(
        <Button variant="contained" className="submit-button" disabled={company && user ? false : true} 
        onClick={async()=>{
            setLoading();
            const response = await func(company,user);
            if(response && response.data && response.data.type === 'error'){
                setErrors(response.data.msg)
            }else if(response && response.data){
                setResponse(response.data);
            }else{
                setErrors('Something went wrong, please try again');
            }
            setLoading();
        }}
        >Analize !</Button>
    );
}

export default SubmitButton;