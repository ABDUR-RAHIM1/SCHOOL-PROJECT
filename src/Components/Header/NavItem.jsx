
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiFillInfoCircle, AiOutlineLogin, AiOutlineMenuFold } from "react-icons/ai"
import { FcAbout } from "react-icons/fc"

function NavItem() {
  const path = useLocation().pathname
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-3">


      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" as={Link} className={`items ${path === "/" && "active"}`} href="#features"> <AiFillHome /> হোম</Link>
          <Link as={Link} className="items"> <FcAbout />
            <NavDropdown title=" ইনস্টিটিউট তথ্য" id="collasible-nav-dropdown">
              <NavDropdown.Item className='items' as={Link} href="#action/3.1">আমাদের সম্পর্কে</NavDropdown.Item>
              <NavDropdown.Item className='items' as={Link} href="#action/3.2">
                কমিটি
              </NavDropdown.Item>
              <NavDropdown.Item className='items' as={Link} href="#action/3.3">ডোনার </NavDropdown.Item>
            </NavDropdown>

          </Link>
          <Link as={Link} className="items"> <AiFillHome />

            <NavDropdown title="তালিকা" id="collasible-nav-dropdown">
              <NavDropdown.Item className='items' as={Link} href="#action/3.1">শিক্ষক  </NavDropdown.Item>
              <NavDropdown.Item className='items' as={Link} href="#action/3.2">
                ছাত্রছাত্রী
              </NavDropdown.Item>
              <NavDropdown.Item className='items' as={Link} href="#action/3.3">কর্মী  </NavDropdown.Item>
            </NavDropdown>

          </Link>
          <Link as={Link} className="items" href="#features"> <AiFillHome />

            <NavDropdown title="একডেমিক তথা" id="collasible-nav-dropdown">
              <NavDropdown.Item className='items' as={Link} href="#action/3.1">বইয়ের  তালিকা  </NavDropdown.Item>
              <NavDropdown.Item className='items' as={Link} href="#action/3.2">
                ক্লাস রুটিন
              </NavDropdown.Item>
              <NavDropdown.Item className='items' as={Link} href="#action/3.3">পরীক্ষার রুটিন   </NavDropdown.Item>
            </NavDropdown>

          </Link>
          <Link as={Link} className={`items ${path == "/notice" && "active"}`} to="/notice"> <AiFillInfoCircle /> নোটিশ বোর্ড</Link>
          <Link as={Link} className="items"> <AiFillInfoCircle />


            <NavDropdown title="গ্যালারি" id="collasible-nav-dropdown">
              <NavDropdown.Item className='items' as={Link} href="#action/3.1">ফটো গ্যালারি  </NavDropdown.Item>
              <NavDropdown.Item className='items' as={Link} href="#action/3.2">
                ভিডিও গ্যালারি
              </NavDropdown.Item>
            </NavDropdown>
          </Link>

          <Link as={Link} className={`items ${path == "/contact" && "active"}`} to='/contact' > <AiFillInfoCircle /> যোগাযোগ</Link>
          <Link as={Link} className={`items ${path == "/login" && "active"}`}> <AiOutlineLogin />
            <NavDropdown title="লগইন" id="collasible-nav-dropdown">
              <NavDropdown.Item state="teacherLogin" to="/login" className='items' as={Link} href="#action/3.1">শিক্ষক   </NavDropdown.Item>
              <hr />
              <NavDropdown.Item state="studentLogin" to="/login" className='items' as={Link} href="#action/3.2">
                শিক্ষার্থী
              </NavDropdown.Item>
            </NavDropdown>

          </Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavItem;