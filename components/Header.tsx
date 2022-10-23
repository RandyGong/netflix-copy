import { FaSearch, FaBell, FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className='flex space-x-2 md:space-x-10'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
          alt=''
        />

        <ul className='hidden space-x-4 md:flex'>
          <li className='header-link'>Home</li>
          <li className='header-link'>TV Shows</li>
          <li className='header-link'>Movies</li>
          <li className='header-link'>New & Popular</li>
          <li className='header-link'>My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <FaSearch className='hidden h-6 w-6 sm:inline'></FaSearch>
        <p className='hidden lg:inline'>Kids</p>
        <FaBell className='h-6 w-6'></FaBell>
        {/* <Link
          href='/account'          
        > */}
        <FaLink className='h-6 w-6' onClick={logout}></FaLink>
        {/* </Link> */}
      </div>
    </header>
  );
}
