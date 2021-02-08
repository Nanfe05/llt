import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import Description from '../parts/description';
import Stats from '../parts/stats';
import Stamp from '../components/stamp';

function Resume({user,company,cP,uP,response}){
    return(
        <div className='resume'>
            {user && company && cP.length>0 && uP.length>0 ? 
            <Paper className="paper">
                {response &&
                    <Stamp userName={user} companyName={company} response={response}/>
                }
                <p>User</p>
                <Description data={uP} selected={user}/>
                <Stats response={response}/>
                {!response && (
                    <>
                        <p>Company</p>
                        <Description data={cP} selected={company}  flipped={true}/>
                    </>
                )}
            </Paper>
            :
            <p>Select an user and a company to continue</p>
        }
        </div>
    );
}

const mapStateToProps = state =>({
    user: state.userSelected,
    company: state.companySelected,
    cP: state.companiesProfiles,
    uP: state.userProfiles,
    response: state.serverResponse
});

export default connect(mapStateToProps,{})(Resume);