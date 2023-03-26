import { useState, useEffect } from 'react';
import '../style/planet.css'
import useResize from '../utils/useResize';
import PlanetInfo from './PlanetInfo';
import PlanetImage from './PlanetImage';

function Planet(props) {
    const [section, setSection] = useState('overview');
    const [planet] = props.planet;
    const isMobileWidth = useResize();

    useEffect(function sectionReset() {
        setSection('overview');
    }, [planet]);

    function changeSection(e) {
        setSection(e.target.id);
    }

    return (
        <main>
            <div className='grid-container'>
                <aside className='section-menu uppercase-text'>
                    <p onClick={(e) => changeSection(e)} id='overview' className='section-menu-item'>
                        <span className='section-menu-item-number'>01</span>
                        overview
                    </p>
                    <p onClick={(e) => changeSection(e)} id='structure' className='section-menu-item'>
                        <span className='section-menu-item-number'>02</span>
                        {isMobileWidth ? 'structure' : 'internal structure'} 
                    </p>
                    <p onClick={(e) => changeSection(e)} id='geology' className='section-menu-item'>
                        <span className='section-menu-item-number'>03</span>
                        {isMobileWidth ? 'surface' : 'surface geology'}
                    </p>
                </aside>
                <PlanetImage planet={planet} section={section} />
                <section className='planet-info'>
                    <h1 className='large-header uppercase-text'>{planet.name}</h1>
                    <PlanetInfo section={planet[section]} />
                </section>
            </div>
            <div className='facts-container uppercase-text'>
                <div className='fact-wrapper'>
                    <p className='fact-name'>rotation time</p>
                    <p className='big-text'>{planet.rotation}</p>
                </div>
                <div className='fact-wrapper'>
                    <p className='fact-name'>revolution time</p>
                    <p className='big-text'>{planet.revolution}</p>
                </div>
                <div className='fact-wrapper'>
                    <p className='fact-name'>radius</p>
                    <p className='big-text'>{planet.radius}</p>
                </div>
                <div className='fact-wrapper'>
                    <p className='fact-name'>average tem.</p>
                    <p className='big-text'>{planet.temperature}</p>
                </div>
            </div>
        </main>
    );
}

export default Planet;
