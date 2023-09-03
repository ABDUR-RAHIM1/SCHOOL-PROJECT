import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillHome, AiFillInfoCircle, AiOutlineLogin, AiOutlineMenuFold } from "react-icons/ai"
import { FcAbout } from "react-icons/fc"
import { Link, useLocation } from 'react-router-dom';
function NavItem() {
  const path = useLocation().pathname
  console.log(path)
  const navItems = [
    { item: "হোম", link: "/", icon: <AiFillHome /> },
    { item: "ইনস্টিটিউট তথ্য", link: "/about", icon: <FcAbout /> },
    { item: "একডেমিক তথা", link: "/academic-info", icon: <AiFillHome /> },
    { item: "নোটিশ বোর্ড", link: "/notice", icon: <AiFillInfoCircle /> },
    { item: "গ্যালারি", link: "/gallary", icon: <AiFillInfoCircle /> },
    { item: "যোগাযোগ করুন ", link: "/contact", icon: <AiFillInfoCircle /> },
    { item: "লগইন", link: "/login", icon: <AiOutlineLogin /> },
  ]

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary px-2 py-2">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto duration-1000">
          {
            navItems.map((item, index) => (
              <Link key={index} to={item.link} as={Link} className={`
                  ${path === item.link && "active"}
                 flex mt-2 items-center gap-2 text-1xl px-2  border-right
                 `}>
                <span className='text-2xl'> {item.icon}</span>
                {item.item}
              </Link>
            ))
          }

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavItem;