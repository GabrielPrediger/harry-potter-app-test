import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, ReactNode } from 'react';

export const Header = ({ harryPotterLogo }: { harryPotterLogo: string }) => {
  return (
    <div className="relative sm:px-4 desktop-s:px-7 flex items-center justify-between bg-primary h-20 py-16 border-b border-yellow-600">
      <Header.Logo src={harryPotterLogo} />
      <Header.Menu>
        <Header.MenuItem to="/">Home</Header.MenuItem>
        <Header.MenuItem to="/characters">Characters List</Header.MenuItem>
      </Header.Menu>
    </div>
  );
};

Header.Logo = ({ src }: { src: string }) => {
  const navigate = useNavigate();

  const handleLogoButton = () => {
    navigate('/');
  };

  return (
    <img
      onClick={handleLogoButton}
      className="w-52 h-20 mt-2 cursor-pointer hover:opacity-85"
      src={src}
    />
  );
};

Header.Menu = ({ children }: { children: ReactNode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <GiHamburgerMenu
        size={30}
        className="cursor-pointer"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="absolute right-0 w-48 bg-primary border border-white shadow-lg rounded-lg z-50">
          {children}
        </div>
      )}
    </div>
  );
};

Header.MenuItem = ({ to, children }: { to: string; children: ReactNode }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <a
      href={to}
      className={`block px-4 py-2 ${
        isActive ? 'text-yellow-500 font-bold' : 'text-white'
      } hover:opacity-75`}
    >
      {children}
    </a>
  );
};
