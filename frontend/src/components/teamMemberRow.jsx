function TeamMemberRow ({i,el}){
    return(<div key={`team-member-${i}`} className='team-group'>
                <div className='row'>
                    <span className='title'>User Name:</span>
                    <span>{el.userName}</span>
                </div>
                <div className='row'>
                    <span className='title'>Company Name:</span>
                    <span>{el.companyName}</span>
                </div>
                <div className='row'>
                    <span className='title'>Predicted Time:</span>
                    <span>{Math.round(el.prediction/30)}</span>
                </div>
        </div>);
}

export default TeamMemberRow;