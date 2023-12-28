import Button from "../ui/components/Button";
import Input from "../ui/components/Input";

// const formStyles = ''

function Login() {
  return (
    <div className="flex flex-col items-center justify-center m-auto space-y-8">
      <h2 className="font-bold text-3xl tracking-wider">Login</h2>
      <form className="md:w-[400px] space-y-6">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <a href="#" className="text-dark-color w-fit font-light block">Forget your password?</a>
        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
