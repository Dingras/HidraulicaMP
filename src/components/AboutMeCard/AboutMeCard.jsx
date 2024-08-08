
const AboutMeCard = (props) => {

    const content_Left_Rigth = props.id % 2 != 0 ? 'justify-content-start' : 'justify-content-end';
    const text_Left_Rigth = props.id % 2 != 0 ? 'text-start' : 'text-end';
    const file_Extension = props.url_img_vid.split('.').pop().toLowerCase();

    return (
        <div className="card text-bg-dark mx-2 aboutme-container">
            {file_Extension === 'mp4' ? (
                <video src={props.url_img_vid} className="card-img img-vid-container" autoPlay loop muted></video>
            ) : (
                <img src={props.url_img_vid} className="card-img img-vid-container" alt="..." />
            )}
            <div className={`card-img-overlay d-flex ${content_Left_Rigth} align-items-center`}>
                <h4 className={`card-title aboutme-text ${text_Left_Rigth} w-50`}>
                    {props.description}
                </h4>
            </div>
        </div>
    );
}

export default AboutMeCard;