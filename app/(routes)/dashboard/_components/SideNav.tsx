// Update 2 Gemini Generated
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Archive, ChevronDown, Flag, Github } from 'lucide-react'
import SideNavTopSection, { TEAM } from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import SideNavBottomSection from './SideNavBottomSection'
import { useConvex, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { FileListContext } from '@/app/_context/FilesListContext'

function SideNav() {
  const { user } = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const convex = useConvex();
  const [totalFiles, setTotalFiles] = useState<Number>();
  const { fileList_, setFileList_ } = useContext(FileListContext);

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam])

  const onFileCreate = (fileName: string) => {
    // FIX #2: Check for user.email as well
    if (activeTeam && user?.email) {
      createFile({
        fileName: fileName,
        teamId: activeTeam._id,
        createdBy: user.email,
        archive: false,
        document: '',
        whiteboard: ''
      }).then(resp => {
        if (resp) {
          getFiles();
          toast('File Created Successfully!!!')
        }
      }, (e) => {
        toast('Error WhileCreating file')
      })
    }
  }

  const getFiles = async () => {
    // FIX #3: Add a check here as well
    if (activeTeam) {
      const result = await convex.query(api.files.getFiles, { teamId: activeTeam._id });
      console.log(result);
      setFileList_(result);
      setTotalFiles(result?.length)
    }
  }

  return (
    <div
      className=' h-screen fixed w-72 border-r border-[1px] p-6
    flex flex-col
    '
    >
      <div className='flex-1'>
        <SideNavTopSection user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)} />
      </div>

      <div>
        <SideNavBottomSection
          totalFiles={totalFiles}
          onFileCreate={onFileCreate}
        />
      </div>
    </div>
  )
}

export default SideNav
// Update 1 Gemini Generated
// import React, { useContext, useEffect, useState } from 'react'
// import Image from 'next/image'
// import { Archive, ChevronDown, Flag, Github } from 'lucide-react'
// import SideNavTopSection, { TEAM } from './SideNavTopSection'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import SideNavBottomSection from './SideNavBottomSection'
// import { useConvex, useMutation } from 'convex/react'
// import { api } from '@/convex/_generated/api'
// import { toast } from 'sonner'
// import { FileListContext } from '@/app/_context/FilesListContext'

// function SideNav() {
//   const { user } = useKindeBrowserClient();
//   const createFile = useMutation(api.files.createFile);
//   const [activeTeam, setActiveTeam] = useState<TEAM>();
//   const convex = useConvex();
//   const [totalFiles, setTotalFiles] = useState<Number>();
//   const { fileList_, setFileList_ } = useContext(FileListContext);

//   useEffect(() => {
//     activeTeam && getFiles();
//   }, [activeTeam])

//   const onFileCreate = (fileName: string) => {
//     // UPDATED FIX: Check for both activeTeam AND user
//     if (activeTeam && user) {
//       createFile({
//         fileName: fileName,
//         teamId: activeTeam._id,
//         createdBy: user.email, // Now safe to use user.email without '?'
//         archive: false,
//         document: '',
//         whiteboard: ''
//       }).then(resp => {
//         if (resp) {
//           getFiles();
//           toast('File Created Successfully!!!')
//         }
//       }, (e) => {
//         toast('Error WhileCreating file')
//       })
//     }
//   }

//   const getFiles = async () => {
//     const result = await convex.query(api.files.getFiles, { teamId: activeTeam?._id });
//     console.log(result);
//     setFileList_(result);
//     setTotalFiles(result?.length)
//   }

//   return (
//     <div
//       className=' h-screen fixed w-72 border-r border-[1px] p-6
//     flex flex-col
//     '
//     >
//       <div className='flex-1'>
//         <SideNavTopSection user={user}
//           setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)} />
//       </div>

//       <div>
//         <SideNavBottomSection
//           totalFiles={totalFiles}
//           onFileCreate={onFileCreate}
//         />
//       </div>
//     </div>
//   )
// }

// export default SideNav
// Gemini Generated
// import React, { useContext, useEffect, useState } from 'react'
// import Image from 'next/image'
// import { Archive, ChevronDown, Flag, Github } from 'lucide-react'
// import SideNavTopSection, { TEAM } from './SideNavTopSection'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import SideNavBottomSection from './SideNavBottomSection'
// import { useConvex, useMutation } from 'convex/react'
// import { api } from '@/convex/_generated/api'
// import { toast } from 'sonner'
// import { FileListContext } from '@/app/_context/FilesListContext'

// function SideNav() {
//   const { user } = useKindeBrowserClient();
//   const createFile = useMutation(api.files.createFile);
//   const [activeTeam, setActiveTeam] = useState<TEAM>();
//   const convex = useConvex();
//   const [totalFiles, setTotalFiles] = useState<Number>();
//   const { fileList_, setFileList_ } = useContext(FileListContext);

//   useEffect(() => {
//     activeTeam && getFiles();
//   }, [activeTeam])

//   const onFileCreate = (fileName: string) => {
//     // This 'if' statement is the fix
//     if (activeTeam) {
//       console.log(fileName)
//       createFile({
//         fileName: fileName,
//         teamId: activeTeam._id, // Safely use ._id here
//         createdBy: user?.email,
//         archive: false,
//         document: '',
//         whiteboard: ''
//       }).then(resp => {
//         if (resp) {
//           getFiles();
//           toast('File Created Successfully!!!')
//         }
//       }, (e) => {
//         toast('Error WhileCreating file')
//       })
//     }
//   }

//   const getFiles = async () => {
//     const result = await convex.query(api.files.getFiles, { teamId: activeTeam?._id });
//     console.log(result);
//     setFileList_(result);
//     setTotalFiles(result?.length)
//   }

//   return (
//     <div
//       className=' h-screen fixed w-72 border-r border-[1px] p-6
//     flex flex-col
//     '
//     >
//       <div className='flex-1'>
//         <SideNavTopSection user={user}
//           setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)} />
//       </div>

//       <div>
//         <SideNavBottomSection
//           totalFiles={totalFiles}
//           onFileCreate={onFileCreate}
//         />
//       </div>
//     </div>
//   )
// }

// export default SideNav


// Tutor Generated
// import React, { useContext, useEffect, useState } from 'react'
// import Image from 'next/image'
// import { Archive, ChevronDown, Flag, Github } from 'lucide-react'
// import SideNavTopSection, { TEAM } from './SideNavTopSection'
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
// import SideNavBottomSection from './SideNavBottomSection'
// import { useConvex, useMutation } from 'convex/react'
// import { api } from '@/convex/_generated/api'
// import { toast } from 'sonner'
// import { FileListContext } from '@/app/_context/FilesListContext'

// function SideNav() {
//   const {user}=useKindeBrowserClient();
//   const createFile=useMutation(api.files.createFile);
//   const [activeTeam,setActiveTeam]=useState<TEAM>();
//   const convex=useConvex();
//   const[totalFiles,setTotalFiles]=useState<Number>();
//   const {fileList_,setFileList_}=useContext(FileListContext);
//   useEffect(()=>{
//   activeTeam&&getFiles();
//   },[activeTeam])
//   const onFileCreate=(fileName:string)=>{
//     console.log(fileName)
//     createFile({
//       fileName:fileName,
//       teamId:activeTeam?._id,
//       createdBy:user?.email,
//       archive:false,
//       document:'',
//       whiteboard:''
//     }).then(resp=>{
//       if(resp)
//       {
//         getFiles();
//         toast('File Created Successfully!!!')
//       }
//     },(e)=>{
//        toast('Error WhileCreating file')
//     })
//   }

//   const getFiles=async()=>{
//       const result=await convex.query(api.files.getFiles,{teamId:activeTeam?._id});
//       console.log(result);
//       setFileList_(result);
//       setTotalFiles(result?.length)
//   }
//   return (
//     <div 
//     className=' h-screen fixed w-72 border-r border-[1px] p-6
//     flex flex-col
//     '
    
//     >
//       <div className='flex-1'> 
//         <SideNavTopSection user={user}
//         setActiveTeamInfo={(activeTeam:TEAM)=>setActiveTeam(activeTeam)}/>
//         </div>
    

//      <div>
//       <SideNavBottomSection
//       totalFiles={totalFiles}
//       onFileCreate={onFileCreate}
//       />
//      </div>
//   </div>
     
//   )
// }

// export default SideNav