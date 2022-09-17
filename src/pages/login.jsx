import Button from "../components/Auth/Button";
import InputField from "../components/Auth/InputField";

const Login = () => {
  return (
    <div className="">
      <div className="text-6xl text-white text-center tracking-wider font-bold mb-16">
        Login
      </div>

      <div className="flex flex-col gap-7">
        <InputField name="email" placeholder="email@example.com" type="email" />
        <InputField name="password" placeholder="********" type="text" />
      </div>

      <div className="mt-16 text-center">
        <Button title="Login" />
      </div>
    </div>
  );
};

export default Login;
