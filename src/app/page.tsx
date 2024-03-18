import UserListCard from "./components/home/UserListCard";
import UserSearchForm from "./components/home/UserSearchForm";

export default function Home() {
  return (
    <>
      <UserSearchForm />
      <UserListCard/>
    </>
  );
}
