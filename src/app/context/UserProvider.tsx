"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import useGithubUsers from "../service/github";
import { GithubUser } from "../service/types";

type PropsType = {
  children: ReactNode;
};
type ContextType = {
  users: GithubUser[] | undefined;
  search: (username: string) => void;
  setMaxUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  isError: boolean;
  maxUsersPerPage: number;
};
//type Timer = ReturnType<typeof setTimeout>;

const Context = createContext<ContextType>({
  users: undefined,
  isLoading: false,
  maxUsersPerPage: 5,
  isError: false,
  search: () => {},
  setMaxUsersPerPage: () => {},
});

function UserProvider({ children }: PropsType) {
  const [maxUsersPerPage, setMaxUsersPerPage] = useState(5);
  const userMutations = useGithubUsers();
  const users = userMutations.data?.items;
  const isLoading = userMutations.isPending;
  const isError = userMutations.isError;

  const search = useDebouncedCallback((username: string) => {
    if (username !== "") userMutations.mutateAsync({ username });
  }, 500);

  const contextValue: ContextType = {
    users,
    search,
    isLoading,
    isError,
    maxUsersPerPage,
    setMaxUsersPerPage,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default UserProvider;

export const useUserProvider = () => {
  const context = useContext(Context);
  if (Object.keys(context).length === 0) {
    throw new Error("UseContextProvider must be within ContextProvider");
  }
  return context;
};
