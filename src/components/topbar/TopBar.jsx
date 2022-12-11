import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css";

export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "https://lifa-blog-927oefldc-devilman66.vercel.app/images/"

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  };
  return (
	<div className="top">
    <div className='topLeft'>
    <i className="topIcon fa-brands fa-facebook-square"></i>
    <i className="topIcon fa-brands fa-twitter-square"></i>
    <i className="topIcon fa-brands fa-pinterest"></i>
    <i className="topIcon fa-brands fa-instagram-square"></i>
    </div>
    <div className='topCenter'>
      <ul className="topList">
        <li className="topListItem">
          <Link to='/' className='link'>Home</Link>
        </li>
        <li className="topListItem">
          <Link to='/' className='link'>About</Link>
        </li>
        <li className="topListItem">
         <Link to='/' className='link'>Contact</Link>
        </li>
        <li className="topListItem">
         <Link to='/write' className='link'>Write</Link>
        </li>
        <li className="topListItem" onClick={handleLogout}>
         {user && "Logout"}
        </li>
      </ul>
    </div>
    <div className='topRight'>
      {user ? (
        <Link to={"/settings"}>
          <img className='topImg' src={PF + user.profilePic} alt=""/>
        </Link>
        ) : (
          <ul className='topList'>
           <li className="topListItem">
            <Link to='/login' className='link'>Login</Link>
           </li>
           <li className="topListItem">
            <Link to='/register' className='link'>Register</Link>
           </li>
          </ul>
        )}
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
  );
}
