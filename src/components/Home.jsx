import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const allPastes = useSelector((state) => state.paste.pastes);
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch()

  function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(), 
    }

    if(pasteId){
      // update
      dispatch(updateToPastes(paste));
    }
    else{
      //create
      dispatch(addToPastes(paste));
    }

    // after creation/ updation;
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((p) => p._id === pasteId)
      setTitle(paste.title)
      setValue(paste.content)
    }
  }, [pasteId])
  
  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
        <input
          className='p-2 rounded-xl mt-2 w-[60%] pl-4'
          type='text'
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className='p-2 rounded-xl mt-2'>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <div>
        <textarea
          className='rounded-2xl mt-4 min-w-[500px] p-4'
          value={value}
          placeholder='Enter Content'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        >

        </textarea>
      </div>
    </div>
  )
}

export default Home