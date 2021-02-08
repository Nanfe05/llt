import stp from '../assets/images/stamp.svg'

function Stamp({response,companyName,userName}){

    const months = response?.prediction ? Math.round(response.prediction/30): '';

    return(
        <div className='quality-stamp'>
            <div className='stamp'>
                <img src={stp} alt="stamp-quality"/>
                <span className='label-stamp'>{`${months} Months`}</span>  
            </div>
            <span>{`Our Tensorflow algorithm predicted that ${userName} would last at least ${months} months working in ${companyName}.`}</span>
        </div>
    );
};

export default Stamp;