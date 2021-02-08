import {useState} from 'react';
import TextField from '@material-ui/core/TextField';

function InputText ({label,onChange,setState, unset, setProfiles,reset,setLoading,id,setErrors}){
    const [value,setValue] = useState('');
    return(
        <TextField id={id} required value={value} label={label} onChange={async(value)=>{
            setLoading();
            reset();
            unset('');
            setProfiles([]);
            setValue(value.target.value);
            
            const companies = await onChange(value.target.value);

            if(companies?.type === 'error'){
                setErrors('Error with torre\'s API')
            }else if(value.target.value !== ''){
                setState(companies.names);
                setProfiles(companies.all)
            }else{
                setState([]);
                setProfiles([]);
            }
            setLoading();
            
        }} className="text-field"/>
    );
}


export default InputText;