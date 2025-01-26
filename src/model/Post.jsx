import React from 'react'
import '../view/css/Post.css'
import { addDoc,collection} from 'firebase/firestore';
import {db,auth} from '../Firebase';
import PostFinish from '../view/PostFinish';
//import {useNavigate} from  'react-router-dom';
function Post() {
  const [value,setValue]  = React.useState(localStorage.getItem('isAuth'));
  const [title, setTitle] = React.useState("");
  const [PostText,setPostText] = React.useState("");
  const postsCollectionRef = collection(db,"posts");
  //let navigate = useNavigate();
  const createPost = async () =>{
    await addDoc(postsCollectionRef,{title,PostText,author:{name: auth.currentUser.displayName,id: auth.currentUser.uid}});
    setValue(title,PostText)
    //navigate("/")
  };
  return (
    <div className='creatPost' id='comment'>
      <div className='container'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input 
            placeholder='Enter Title...' 
            onChange={(event)=>{setTitle(event.target.value);}}
          />
        </div>
        <div className='inputGp'>
          <label>Post:</label>
          <textarea 
          placeholder='Post'
          onChange={(event)=>{setPostText(event.target.value);}}
          />
        </div>
        {value?<PostFinish/> :
        <button onClick={createPost}>Submit Post</button>
        }
      </div>
    </div>
  )
}

export default Post
