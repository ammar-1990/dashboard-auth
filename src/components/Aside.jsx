import './Aside.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import{Link} from 'react-router-dom'
import { useContext } from 'react';
import { ModeContext } from '../modeContext';
import { AuthContext } from '../AuthContext';




const Aside = () => {
  const {dispatch}=useContext(ModeContext)
  const {dispatch:dispatchTwo}=useContext(AuthContext)
  const handleLogount=()=>{
    dispatchTwo({type:'LOGOUT'})
   
  }
  return (
    <div className='side'>
    
      <Link  style={{textDecoration:'none'}} to={'/'} ><div className="top">Dash-Board</div></Link>
      <div className="middle">
<ul>
<p className="title">MAIN</p>
<Link style={{textDecoration:'none'}} to={'/'} >    
  <li><DashboardIcon className='icon' /><span>Dashboard</span></li>
</Link>
  <p className="title">LISTS</p>
  <Link style={{textDecoration:'none'}} to={'/users'}>

  <li><PersonOutlineOutlinedIcon  className='icon'/>  <span>Users</span></li>
  </Link>
  <Link  style={{textDecoration:'none'}} to={'/products'} >
  <li><StoreIcon  className='icon' /> <span>Products</span></li>
  </Link>
  <li><CreditCardOutlinedIcon   className='icon'/> <span>Orders</span></li>
  <li><LocalShippingIcon  className='icon'/><span>Delivery</span></li>
  <p className="title">USEFUL</p>
  <li><InsertChartIcon  className='icon'/><span>Stats</span></li>
  <li><NotificationsNoneIcon  className='icon'/> <span>Notifications</span></li>
  <p className="title">SERVICE</p>
  <li><SettingsSystemDaydreamIcon  className='icon'/><span>System Health</span></li>
  <li><PsychologyIcon  className='icon'/><span>Logs</span></li>
  <li><SettingsApplicationsIcon  className='icon'/><span>Settings</span></li>
  <p className="title">USER</p>
  <li><AccountCircleOutlinedIcon  className='icon'/><span>Profile</span></li>
  <li onClick={handleLogount}><ExitToAppOutlinedIcon  className='icon'/><span>Logout</span></li>
</ul>
        
      </div>
      <div className="buttom">
         <div className='color' onClick={()=>{dispatch({type:'dark'})}}></div>
         <div className='color'  onClick={()=>{dispatch({type:'light'})}}></div>
      </div>


    </div>
  )
}

export default Aside