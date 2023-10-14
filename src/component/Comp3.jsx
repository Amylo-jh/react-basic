import { Link } from "react-router-dom";
import { students } from "../data/data";
import { useState } from "react";


const Comp3 = () => {

    // path variable : "/param/12"
    // queryString : "/param?id=6&page=2"

    const [id, setId] = useState();
    const [page, setPage] = useState();
    const [variable, setVariable] = useState();

    return (
        <div className="comp3 comp">
            <Link to={
                {
                    pathname : "/param/20"
                }
            }>param전송(path variable)</Link>
            <br/><br/><br/>
            
            <div>
                {students.map(s => (
                    <Link to={
                        {
                            pathname : `/param/${s.name}`
                        }
                    }>{s.name}</Link>
                ))}
            </div>
            <input type="text" name="variable" onChange={(e) =>{setVariable(e.target.value)}} placeholder="variable"/>
            <Link to={
                {
                    pathname : `/param/${variable}`
                }
            }>버튼</Link>
            <br/><br/><br/>


            
            <div>
                <Link to="/param?id=aa&page=10">Param전송</Link>
                <Link to={
                    {
                        pathname: "/param",
                        search: "?id=bb&page=20"
                    }
                }>param전송(query string)</Link>
                <br/>
            </div>
            <br/><br/><br/>

            <input type="text" name="id" onChange={(e) =>{setId(e.target.value)}} placeholder="id"/>
            <input type="text" name="page" onChange={(e) =>{setPage(e.target.value)}} placeholder="page" />
            <Link to={
                {
                    pathname : "/param",
                    search : `?id=${id}&page=${page}`
                }
            }>버튼</Link>
        </div>
        
    )
}

export default Comp3;