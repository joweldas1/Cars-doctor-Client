import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../public/assets/images/login/login.svg";
import UseAuth from "../Provider/UseAuth";
import axios from "axios";

const Login = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const {signIn}=UseAuth()
  const handleLogin = (e) => {
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;

    signIn(email,password)
    .then((result)=>{
      if(result.user){
        // const loggedUser=result.
        const user={email};
        
        axios.post('https://cars-doctor-server-eta.vercel.app/jwt',user, {withCredentials:true})
        .then(res=> {
          console.log(res);
          if(res.status===200){
            // 
          }
        })






        // const user={email}
        // axios.post('https://cars-doctor-server-eta.vercel.app/jwt',user,{withCredentials:true})
        // .then(res=> {
        //   console.log(res.data)
        // })
        // console.log(user);
        // console.log(loggedUser);

        // console.log(location);
        // return navigate(location?.state || "/")
      }
    })
    .catch((error)=>console.log(error))

    
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:gap-16  flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={loginImg} alt="" />
          </div>

          <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <h1 className="text-4xl my-2 text-center font-bold">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary bgOrange"
                />
              </div>
            </form>
            <div>
              <span className="text-center">
                <p>
                  Do not have an account?{" "}
                  <Link
                    to={"/signUp"}
                    className="text-blue-800 font-bold text-sm"
                  >
                    {" "}
                    Sign in{" "}
                  </Link>{" "}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
