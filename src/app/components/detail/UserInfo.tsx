'use client'
import { useUserProvider } from "@/app/context/UserProvider";
import { useParams } from "next/navigation";
import Image from 'next/image'
import InvertButton from "@/app/ui/InvertButton";
import LitupButton from "@/app/ui/LitupButton";
function UserInfo() {

const {users} = useUserProvider();
const {user_id} = useParams();
const activeUserArr = users?.filter(user=>user.node_id===user_id);
const activeUser = activeUserArr?activeUserArr[0]:undefined;


  return (
   
        <section className="flex flex-col gap-8 pl-16 pt-5">
        <div className="flex items-center gap-8 ">
        <div className=" mt-4">
        <Image
        loader={()=>{
         return `${activeUser?.avatar_url}/?w=${160}&q=${160 || 150}`
                  }}
        src={activeUser?.avatar_url as string}
        alt={activeUser?.avatar_url as string}
         width={160}
         height={160}
        className="rounded-full"
                  />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-[32px] leading-[24px]">{activeUser?.login}</h1>
          <p className='text-[#1079F9] '>ID: {activeUser?.id}</p>
          <p className='text-[#1079F9]'>Score: {activeUser?.score}</p>
                         </div>
        </div>

        <div className="flex items-center gap-10  font-mono">
        <div className="flex flex-col gap-4 duration-1000">
        <a className='w-50'  href={activeUser?.html_url}><InvertButton  content="Github Profile"/></a>
        <a className='w-40' href={activeUser?.url}><LitupButton  content="Profile Info"/></a>
         <p className='text-white font-bold'>Type: {activeUser?.type}</p>
         <p className='text-white font-bold'>Node ID: {activeUser?.node_id}</p>
        </div>
        </div>
        </section>
        
      
 
  )
}

export default UserInfo