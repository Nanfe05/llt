import Logo from '../components/logo';
import Info from './info';
import Help from './help';
import Log from './log';
import MyTeam from './myTeam';


function Header (){
    return(<div className='header'>
        <div className='help-buttons-group'>
            <Help/>
            <Info/>
            <MyTeam/>
        </div>
        <Logo/>
        <Log/>
    </div>);
}

export default Header;