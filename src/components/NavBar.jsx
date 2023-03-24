import './NavBar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ModeContext } from '../modeContext';

const NavBar = () => {
  const {dispatch,mode}=useContext(ModeContext)
  return (
    <div className='nav'>
      <div className='search'>
        <input type="text" placeholder='Search....' />
        <SearchIcon style={{cursor:'pointer'}}/>
      </div>
      <div className='items'>
        <div className="item"> <LanguageOutlinedIcon/> English</div>
        <div className="item" onClick={()=>{dispatch({type:'toggle'})}}>{mode==='light'?<DarkModeOutlinedIcon/> :<LightModeIcon/> }  </div>
        <div className="item"> <FullscreenExitOutlinedIcon/> </div>
        <div className="item"> <NotificationsNoneOutlinedIcon/><div className="bubble"> 3</div> </div>
        <div className="item"> <ChatBubbleOutlineRoundedIcon/><div className="bubble">2</div> </div>
        <div className="item"> <ReorderOutlinedIcon/> </div>
        <div className="item"> <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" className='avatar' /> </div>
      </div>
    </div>
  )
}

export default NavBar