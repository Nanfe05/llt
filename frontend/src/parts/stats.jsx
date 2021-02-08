import Stat from '../components/stat';

function Stats({response}){
    return(
        <div className='stats'>
            <p>User Personal Traits:</p>
            <div className='stats-info'>
                <Stat name={'Openness-to-experience'} stat={response?.pts[0]? response.pts[0]: 0}/>
                <Stat name={'Honesty-humility'} stat={response?.pts[1]? response.pts[1]: 0}/>
                <Stat name={'Agreeableness'} stat={response?.pts[2]? response.pts[2]: 0}/>
                <Stat name={'Altruism'} stat={response?.pts[3]? response.pts[3]: 0}/>
                <Stat name={'Conscientiousness'} stat={response?.pts[4]? response.pts[4]: 0}/>
                <Stat name={'Emotionality'} stat={response?.pts[5]? response.pts[5]: 0}/>
                <Stat name={'Extraversion'} stat={response?.pts[6]? response.pts[6]: 0}/>
            </div>
        </div>
    );
}

export default Stats;