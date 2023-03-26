function Menu(props) {
    const planetsName = props.planetsData.map(({name}) => name);
    const menuItems = planetsName.map((planet, key) => {
        return(
            <p 
                key={key}
                id={planet}
                className='base-link'
                style={{"--link-after-color": `var(--${planet.toLowerCase()}-color)`}}
                onClick={(e) => props.choosePlanet(e)}
            >
                {planet}
            </p>
        );
    });

    return(
        <nav className='flex-row-container main-menu' aria-label='main menu'>
            {menuItems}
        </nav>
    );
}

export default Menu;