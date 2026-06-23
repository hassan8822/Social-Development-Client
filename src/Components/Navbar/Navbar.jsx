import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png.png"
import logo from "../../assets/logo.png.png"
import { use } from "react";
import { AuthContext } from "../../Povider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, signOutuser} = use(AuthContext)

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/upcomingevents">Upcoming Events</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    signOutuser()
    .then(() => {
     Swal.fire({
  title: "Success!",
  text: "Logged Out Successfully",
  icon: "success"
});

    })
    .catch(error => {
         console.log(error)

    })
   


  
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <img className="w-28" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
       
        {
          user ?
          (
            <>
            <div className="dropdown dropdown-end">
              <div
                 tabIndex={0}
                role="button"
                className="tooltip tooltip-bottom"
                data-tip={user.displayName} >

                  <img className="w-12 h-12 rounded-full" src={user.photoURL || userIcon} alt="" />

              </div>
                 <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/createevent">Create Event</Link>
                </li>

                <li>
                  <Link to="/manageevent">Manage Event</Link>
                </li>

                <li>
                  <Link to="/joinedevent">Joined Event</Link>
                </li>
              </ul>

            </div>
             <button onClick={handleLogOut} className="btn btn-primary px-10">LogOut</button> 

            </>
          ) : (
            
           <Link to="/login" className="btn btn-primary px-10">
          Login
        </Link> 
          )}
          
          
        
       
      </div>
    </div>
  );
};

export default Navbar;
