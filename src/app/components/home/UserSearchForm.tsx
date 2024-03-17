"use client";
import { Input } from "@/app/ui/input";
import { ChangeEvent } from "react";

export default function UserSearchForm() {
  
  const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //search(e.target.value);
    console.log(e.target.value)
  };

  return (
    <form className="flex justify-center py-6 gap-8">
      <Input
        className="w-1/4"
        placeholder="Enter Username"
        onChange={searchInputHandler}
      />
       {/* <UserSelect /> */}
    </form>
  );
}