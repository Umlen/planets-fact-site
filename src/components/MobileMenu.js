import { Link } from "react-router-dom";
import arrow from '../assets/icons/icon-chevron.svg';

function MobileMenu(props) {
    const planetsName = props.planetsData.map(({name}) => name);

    const menuItems = planetsName.map(planet => {
        const lowerCase = planet.toLowerCase();
        return(
            <Link to={`/${lowerCase}`} className='base-link flex-row-container border-bottom mobile-menu-item'>
                <div 
                    className='mobile-menu-item-circle' 
                    style={{backgroundColor: `var(--${lowerCase}-color)`}}
                >
                </div>
                <p className='mobile-menu-item-text'>{planet}</p>
                <img src={arrow} alt='' />
            </Link>
        );
    });

    return(
        <nav className='mobile-menu'>
            {menuItems}
        </nav>
    );
}

export default MobileMenu;