import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
   <>
   <div className="container">
        <div className="box">
            <img src={logoURL} style={{width:"80px"}}/>
            <p style={{fontSize:"11px"}}>explore plus <img src={subURL} alt=""style={{width:"10px"}}/></p>
        </div>
        <div className="search">
          <input type='search' placeholder="Search for products,brands and more"/>
        
        </div>
        <button>Login</button>
        <ul>
          <li><a href="">Become a Seller</a></li>
          <li><a href="">More <AiOutlineCaretDown/></a></li>
          <li><a href="" ><BsCart2 />Cart</a></li>
        </ul>
   </div>
   <div className='subheader'>
        <ul className='subul'>
          <li><img src={subURL} alt="" /> <br /><a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
          <li><img src={subURL} alt="" /><br /> <a>Top Offers</a></li>
        </ul>
   </div>
   </>
  )
}

export default Header