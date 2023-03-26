import { useState, useEffect } from 'react';
import '../style/planet.css'
import SectionMenu from './SectionMenu';
import PlanetInfo from './PlanetInfo';
import PlanetImage from './PlanetImage';

function Planet(props) {
    const [section, setSection] = useState('overview');
    const [planet] = props.planet;

    useEffect(function sectionReset() {
        setSection('overview');
    }, [planet]);

    function changeSection(e) {
        setSection(e.target.id);
    }

    return (
        <main>
            <div className='grid-container'>
                <SectionMenu planetName={planet.name} section={section} changeSection={changeSection} />
                <PlanetImage planet={planet} section={section} />
                <section className='planet-info'>
                    <h1 className='large-header uppercase-text'>{planet.name}</h1>
                    <PlanetInfo section={planet[section]} />
                </section>
            </div>
            <section className='facts-container uppercase-text'>
                <h2 className='hidden-title'>Planet Facts</h2>
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
            </section>
        </main>
    );
}

export default Planet;
