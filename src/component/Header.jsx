import { Link } from "react-router-dom"

const Header = () => {
    
    return (
        <div className="header">
            {/* <h2>Header.jsx</h2> */}
            {/* a태그의 href 대신 link 태그의 to 사용*/}
            {/* npm install react-router-dom*/}

            <Link to="/">Home</Link> 
            <Link to="/comp1">Comp1</Link>
            <Link to="/comp2">Comp2</Link>
            <Link to="/comp3">Comp3</Link>
        </div>
    )
}

export default Header