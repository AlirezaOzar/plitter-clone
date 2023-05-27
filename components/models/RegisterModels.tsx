import axios from "axios";
import useLoginModel from "@/hooks/useLoginModel";
import { useCallback, useState } from "react";
import Input from "../input";
import Model from "../Model";
import useRegisterModel from "@/hooks/useRegisterModel";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModels = () => {
  const LoginModel = useLoginModel();
  const registerModel = useRegisterModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isloading) {
      return;
    }

    registerModel.onClose();
    LoginModel.onOpen();
  }, [isloading, registerModel, LoginModel]);
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // Add Todo register and log in
      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });
      toast.success("Account created");

      signIn("credentials", {
        email,
        password,
      })

      registerModel.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModel, email, password, username, name]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isloading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isloading}
      />
      <Input
        placeholder="UserName"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        disabled={isloading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isloading}
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Already have an account ?</p>
      <span
        onClick={onToggle}
        className="text-white cursor-pointer hover:underline"
      >
        Sign in
      </span>
    </div>
  );
  return (
    <Model
      disabled={isloading}
      isOpen={registerModel.isOpen}
      title="create an account"
      actionLabel="Register"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModels;
