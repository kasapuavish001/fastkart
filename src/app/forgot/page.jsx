
import Login from "../../../Components/login";
const page = () => {
  const data = {
    id: 1,
    title: "Forgot Password",
    pagename: "Forgot your password",
    btnname: "Log In",
    textlog: "Don't have an account?",
    sign: "Sign Up",
    url: "/../public/assests/images/forgot.png",
    flex: 1,
    inputmsg: "Remember me",
    link: "/forgot",
    linktext: "Forgot Password?",
    state: false,
    navlink: "/register",
    checkbox: false,
    button:false,
  };
  const inputs = [{ name: "Email Address" }];
  return <Login data={data} inputs={inputs} />;
};

export default page;
