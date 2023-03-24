import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowUpOutlined';
import { KeyboardArrowDown } from '@mui/icons-material';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top"><h1 className="title">Total Revenue</h1> <MoreVertOutlinedIcon fontSize='small' style={{cursor:'pointer'}}/></div>
        <div className="buttom">
            <div className="featuredChart">
                <CircularProgressbar  value={75} text={'75%'} strokeWidth={3}/>
            </div>
            <p className="title">Total sales today</p>
            <p className="amount">990$</p>
            <p className="description">The new payments and extra incomes were included here , but taxes and other expenses are not considered in this chart</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">
                        Target
                    </div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown fontSize='small'/>
                        <span className="amountResult">$-33k</span>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">
                        Last Week
                    </div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize='small' />
                        <span className="amountResult">$12.4k</span>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">
                        Last Mounth
                    </div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize='small'/>
                        <span className="amountResult">$75.5k</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Featured