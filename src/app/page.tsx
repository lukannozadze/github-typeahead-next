"use client";
import { useEffect } from "react";
import UserListCard from "@/app/components/home/UserListCard"
import UserSearchForm from "@/app/components/home/UserSearchForm";
import { useUserProvider } from "./context/UserProvider";
import { Toaster } from "./ui/toast/toaster";
import { toast } from "./ui/toast/use-toast";

export default function Home() {
  const { isError } = useUserProvider();

  useEffect(() => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  }, [isError]);

  return (
    <>
      <UserSearchForm />
      <UserListCard />
      {isError && <Toaster />}
    </>
  );
}
