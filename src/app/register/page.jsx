
import Login from "../../../Components/login";
const page = () => {
  const data = {
    id: 1,
    title: "Sign In",
    pagename: "Create New Account",
    btnname: "Log In",
    textlog: "Already have an account?",
    sign: "Log In",
    url: "/../public/assests/images/sign-up.png",
    flex: 1,
    inputmsg: "I agree with Terms and Privacy",
    link: "/forgot",
    linktext: "Forgot Password?",
    state: false,
    navlink: "/login",
    checkbox: true,
    button:true,
  };
  const inputs = [
    { name: "Full Name" },
    { name: "Email Address" },
    { name: "Password" },
  ];
  return <Login data={data} inputs={inputs} />;
};

export default page;
