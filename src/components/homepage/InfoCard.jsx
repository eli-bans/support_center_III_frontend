import '../../styles/InfoCard.css'

function InfoCard ({stat, desc}) {

    return (
        <div className="info-card">
            <div className="digit">{stat}</div>
            <div className="desc">{desc}</div>
        </div>
    );
}

export default InfoCard