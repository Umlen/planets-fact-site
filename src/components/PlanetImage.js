function PlanetImage(props) {
    const {name, images} = props.planet;
    const section = props.section;
    if (section === 'overview') {
        return (
            <img src={images.planet} alt={`${name} overview`} />
        );
    } else if (section === 'structure') {
        return (
            <img src={images.internal} alt={`${name} internal structure`} />
        );
    } else if (section === 'geology') {
        return (
            <div>
                <img src={images.planet} alt={`${name} overview`} />
                <img src={images.geology} alt={`${name} surface geology`} />
            </div>
        );
    }
}

export default PlanetImage;