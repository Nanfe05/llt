
import {connect} from 'react-redux';
import {set_errors} from '../store/actions';
import Snackbar from '@material-ui/core/Snackbar';

function GlobalErrors ({error,set_errors}){
    return(
        <Snackbar
        className={'error-message'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={error ? true : false}
        autoHideDuration={30000}
        onClose={()=>{
            set_errors(null);
        }}
        message={error}
      />
    );
}

const mapStateToProps = state =>({
    error: state.errors
});

export default connect(mapStateToProps,{set_errors})(GlobalErrors);