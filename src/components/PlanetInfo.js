import sourceIcon from '../assets/icons/icon-source.svg';

function PlanetInfo(props) {
    const {content, source} = props.section;
    return (
        <div>
            <p className='planet-info-text'>{content}</p>
            <div className='planet-info-source'>
                <p>Source : <a href={source} target='_blank'>Wikipedia</a></p>
                <img src={sourceIcon} alt='' />
            </div>
        </div>
    );
}

export default PlanetInfo;