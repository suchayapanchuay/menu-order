import React,{useState} from 'react'
import '../view/css/Finish.css'
import { storage } from '../Firebase'
import {ref, uploadBytes, getDownloadURL} from  "firebase/storage";
import {v4} from 'uuid'
import Finishmodel from '../model/Finishmodel';
function Finish() {
          const logout =() => {
                    localStorage.clear()
                    window.location.reload()
          }
          const [imageUpload,setImageUpload] = useState(null);
          const [imageList,setImageList] = useState([]);
          const uploadImage = () => {
            if (imageUpload == null) return;
            const imgRef = ref(storage,'images/${}'.replace("{}", imageUpload.name)+v4());
            uploadBytes(imgRef,imageUpload).then((snaphsot) => {
              getDownloadURL(snaphsot.ref).then((url)=>{
                setImageList((prev)=>[...prev,url])
              })
              alert("Image Upload")
            });
          };
          <Finishmodel/>
  return (
    <div className='finish'>
      <h1>Successfully!</h1>
      <div className='picture'>
          <input type='file' onChange={(event) => {
            setImageUpload(event.target.files[0])}}/>
          <button onClick={uploadImage}>upload Image</button>
          {imageList.map((url)=>{
            return <img src={url} height={150} width={150} />;
          })}
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Finish
