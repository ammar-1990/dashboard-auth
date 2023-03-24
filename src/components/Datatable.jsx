import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns,productsColumns } from '../data';
import {Link}from 'react-router-dom'
import { useEffect, useState } from 'react';
import { collection, getDocs ,deleteDoc ,doc ,onSnapshot} from "firebase/firestore";
import {db} from '../firebase'


const Datatable = ({type}) => {
  const [data,setData]=useState([])
useEffect(()=>{

// const fetchData =async ()=>{
//   const list =[]
// try{
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//    list.push({id:doc.id,...doc.data()})
//     console.log(doc.id, " => ", doc.data());
//   });
//   setData(list)
// }
// catch(err){
//   console.log(err)
// }


// }
// fetchData()

// real time fetch now
const unsub = onSnapshot(collection(db, type), (snapshot) => {
  const list=[]
  snapshot.docs.forEach((doc)=>{
    list.push({id:doc.id,...doc.data()})
  })
  setData(list)
},(err)=>{
  console.log(err)
});
return ()=>{
  unsub()
};

},[type])

const handleDelete = async (id)=>{

  try{
    await deleteDoc(doc(db, type, id));
    setData(data.filter((item)=>item.id !==id))



  }
  catch(err){
    console.log(err)
  }

}



    const actionColumn = {
        field:'action',
        headerName:'Action',
        width:200,
        renderCell:(params)=>{
            return (
                <div className="cellAction">
                  <Link to={`/${type}/test`} style={{textDecoration:'none'}} > <div className="viewButton">View</div></Link>
                   
                    <div className="deleteButton" onClick={()=>{handleDelete(params.row.id)}}>Delete</div>
                </div>
            )
        }
    }


  return (
    <div className='datatable'>
      <div className="dataTitle">
        <h3>Add a new {type}</h3>
        <Link to={`/${type}/new`} style={{textDecoration:'none'}}>

        <button>Add {type}</button>
        </Link>
      </div>
            <DataGrid className='myTable'
        rows={data}
        columns={type==='users'? (userColumns.concat(actionColumn)) : (productsColumns.concat(actionColumn))}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
  )
}

export default Datatable