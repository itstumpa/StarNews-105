import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("false");
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("register click", { email, password });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include at least 1 uppercase, 1 lowercase, 1 number, 1 special character and be minimum 8 characters."
      );
      return;
    }

    // setError("");
    // setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("after creation of a new user", res.user);
        toast.success("Successfully Registered!");
        navigate("/"); // ✅ Redirect to home page
        // setSuccess(true);
        // event.target.reset();
      })
      .catch((e) => {
        console.log(e);
        console.log(e.code);
        if (e.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database.");
        } else if (e.code === "auth/weak-password") {
          toast.error("At least 8 digit er pass dite hobe");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
        }
      });
  };

  return (
    <div className="mt-22 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset relative">
            <label className="label">Name</label>
            <input
              type={"text"}
              name="Name"
              className="input input-bordered w-full bg-blue-900/20 text-white placeholder:white/60 focus:outine-none focus:ring-2 focus:ring-blue-400"
              placeholder="Name"
            />
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
              onClick={() => setshow(!show)}
              className="absolute right-[28px] top-[175px] cursor-pointer z-50"
            >
              {show ? <Eye /> : <EyeClosed />}
            </span>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 ">
              Register
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
          {/* {success && (
            <p className="text-green-500">Account Created Successfully</p>
          )} */}
          {/* {error && <p className="text-red-300">{error}</p>} */}
        </form>
        <p className="text-center">
          Already have an Account? Please{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
