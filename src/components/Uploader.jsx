import React from 'react'
import { FiUploadCloud } from 'react-icons/fi';

function Uploader() {

;  return (
    <div className=' w-full text-center'>
        <div 
        // {...getRootProps()}
         className=' px-6 pt-5 pb-6 border-2 border-border border-dashed bg-main cursor-pointer rounded-md'>
            <input  />
            <span className=" flex-colo mx-auto text-subMain text-3xl">
                <FiUploadCloud />
            </span>
            <p className=' text-sm mt-2'>Drag your image here</p>
            <em className=' text-xs text-border'>(only .jpg and .png files will be accepted)</em>

        </div>
    </div>
  )
}

export default Uploader