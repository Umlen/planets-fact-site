import { useState } from 'react';
import useResize from '../utils/useResize';
import '../style/header.css';
import mobileMenuIcon from '../assets/icons/icon-hamburger.svg';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import planetsData from '../planets-data.json';

function Header() {
    const isMobileWidth = useResize();
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    function MobileMenuToggler() {
        setIsMobileMenuShown(prevMobileMenu => !prevMobileMenu);
    }

    return (
        <header className='flex-row-container border-bottom header'>
            <p className='logo-text'>the planets</p>
            {
                isMobileWidth ? 
                    <img 
                        src={mobileMenuIcon} 
                        onClick={MobileMenuToggler} 
                        style={{opacity: isMobileMenuShown && .25}}
                        alt='' 
                    /> : 
                    <Menu />
            }
            {isMobileMenuShown && <MobileMenu planetsData={planetsData} />}
        </header>
    );
}

export default Header;