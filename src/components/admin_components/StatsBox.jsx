
// Import icons, styles and images
import '../../styles/StatsBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StatsBox ({statName, statNumber}) {
    return (
        <div className="stats-box">
            <div className="box-icon">
                <FontAwesomeIcon icon="fa-solid fa-chart-simple" />
            </div>
            <div className="box-info">
                <h3>{statName}</h3>
                <p>{statNumber}</p>
            </div>
        </div>
    )
}

export default StatsBox