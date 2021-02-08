import LinearProgress from '@material-ui/core/LinearProgress';

function Stat ({name, stat}){
    let value = (stat*100)/ 5;
    
    return(<div className='stat'>
        <span>{name}</span>
        <LinearProgress className='linear-progress' variant='determinate' value={value}></LinearProgress>
    </div>);
}

export default Stat;