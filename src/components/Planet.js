import { useState, useEffect } from "react";
import PlanetInfo from "./PlanetInfo";
import PlanetImage from "./PlanetImage";

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
        <div>
            <div>
                <div>
                    <p onClick={(e) => changeSection(e)} id='overview'>overview</p>
                    <p onClick={(e) => changeSection(e)} id='structure'>internal structure</p>
                    <p onClick={(e) => changeSection(e)} id='geology'>surface geology</p>
                </div>
                <div>
                    <PlanetImage planet={planet} section={section} />
                </div>
                <div>
                    <h1>{planet.name}</h1>
                    <PlanetInfo section={planet[section]} />
                </div>
            </div>
            <div>
                <div>
                    <p>rotation time</p>
                    <p>{planet.rotation}</p>
                </div>
                <div>
                    <p>revolution time</p>
                    <p>{planet.revolution}</p>
                </div>
                <div>
                    <p>radius</p>
                    <p>{planet.radius}</p>
                </div>
                <div>
                    <p>average tem.</p>
                    <p>{planet.temperature}</p>
                </div>
            </div>
        </div>
    );
}

export default Planet;