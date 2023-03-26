import { useState } from 'react';
import useResize from '../utils/useResize';
import '../style/header.css';
import mobileMenuIcon from '../assets/icons/icon-hamburger.svg';
import MobileMenu from './MobileMenu';
import Menu from './Menu';

function Header(props) {
    const isMobileWidth = useResize();
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    function mobileMenuToggler() {
        setIsMobileMenuShown(prevMobileMenu => !prevMobileMenu);
    }

    return (
        <header className='border-bottom header uppercase-text'>
            <p className='logo-text'>the planets</p>
            {
                isMobileWidth ? 
                <img 
                    src={mobileMenuIcon} 
                    onClick={mobileMenuToggler} 
                    style={{opacity: isMobileMenuShown && .25}}
                    alt='' 
                /> : 
                <Menu 
                    planetsData={props.planetsData} 
                    choosePlanet={props.choosePlanet} 
                />
            }
            {
                isMobileMenuShown && 
                <MobileMenu 
                    planetsData={props.planetsData} 
                    choosePlanet={props.choosePlanet} 
                    mobileMenuToggler={mobileMenuToggler} 
                />
            }
        </header>
    );
}

export default Header;