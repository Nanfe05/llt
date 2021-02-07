import {useState} from 'react';
import TextField from '@material-ui/core/TextField';

function InputText ({label,onChange,setState}){
    const [value,setValue] = useState('');
    return(
        <TextField required id="standard-required" value={value} label={label} onChange={async(value)=>{
            setValue(value.target.value);
            
            const companies = await onChange(value.target.value);
            
            if(value.target.value !== ''){
                setState(companies);
            }else{
                setState([]);
            }
            
        }} className="text-field"/>
    );
}


export default InputText;