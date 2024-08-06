import '../../styles/CourseCard.css';

function CourseCard ({techImage, desc}) {

    return (
        <div className="course-card">
            <img src={techImage} alt="Image to display"/>
            <div className="text-arrow">
                <div>{desc}</div>
                <i class="material-icons">arrow_forward</i>
            </div>
        </div>
    )
}

export default CourseCard