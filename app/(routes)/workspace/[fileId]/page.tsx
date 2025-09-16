// Updated Gemini generated 
"use client"
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';
import { Canvas } from '../_components/Canvas';

function Workspace({params}:any) {
  const [triggerSave,setTriggerSave]=useState(false);
  const convex=useConvex();
  const [fileData,setFileData]=useState<FILE|any>();
  
  useEffect(()=>{
    params.fileId&&getFileData();
  },[])

  const getFileData=async()=>{
    const result=await convex.query(api.files.getFileById,{_id:params.fileId})
    setFileData(result);
  }

  return (
    <div className="flex flex-col h-screen">
      <WorkspaceHeader onSave={()=>setTriggerSave(true)}/>

      {/* This is the line we're changing from Grid to Flexbox */}
      <div className='flex-1 flex flex-col md:flex-row overflow-hidden'>
        

        
        {/* Document column (Editor) */}
        <div className='h-full w-full md:w-1/2 overflow-y-auto'>
          <Editor 
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>

        {/* Canvas column */}
        <div className='h-full w-full md:w-1/2 border-l'>
          {fileData && (
            <Canvas
              onSaveTrigger={triggerSave}
              fileId={params.fileId}
              fileData={fileData}
            />
          )}
        </div>
        
      </div>
    </div>
  )
}

export default Workspace

// Gemini generated 
// "use client"
// import React, { useEffect, useState } from 'react'
// import WorkspaceHeader from '../_components/WorkspaceHeader'
// import Editor from '../_components/Editor'
// import { useConvex } from 'convex/react';
// import { api } from '@/convex/_generated/api';
// import { FILE } from '../../dashboard/_components/FileList';
// import { Canvas } from '../_components/Canvas';

// function Workspace({params}:any) {
//   const [triggerSave,setTriggerSave]=useState(false);
//   const convex=useConvex();
//   const [fileData,setFileData]=useState<FILE|any>();
  
//   useEffect(()=>{
//     params.fileId&&getFileData();
//   },[])

//   const getFileData=async()=>{
//     const result=await convex.query(api.files.getFileById,{_id:params.fileId})
//     setFileData(result);
//   }

//   return (
//     // 1. Main container is now a flex column taking the full screen height
//     <div className="flex flex-col h-screen">
//       <WorkspaceHeader onSave={()=>setTriggerSave(true)}/>

//       {/* 2. Grid now grows to fill remaining space and clips its content */}
//       <div className='flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
        
//          {/* 4. Canvas column also takes full height of its container */}
//         <div className='h-full overflow-y-auto'>
//           {fileData && (
//             <Canvas
//               onSaveTrigger={triggerSave}
//               fileId={params.fileId}
//               fileData={fileData}
//             />
//           )}
//         </div>

//         {/* 3. Document column now takes full height of its container and scrolls if needed */}
//         <div className='h-full border-l overflow-y-auto'>
//           <Editor 
//             onSaveTrigger={triggerSave}
//             fileId={params.fileId}
//             fileData={fileData}
//           />
//         </div>
        
       
        
//       </div>
//     </div>
//   )
// }

// export default Workspace








// Tutor generated 
// "use client"
// import React, { useEffect, useState } from 'react'
// import WorkspaceHeader from '../_components/WorkspaceHeader'
// import Editor from '../_components/Editor'
// import { useConvex } from 'convex/react';
// import { api } from '@/convex/_generated/api';
// import { FILE } from '../../dashboard/_components/FileList';
// import { Canvas } from '../_components/Canvas';

// function Workspace({params}:any) {
//   const [triggerSave,setTriggerSave]=useState(false);
//   const convex=useConvex();
//   const [fileData,setFileData]=useState<FILE|any>();
//   useEffect(()=>{
//     console.log("FILEID",params.fileId)
//     params.fileId&&getFileByData();
//   },[])

//   const getFileByData=async()=>{
//     const result=await convex.query(api.files.getFileById,{_id:params.fileId})
//     setFileData(result);
//   }
//   return (
//     <div>
//       <WorkspaceHeader onSave={()=>setTriggerSave(!triggerSave)}/>

//       {/* Workspace Layout  */}
//       <div className='grid grid-cols-1
//       md:grid-cols-2'>
//         {/* Document  */}
//           <div className=' h-screen'>
//            <Editor onSaveTrigger={triggerSave}
//            fileId={params.fileId}
//            fileData={fileData}
//            />
//           </div>

// {/* This gemini generated */}
//            {/* Whiteboard/canvas */}
//         <div className='h-screen border-l'>
//           {/* We need to wait for fileData before rendering the canvas */}
//           {fileData && (
//             <Canvas
//               onSaveTrigger={triggerSave}
//               fileId={params.fileId}
//               fileData={fileData}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

//export default Workspace
// This tutor generated
        {/* Whiteboard/canvas 
          <div className='bg-red-400 h-screen'>
           <Canvas/>
          </div>
      </div>
    </div>
  )
}

export default Workspace */}