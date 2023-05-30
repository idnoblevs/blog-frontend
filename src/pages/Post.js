import axios from 'axios'
import React from 'react'

function Post() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const form =  new FormData(e.currentTarget)
    axios.post("http://localhost:8080/post/upload/", form)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  return (
    
        <div className='w-50 m-auto'>
        <form onSubmit={(e) => handleSubmit(e)}> 

        <div>
            <label htmlFor="" className='form-label'>Title</label>
            <input type="text" className="form-control" placeholder="Title" name='Title' />
        </div>

        <div>
            <label htmlFor="" className='form-label'>Article</label>
            <textarea name="" id="" className='form-control'></textarea>
        </div>

        <div>
            <label htmlFor="" className='form-label'>Article</label>
            <textarea name="" id="" className='form-control'></textarea>
        </div>

        <button type='submit' className='btn btn-warning mt-4'>Submit</button>
        </form>
        </div>

    
  )
}

export default Post