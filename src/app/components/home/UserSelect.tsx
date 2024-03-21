import UseGenerateSelectOptions from "@/app/components/home/utils/generateSelectOptions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { useUserProvider } from "@/app/context/UserProvider";

function UserSelect() {
  const { users, setMaxUsersPerPage } = useUserProvider();
  const usersQuantity = users?.length;
  const generatedVal = UseGenerateSelectOptions();
  const selectValues = (usersQuantity as number) >= 5 ? generatedVal : null;

  const handleSelect = (value: string) => {
    setMaxUsersPerPage(parseFloat(value));
  };

  return (
    <>
      {selectValues && (
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Users On The Page" />
          </SelectTrigger>
          <SelectContent>
            {selectValues?.map((val) => (
              <SelectItem key={val.toString()} value={val.toString()}>
                {val}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </>
  );
}

export default UserSelect;
