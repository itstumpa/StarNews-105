import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("login click", { email, password });

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully Login!");
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google signin");
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  console.log(user);
  return (
    // <div>
    <>
      <div className="mt-22 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          {user ? (
            <div className="text-center space-y-3">
              <p className="text-green-500 mb-3">Login Successful ✅</p>
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-20 w-20 rounded-full mx-auto"
                alt=""
              />
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-white/80">{user?.email}</p>
              <button onClick={handleLogout} className="btn btn-neutral w-full">
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <h1 className="text-3xl font-bold text-center">Login now!</h1>

              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full bg-blue-900/20 text-white placeholder:white/60 focus:outine-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full bg-blue-900/20 text-white placeholder:white/60 focus:outine-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[28px] top-[175px] cursor-pointer z-50"
                >
                  {show ? <Eye /> : <EyeClosed />}
                </span>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  // onClick={handleLogin}
                  className="btn btn-neutral mt-4"
                >
                  Login
                </button>
                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* Google */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="btn bg-white text-black mt-4 border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </fieldset>
              <p className="text-center mt-2">
                New to our website? Please{" "}
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
