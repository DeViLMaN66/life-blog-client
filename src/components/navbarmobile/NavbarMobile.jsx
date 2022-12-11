import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./navbarmobile.css";

function OffcanvasExample() {
  const {user, dispatch} = useContext(Context);
  const PF = "https://lifa-blog-927oefldc-devilman66.vercel.app/images/"

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  };
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="NavbarMobile">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1 className='titleBrand'>Life-Blog</h1>
            <div className="topMobile">
              <div className='topBrand'>
              <i className="topIconBrand fa-brands fa-facebook-square"></i>
              <i className="topIconBrand fa-brands fa-twitter-square"></i>
              <i className="topIconBrand fa-brands fa-pinterest"></i>
              <i className="topIconBrand fa-brands fa-instagram-square"></i>
              </div>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <h1 className='titleBrand'>Menu</h1>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className='topMobileAccount'>
                  {user ? (
                    <Link to={"/settings"}>
                      <img className='topImgMobile' src={PF + user.profilePic} alt=""/>
                    </Link>
                    ) : (
                      <ul className='topListInput'>
                       <li className="topListItemInput col order-1">
                        <Link to='/login' className='linkMobile'>Login</Link>
                       </li>
                       <li className="topListItemInput col order-2">
                        <Link to='/register' className='linkMobile'>Register</Link>
                       </li>
                      </ul>
                    )}
                  <i className="topSearchIconMobile fa-solid fa-magnifying-glass"></i>
                </div>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <li className="topListItemMobile">
                    <Link to='/' className='linkMobile'>Home</Link>
                  </li>
                  <li className="topListItemMobile">
                    <Link to='/' className='linkMobile'>About</Link>
                  </li>
                  <li className="topListItemMobile">
                   <Link to='/' className='linkMobile'>Contact</Link>
                  </li>
                  <li className="topListItemMobile">
                   <Link to='/write' className='linkMobile'>Write</Link>
                  </li>
                  <li className="topListItemMobile" onClick={handleLogout}>
                   {user && "Logout"}
                  </li>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;