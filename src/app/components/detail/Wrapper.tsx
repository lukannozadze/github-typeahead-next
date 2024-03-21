import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};
export default function Wrapper({ children }: PropsType) {
  return (
    <section className="py-16 flex justify-center items-center mt-6">
      <div className="w-[740px] h-[500px] bg-[#1E2A47]  rounded-lg ">
        {children}
      </div>
    </section>
  );
}
