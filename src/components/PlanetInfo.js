function PlanetInfo(props) {
    const {content, source} = props.section;
    return (
        <div>
            <p>{content}</p>
            <p>
                Source:
                <a href={source} target='_blank'>Wikipedia</a>
            </p>
        </div>
    );
}

export default PlanetInfo;