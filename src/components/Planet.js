function Planet(props) {
    console.log(props.planet);
    return (
        <div>
            <p>{props.planet[0].name}</p>
        </div>
    );
}

export default Planet;