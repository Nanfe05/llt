function OptionPicker({label,options,state, setState,reset}){
    return(
        <div className='option-picker'>
            <p>{label}</p>
            <div className='options'>
                {options && options.length > 0 ? options.map((el,i)=>{
                    return(
                        <div key={`${label}-${i}-${Date.now()}`} className={`bread-crumbs ${state === el ? 'selected':''}`} onClick={()=>{
                            reset();
                            setState(el);
                        }}>
                            {el}
                        </div>
                    );
                }):
                <p>Please enter criteria to gather data</p>
                }
                
            </div>
        </div>
    );
};

export default OptionPicker;