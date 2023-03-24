import arrow from '../assets/icons/icon-chevron.svg';

function MobileMenu(props) {
    const planetsName = props.planetsData.map(({name}) => name);
    const menuItems = planetsName.map((planet, key) => {
        return(
            <div 
                key={key} 
                className='flex-row-container border-bottom mobile-menu-item' 
                id={planet}
                onClick={(e) => {props.choosePlanet(e); props.mobileMenuToggler();}}
            >
                <div 
                    className='mobile-menu-item-circle' 
                    style={{backgroundColor: `var(--${planet.toLowerCase()}-mobile-menu-color)`}}
                >
                </div>
                <p className='mobile-menu-item-text base-link'>{planet}</p>
                <img src={arrow} alt='' />
            </div>
        );
    });

    return(
        <nav className='mobile-menu'>
            {menuItems}
        </nav>
    );
}

export default MobileMenu;
