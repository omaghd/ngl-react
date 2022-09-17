import Button from "../components/Guest/Button";
import InputField from "../components/Guest/InputField";

const Signup = () => {
  return (
    <div className="">
      <div className="text-6xl text-white text-center tracking-wider font-bold mb-16">
        Register
      </div>

      <div className="flex flex-col gap-7">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
            <span className="text-purple-900 font-extrabold text-2xl">@</span>
          </div>
          <input
            type="text"
            name="username"
            placeholder="instagram_username"
            autoComplete="username"
            className="block w-full rounded-full pl-12 py-4 pr-6 border-0 transition duration-500 bg-purple-100 placeholder:text-purple-900 shadow-lg shadow-purple-700 focus:shadow-purple-500 focus:ring-0"
          />
        </div>
        <InputField name="email" placeholder="email@example.com" type="email" />
        <InputField name="password" placeholder="********" type="text" />
      </div>

      <div className="mt-16 text-center">
        <Button title="Register" />
      </div>
    </div>
  );
};

export default Signup;
