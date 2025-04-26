import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';


const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  // console.log(paste);
  


  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input
          className='p-2 rounded-xl mt-2 w-[60%] pl-4'
          type='text'
          placeholder='Enter Title'
          value={paste.title}
          disabled
          // onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button
          onClick={createPaste}
          className='p-2 rounded-xl mt-2'>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button> */}
      </div>

      <div>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4'
          value={paste.content}
          placeholder='Enter Content'
          disabled
          // onChange={(e) => setValue(e.target.value)}
          rows={20}
        >

        </textarea>
      </div>
    </div>
  )
}

export default ViewPaste