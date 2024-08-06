import "../../styles/TestimonyCard.css";

function TestimonyCard ({FourthPersonImg, comment, name, role}) {

    return (
        <div className="testimony-card">
            <div className="comment">
                "{comment}"
            </div>
            <div className="person">
                <div className="person-image">
                    <img src={FourthPersonImg} alt="Image of person" />
                </div>
                <div className="person-details">
                    <div className="person-name">{name}</div>
                    <div className="person-role">{role}</div>
                </div>
            </div>
        </div>
    );
}

export default TestimonyCard