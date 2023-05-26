import useLoginModel from "@/hooks/useLoginModel";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
const SidebarTwitteButton = () => {
  const router = useRouter();
  const LoginModel = useLoginModel();

  const onClick = useCallback(() => {
    LoginModel.onOpen();

  },[LoginModel]);


  return (
    <div onClick={onClick}>
      <div
        className="
         mt-6 lg:hidden rounded-full 
         h-14 w-14 flex items-center
         justify-center bg-sky-500 
         hover:bg-opacity-80 
         transition cursor-pointer"
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
        mt-6 hidden 
        lg:block px-4 
        py-2 rounded-full
        bg-sky-500 
        hover:bg-opacity-50 
        cursor-pointer transition"
      >
        <p className=" hidden lg:block text-center font-semibold text-white text-[20px]">Tweet</p>
      </div>
    </div>
  );
};

export default SidebarTwitteButton;
