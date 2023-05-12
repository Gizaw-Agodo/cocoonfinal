import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import image1 from "../../assets/images/cocoonLogo.png";
import image2 from "../../assets/images/profile.png";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const Header =()=>{
     const gama = useSelector((state) => state.cart);
     console.log(gama);
     const { totalQuantity } = useSelector((state) => state.cart);
     const user = JSON.parse(localStorage.getItem("user"))?.user;
     console.log(user);
    const [isScrolled, setIsScrolled] = useState(false)
    const[open, setOpen]= useState(false)
    
    const showNavbar = ()=>{
        setOpen(!open)
    }
    
    useEffect (() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
            setIsScrolled(true)
            }else {
            setIsScrolled(false)
            }
        }
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            
            }
            }, []) 

    return (
      <div
        className={` ${
          isScrolled && "bg-stone-300"
        } h-20  flex z-10 justify-around w-screen md:flex fixed border-b-2 border-b-slate-300 `}
      >
        <div className="shrink-0 w-30 md:flex">
          <Link to="/">
            <img
              src={image1}
              className="flex-shrink-0 truncate block m-auto flex-row overflow-hidden  w-28 "
              alt=""
            />
          </Link>
        </div>
        <div className=" justify-between pl-3.5 block flex-col">
          <ul
            className={` sm:  ${
              open ? " text-center" : "hidden"
            } md:flex items-center pt-7 pr-3 pl-14 list-none xl:w-auto lg:flex `}
          >
            <li className=" align-middle  mr-5">
              <Link to="/menu">
                <p className="no-underline text-black font-bold hover:text-main">
                  Menu
                </p>
              </Link>
            </li>
            <li className=" align-middle mr-5">
              <a href="#" className="no-underline text-black font-bold">
                About
              </a>
            </li>
            <li className=" align-middle mr-5">
              <a href="#" className="no-underline text-black font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-between md:flex items-center pl-3.5 ">
          <Link to = "/login">
          
          <button
            className={` mr-5  flex  ${
              open ? "block" : "hidden"
            }  md:block bg-main py-2 w-36  text-xs gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl r block lg:visible `}
          >
            {!user?"logout":"login"}
          </button>
          </Link>

          <Link to="/cart">
            <button className="mr-5 pl-2" href=" ">
              <Badge
                badgeContent={totalQuantity}
                color="error"
                style={{ cursor: "pointer" }}
              >
                <ShoppingCart />
              </Badge>
            </button>
          </Link>
          <img src={image2} className=" w-20 mr-5 " alt="profileIcon"></img>
          <FaBars
            className="cursor-pointer md:hidden  flex mr-5 "
            size={25}
            onClick={showNavbar}
          />
        </div>
      </div>
    );
}

export default Header
