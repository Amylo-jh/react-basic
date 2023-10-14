import { student,students } from "../data/data";
import Student from "./Student";

const Comp1 = () => {
    
    return (
        <div className="comp1 comp">
            <h2>Comp1.jsx</h2>

            <Student stu={student}/>
            <br />
            {students.map(s => (<Student stu={s}/>))}



        </div>
    )
}

export default Comp1;