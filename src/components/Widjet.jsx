import './Widjet.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useEffect,useState } from 'react';
import {collection, where,query, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


const Widjet = ({type}) => {
        const [amount,setAmount]=useState(null)
        const [diff,setDiff]=useState(null)

        let data;

        switch(type){
case 'users': {
        data={
                title:'USERS',
                query:'users',
                isMoney:false,
                link:'See all users',
                icon:<PersonOutlineOutlinedIcon className='icon' style={{color:'crimson',backgroundColor:'rgba(255,0,0,0.2)'}}/>,
                theAmount:200,
                per:20
        }
        break;
}

case 'order':{ 
        data={
        title:'ORDERS',
        isMoney:false,
        link:'View all orders',
        icon:(<ShoppingCartOutlinedIcon className='icon' style={{color:'goldenrod',backgroundColor:'rgba(218,165,32,0.2)'}}/>),
        theAmount:-100,
        per:-75
}
break;}
case 'products':{ data={
        title:'PRODUCTS',
        query:'products',
        link:'View net earnings',
        icon:(<ProductionQuantityLimitsIcon className='icon' style={{color:'green',backgroundColor:'rgba(0,128,0,0.2)'}}/>),
        theAmount:250,
        per:30

}
break;}
case 'balance':{ data={
        title:'BALANCE',
        isMoney:true,
        link:'See details',
        icon:(<AccountBalanceWalletOutlinedIcon className='icon' style={{color:'purple',backgroundColor:'rgba(128,0,128,0.2)'}}/>),
        theAmount:500,
        per:-12
}
break;}
default:
        break;


        }


        useEffect(()=>{

const fetchData= async ()=>{
const today=new Date();
const lastMonth=new Date(new Date().setMonth(today.getMonth()-1))
const prevMonth=new Date(new Date().setMonth(today.getMonth()-2))

const lastMonthQuery = query(collection(db,type),
where('timeStamp',"<=",today),
where('timeStamp',">",lastMonth))
const prevMonthQuery = query(collection(db,type),
where('timeStamp',"<=",lastMonth),
where('timeStamp',">",prevMonth))
const lastMonthData= await getDocs(lastMonthQuery)

const prevMonthData= await getDocs(prevMonthQuery)
console.log(lastMonthData)
setAmount(lastMonthData.docs.length)
setDiff((lastMonthData.docs.length-prevMonthData.docs.length)/ (prevMonthData.docs.length ) *100)
}
fetchData()

        },[])
  return (
    <div className='widjet'>
        
        <div className="left">
<div className='title'>{data.title}</div>
<div className='counter'>{data.isMoney && '$'}{amount||data.theAmount}</div>
<div className='link'>{data.link}</div>
        </div>


        <div className="right">
<div className={`percentage ${ (diff>=0 ) ? 'positive':data.per>0?'positive':'negative'}`}>
    {diff>0 ? <KeyboardArrowUpOutlinedIcon style={{fontSize:'20px',marginRight:'3px'}} /> : data.per>0? <ExpandMoreOutlinedIcon style={{fontSize:'20px',marginRight:'3px'}}/> : diff<0? <ExpandMoreOutlinedIcon style={{fontSize:'20px',marginRight:'3px'}}/> :data.per<0 ?<ExpandMoreOutlinedIcon style={{fontSize:'20px',marginRight:'3px'}}/> :''}  {diff ||data.per}%

</div>
{data.icon}

        </div>


        </div>
  )
}

export default Widjet