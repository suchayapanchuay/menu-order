import React from 'react'

function PostFinish() {
  const sendagain = () =>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className='PostFinish'>
      <h1>Post Successfully!</h1>
      <button onClick={sendagain}>Send again</button>
    </div>
  )
}

export default PostFinish
