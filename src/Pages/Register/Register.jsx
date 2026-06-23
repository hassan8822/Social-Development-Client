
import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Povider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
  const navigate = useNavigate();

  const { createuser, setUser, googleSignIn} = use(AuthContext)
  const handleSignIn = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.Photo.value;
    const password = e.target.password.value;
   console.log(name, email, photo, password);

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
    alert(
      "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
    );
    return;
  }
   createuser(email, password) 
   .then(result => {
    const user = result.user;
    setUser(user);
     Swal.fire("Registered!", "Account created successfully", "success");

    navigate("/login")
   
   }) 
  .catch((error) => {
 Swal.fire({
    icon: "error",
    title: "Registration Failed",
    text: error.message,
  });
  });
};

 const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
      console.log(result.user);
      navigate("/login");
        Swal.fire("Login Successful", "Welcome back!", "success");
    })
    .catch((error) => {
      alert(error.message);
    });
  }
    return (
          <div className="hero bg-base-200 min-h-[70vh] ">
 
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
           <h1 className="text-3xl font-bold">Register now!</h1>
      <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">

             <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name"
          required />

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email"
          required />
          

          <label className="label">Photo URL</label>
          <input type="text" name="Photo" className="input" placeholder="Photo URL"
          required />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password"
          required />
        
         
          <button type="submit" className="btn btn-neutral mt-4">Sign UP</button>

            <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-3 text-gray-500 font-medium text-sm">Or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

          <button onClick={handleGoogleSignUp} type="button" className="btn bg-white text-black border-[#e5e5e5]">
         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Google
         </button>

           <p className="font-semibold text-center pt-4">Already Have An Account?{" "}
           <Link className="text-secondary" to="/login">Login</Link>
           </p>
        </fieldset>
      </form>
      </div>
    </div>
  </div>
    );
};

export default Register;