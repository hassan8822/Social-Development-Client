
import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Povider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
  const navigate = useNavigate();
  const { createuser, setUser} = use(AuthContext)
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
        
         
          <button type="submit" className="btn btn-neutral mt-4">Sign In</button>

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