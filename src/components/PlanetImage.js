function PlanetImage(props) {
    const {name, images} = props.planet;
    const section = props.section;
    if (section === 'overview') {
        return (
            <div className='planet-img-wrapper'>
                <img src={images.planet} alt={`${name} overview`} className='planet-img' />
            </div>
        );
    } else if (section === 'structure') {
        return (
            <div className='planet-img-wrapper'>
                <img src={images.internal} alt={`${name} internal structure`} className='planet-img' />
            </div>
        );
    } else if (section === 'geology') {
        return (
            <div className='planet-img-wrapper'>
                <img src={images.planet} alt={`${name} overview`} className='planet-img' />
                <img src={images.geology} alt={`${name} surface geology`} className='planet-img-geology'/>
            </div>
        );
    }
}

export default PlanetImage;