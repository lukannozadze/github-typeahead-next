'use client'
import { useUserProvider } from "@/app/context/UserProvider";
import Link from "next/link";
import Image from 'next/image'
import LoadingSkeleton from "./LoadingSkeleton";


export default function UserListCard() {
  const {users,isLoading,maxUsersPerPage} = useUserProvider();
  const selectedUsers = users?.slice(0, maxUsersPerPage);

  return (
    <section className="flex flex-col gap-8 items-center">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <ul className="flex flex-col gap-8">
          {selectedUsers?.map((user) => {
            return (
              <li key={user.node_id}>
               <Link href={user.node_id}>
                <div className="px-4 py-4 max-w-[700px] min-w-[500px] flex items-center justify-between bg-[#1E2A47] rounded-md shadow-xl relative overflow-hidden">
                  <h2 className="text-white font-bold text-xl font-mono">
                    {user.login}
                  </h2>
                  <Image
                  loader={()=>{
                    return `${user.avatar_url}/?w=${80}&q=${80 || 75}`
                  }}
                    src={user.avatar_url}
                    alt={user.login}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
               </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  
  );
}

