

const EventCard = ({result}) => {

    return (
        <section>
            <h1>{result.title}</h1>
            <p>{result.start}</p>
            <p>{result.end}</p>
            <p>{result.timezone}</p>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.932919413014!2d13.326573215940675!3d52.49845384557798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65229a0d322daf4c!2zNTLCsDI5JzU0LjQiTiAxM8KwMTknNDMuNSJF!5e0!3m2!1sen!2sde!4v1637871345590!5m2!1sen!2sde" ></iframe>
            
        </section>
    )
}

export default EventCard;