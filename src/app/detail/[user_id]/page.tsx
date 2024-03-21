import UserInfo from "@/app/components/detail/UserInfo";
import Wrapper from "@/app/components/detail/Wrapper";
import BackButton from "@/app/ui/BackButton";

export default function page() {
  return (
    <>
     <BackButton/>
    <Wrapper>
       <UserInfo/>
    </Wrapper>
    </>
  )
}
