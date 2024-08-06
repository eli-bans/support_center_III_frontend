import '../../styles/ServiceCard.css';

function ServiceCard ({count, title, desc}) {

    return (
        <div className="service-card">
            <div className="count">{count}</div>
            <div className="details">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </div>
            
        </div>
    )
}

export default ServiceCard