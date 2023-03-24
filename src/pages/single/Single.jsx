import './Single.scss'
import Chart from '../../components/Chart'
import Costumers from '../../components/Costumers'
import Aside from '../../components/Aside'
import NavBar from '../../components/NavBar'

const Single = ({products}) => {
  return (
    <div className='single'>
      <Aside />
      <div className="content">
        <NavBar />
<div className={products ? ("topSingle products") : 'topSingle'}>
  <div className="left">
    <div className="edit">Edit</div>
    <h3 className="title">Information</h3>

    <div className="item">
      <img src={ !products ?"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600": 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="" />
      <div className="details">
<h3 className="itemTitle">{!products ?'Jone Doe' :'Camera'}</h3>
<div className="detail">
  <div className="key">{!products ?'e-mail:' :'type :'}</div>
  <div className="value">{!products ?'aaa@aaa.com' :'Camera'}</div>
</div>
<div className="detail">
  <div className="key">{!products ?'Phone :' :'Price :'}</div>
  <div className="value">{!products ?'+1 123 456 789' :'530$'}</div>
</div>
<div className="detail">
  <div className="key">{!products ?'Address' :'Status :'}</div>
  <div className="value">{!products ?'New york' :'Available'}</div>
</div>
<div className="detail">
  <div className="key">{!products ?'Country' :''}</div>
  <div className="value">{!products ?'USA' :''}</div>
</div>
      </div>
    </div>
  </div>
  <div className="right">
    <Chart aspect={4/1} title= {!products ?'User spending ' : "Product's chart"}/>
  </div>
</div>

{!products && (<div className="bottom">
  <h3 className="title">Last transactions</h3>
  <Costumers />
</div>)}

</div>

    </div>
  )
}

export default Single