import './Home.scss'
import Widjet from '../../components/Widjet'
import Featured from '../../components/Featured'
import Chart from '../../components/Chart'
import Costumers from '../../components/Costumers'
import Aside from '../../components/Aside'
import NavBar from '../../components/NavBar'


const Home = () => {
  return (
    <div className='home'>
      <Aside />
      <div className="content">
<NavBar />
      
      <div className="widjets">
        
<Widjet type='users' />
<Widjet type='order'/>
<Widjet type='products'/>
<Widjet type='balance'/>
      </div>

      <div className="charts">
<Featured />
<Chart aspect={2 / 1 } title={'Last Year Revenue'}/>
      </div>

      <div className="tableContainer">
        <h4 className="title"> Latest Transactions</h4>
<Costumers />

      </div>
      </div>
    </div>
  )
}

export default Home