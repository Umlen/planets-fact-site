import useResize from '../utils/useResize';
import '../style/section-menu.css';

function SectionMenu(props) {
    const isMobileWidth = useResize();
    const section = props.section;
    const planet = props.planetName;

    return (
        <nav className='section-menu uppercase-text'>
            <p 
                onClick={(e) => props.changeSection(e)} 
                id='overview' 
                style={{"--link-after-color": `var(--${planet.toLowerCase()}-color)`}}
                className={section === 'overview' ? 
                    'section-menu-item section-menu-item-active' :
                    'section-menu-item section-menu-item-inactive'
                }
            >
                <span className='section-menu-item-number'>01</span>
                overview
            </p>
            <p 
                onClick={(e) => props.changeSection(e)} 
                id='structure' 
                style={{"--link-after-color": `var(--${planet.toLowerCase()}-color)`}}
                className={section === 'structure' ? 
                'section-menu-item section-menu-item-active' :
                'section-menu-item section-menu-item-inactive'
            }
            >
                <span className='section-menu-item-number'>02</span>
                {isMobileWidth ? 'structure' : 'internal structure'} 
            </p>
            <p 
                onClick={(e) => props.changeSection(e)} 
                id='geology' 
                style={{"--link-after-color": `var(--${planet.toLowerCase()}-color)`}}
                className={section === 'geology' ? 
                'section-menu-item section-menu-item-active' :
                'section-menu-item section-menu-item-inactive' 
            }
            >
                <span className='section-menu-item-number'>03</span>
                {isMobileWidth ? 'surface' : 'surface geology'}
            </p>
        </nav>
    )
}

export default SectionMenu;