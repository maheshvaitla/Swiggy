'use client'

import { RootState } from '@/store/store';
import useOnlineStatus from '@/utils/useOnlineStatus';
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';

const Navbar = ()=> {
  const cart = useSelector((store: RootState) => store.cart.items)


  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="navbar bg-base-500 shadow-sm bg-amber-500">
    <div className="flex-1 flex">
      <div className=" text-white text-2xl font-bold mx-2">Swiggy</div>
      <Image
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEz/UQD/UgD/UwH/UwH/UwD/UgD/UgD/UwD/TwD/UwH/SwD/QQD/nX//uKL/////18n/9/P/lHP/7uf/YCT/fFH/x7X/TwBtF0izAAAAGHRSTlMAO4a02en4/4cYz////////////////xfHO/5dAAAA40lEQVR4AWzQURKDIAxF0SCQtIIgatz/UquYAO30/N55gsDNTNZ5RKoQvbMvA4/3TH/M79qQ/sK7DrtwGbYAhlSkJaWFIikDU5ulXKU2nsDqbs1i1a0FJ+3ZlbqV6sDTo9S47flyUOUBqeI8xO05FiWGReL9gcIa6Tsy8xH1vho5N2U9WpRacjdG/RV1xhbF0SPTbwzLeinyQhKRRNxS2s77RL0sSpRTzyQnSvSkwp73PRdqPLgeWZ9OOLDUxFM+Kiy8aLAXGkxgqAvMgToDMI91bDPAZ7iTpjj+RI0jOzCBswMA+LEbQ3WL//0AAAAASUVORK5CYII="
      alt="swiggy"
      width={10}
      height={100}
      sizes="1vw"
      style={{
        width: '5%',
        height: 'auto',
      }}
    />
    </div>
    <h1 className=" mx-2">Online Status:  {onlineStatus ? '✅' : '🛑'}</h1>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
       
        <button className="btn btn-soft btn-primary mx-2"><Link href="/">Home</Link></button>
        <button className="btn btn-soft btn-primary mx-2"><Link href="/About">About Us</Link></button>
        <button className="btn btn-soft btn-primary mx-2">Contact Us</button>
        <button className="btn btn-soft btn-primary mx-2"><Link href="/Grocery">Grocery Store</Link></button>
        <button className="btn btn-soft btn-primary mx-2 font-bold text-2xl">Cart- {cart?.length}</button>
        {/* <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
          <div className="card-body">
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div> */}
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
