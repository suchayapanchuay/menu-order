import {useEffect,useState} from 'react'
import {ref,listAll, getDownloadURL} from  "firebase/storage"
import { storage } from '../Firebase'
function Finishmodel() {
          const [setImageList] = useState([]);
          const imageListRef = ref(storage,'images/')
          useEffect(()=>{
                    listAll(imageListRef).then((response)=>{
                      response.items.forEach((item) => {
                        getDownloadURL(item).then((url)=>{
                          setImageList((prev) => [...prev,url])
                        })
                      })
                    });
                  },[]);
}

export default Finishmodel
