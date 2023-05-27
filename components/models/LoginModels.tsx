import useLoginModel from "@/hooks/useLoginModel";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import Input from "../input";
import Model from "../Model";
import useRegisterModel from "@/hooks/useRegisterModel";

const LoginModels = () => {
  const LoginModel = useLoginModel();
  const registerModel = useRegisterModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isloading) {
      return;
    }

    LoginModel.onClose();
    registerModel.onOpen();
  }, [isloading, registerModel, LoginModel]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // Add Todo log in
      await signIn("credentials", {
        email,
        password,
      });

      LoginModel.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [LoginModel, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isloading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isloading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>First time using Twitter ?</p>
      <span
        onClick={onToggle}
        className="text-white cursor-pointer hover:underline"
      >
        Create an account
      </span>
    </div>
  );
  return (
    <Model
      disabled={isloading}
      isOpen={LoginModel.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={LoginModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModels;
