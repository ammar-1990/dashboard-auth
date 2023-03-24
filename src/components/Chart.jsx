import './chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
 {name:'January',total:1500},
 {name:'February',total:2000},
 {name:'March',total:2500},
 {name:'April',total:1900},
 {name:'May',total:1500},
 {name:'June',total:1700},
 {name:'July',total:2000},
 {name:'Augost',total:2500},
 {name:'September',total:2700},
 {name:'October',total:2400},
 {name:'November',total:1500},
 {name:'December',total:1200}
  ];
const Chart = ({aspect,title}) => {





  return (
    <div className='chart'>
        <h1 className="title">{title}</h1>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="darkblue" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>

  </defs>
  <XAxis dataKey="name" />
 
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#darkblue" fillOpacity={1} fill="url(#total)" />
 
</AreaChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart