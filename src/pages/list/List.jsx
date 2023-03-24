import Aside from '../../components/Aside'
import Datatable from '../../components/Datatable'
import NavBar from '../../components/NavBar'
import './List.scss'


const List = ({type}) => {
  return (
    <div className='list'>
<Aside />
<div className="content">
  <NavBar />
<Datatable type={type}/>
</div>


    </div>
  )
}

export default List
