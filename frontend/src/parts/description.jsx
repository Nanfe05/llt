import PersonIcon from '@material-ui/icons/Person';

function Description({data,selected,flipped=false}){

    let filtered;
    let obj={};
    if(!data[0].username){
        filtered= data.filter(el => el.name === selected)[0];
        obj.url=filtered?.picture ? filtered.picture : null;
        obj.name=filtered.name;
        obj.subtitle=null;
        obj.small=null;
    }else{
        filtered= data.filter(el => el.username === selected)[0];
        obj.url=filtered?.picture ? filtered.picture : null;
        obj.name=filtered.name;
        obj.subtitle=filtered.username;
        obj.small=filtered.professionalHeadline;
    }

    return(
        <div className={`description ${flipped?'flip':''}`}>
            {obj?.url ?
            <img src={obj.url} alt='avatar' className='img'/>
            :
            <div className='avatar-holder'>
                <PersonIcon/>
            </div>
        }
            <div className='text-description'>
                {
                    obj?.name &&  <p className='name'>{obj.name}</p>
                }
                {
                    obj?.subtitle && <p className='subtitle'>{obj.subtitle}</p>
                }
                {
                    obj?.small && <p className='small'>{obj.small}</p>
                }
                
            </div>
        </div>
    );
}

export default Description;