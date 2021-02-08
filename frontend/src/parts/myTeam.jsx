import Modal from '@material-ui/core/Modal';
import {connect} from 'react-redux';
import MyTeamButton from '../components/myTeamButton';
import {switch_team_modal} from '../store/actions';
import TeamMemberRow from '../components/teamMemberRow';

function MyTeam ({team,showModal,switch_team_modal}){
    return(
        <>
        <Modal
            open={showModal}
            onClose={switch_team_modal}
            className='modal'
        >
            <div className='paper'>
                   <div className='header'>This is the info you have saved of your team:</div>
                   <div className='content'>
                       {team && Object.values(team).length>0 ? 
                        Object.values(team).map((el,i)=>{
                            return(
                                <TeamMemberRow i={i} el={el}/>
                            );
                        })
                    :
                        <div/>
                    }
                   </div>
                   <div className='footer'>further updates will improve this view ...</div>
            </div>
        </Modal>
        <MyTeamButton action={switch_team_modal} disabled={team === null}/>
        </>
    );
}

const mapStateToProps = state =>({
    team: state.team,
    showModal: state.teamModal
});


export default connect(mapStateToProps,{switch_team_modal})(MyTeam);