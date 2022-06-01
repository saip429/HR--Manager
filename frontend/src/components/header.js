import React  from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import './components.css'

function Header(){
    return(
        <Nav className="navbar navbar-lg " id="header--nav">
            
            <Nav.Item id="emp--brand">
                <Link to='/' id='emp--brand'>HR Manager</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to='/all' id="emp--link" title="view all employees">employees</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to='/add' id="emp--link" title="add an entry">+ add employee</Link>
            </Nav.Item>
             
        </Nav>
    )
}
export default Header