import {useState} from 'react';
import TextField from '@material-ui/core/TextField';

function InputText ({label,onChange,setState, unset, setProfiles,reset}){
    const [value,setValue] = useState('');
    return(
        <TextField required id="standard-required" value={value} label={label} onChange={async(value)=>{
            reset();
            unset('');
            setProfiles([]);
            setValue(value.target.value);
            
            const companies = await onChange(value.target.value);
            
            if(value.target.value !== ''){
                setState(companies.names);
                setProfiles(companies.all)
            }else{
                setState([]);
                setProfiles([]);
            }
            
        }} className="text-field"/>
    );
}


export default InputText;