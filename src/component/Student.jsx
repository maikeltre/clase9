function Student({ student }) {
    return (
        <div>
            <ol>
                <li>
                    {student.name} - age: {student.age} - grade: {student.grade}
                </li>
            </ol>
        </div>
    )

}

export default Student;