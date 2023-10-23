
import Login from "../../../Components/login";
const page = () => {
  const data = {
    id: 1,
    title: "Log In",
    pagename: "Log In Your Account",
    btnname: "Log In",
    textlog: "Don't have an account?",
    sign: "Sign Up",
    url: "/../public/assests/images/log-in.png",
    flex: 2,
    inputmsg: "Remember me",
    link: "/forgot",
    linktext: "Forgot Password?",
    state: true,
    navlink: "/register",
    checkbox: true,
    button:true,
  };
  const inputs = [{ name: "Email Address" }, { name: "Password" }];
  return <Login data={data} inputs={inputs} />;
};

export default page;
