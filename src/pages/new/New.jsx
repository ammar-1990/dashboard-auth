import './New.scss'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useEffect, useState } from 'react';
import Aside from '../../components/Aside';
import NavBar from '../../components/NavBar';
import { addDoc,collection, serverTimestamp, } from "firebase/firestore"; 
import {db,storage} from '../../firebase'

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

const New = ({inputs,title,type}) => {
  const [file , setFile]=useState('')
  const [data , setData]=useState({})
  const [per,setPer]=useState(null)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()


  useEffect(()=>{

    const uploadFile= ()=>{
      const name = Date.now() + file.name
      const storageRef = ref(storage,name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
        
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPer(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
              default:
                break;
          }
        }, 
        (error) => {
         console.log(error)
        }, 
        () => {
         
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           setData(prev=>({...prev,img:downloadURL}))
          });
        }
      );
    }

    file && uploadFile()
  },[file])
 

  const handleSend=async(e)=>{
e.preventDefault()
if (type==='products')
{
  try {
    setLoading(true)

   await addDoc(collection(db, "products"), {
    ...data,
      timeStamp:serverTimestamp()
      
    });
   
    setLoading(false)
  navigate(-1)
    
  }
  catch(err){
    console.log(err)
    setLoading(false)
  }
}
else {
try {
  setLoading(true)

 await addDoc(collection(db, "users"), {
  ...data,
    timeStamp:serverTimestamp()
    
  });
 
  setLoading(false)
navigate(-1)
  
}
catch(err){
  console.log(err)
  setLoading(false)
}
}

  }


  const handleChange= (e,label)=>{
let key=label
let value = e.target.value
setData ({...data,[key]:value})

}

  return (
    
    <div className='new'>

<Aside />
<div className="content">
  <NavBar />
      <h1 className="newTitle">{title}</h1>
      <div className="formContainer">
        <div className="left">
<img src={file? URL.createObjectURL(file) : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="} alt="" />
        </div>

        <div className="right">
          <form onSubmit={handleSend}>
        <div className="formInput">
          <label htmlFor="image" style={{display:'flex',alignItems:'center'}}>
           Image : <UploadFileIcon  style={{cursor:'pointer'}}/>
          </label>
          <input onChange={(e)=>{setFile(e.target.files[0])}} type="file" id='image' style={{display:'none'}}/>
        </div>
        {inputs.map((input)=>{
          return(
<div className="formInput" key={input.id}>
          <label >{input.label}</label>
          <input  type={input.type} placeholder={input.placeholder} onChange={(e)=>{handleChange(e,input.label)}}/>
        </div>
          )
        })}
        
        
        <button disabled={per !==null && per<100} >{(per !==null && per<100)? 'Uploading Image...' : loading ? 'Loading...' :'Send'} </button>
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default New