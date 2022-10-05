import React from "react";
import Button from './Button'

const Header = ({ title }) =>{

    const onClick = () => {
        return console.log("Clicked")
    }

    return(
        <header>
            <h2 className="main-hdr">{title}</h2>
            <Button onClick={onClick} text="Add"/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// class Header extends React.Component{
//     render(){
//         return(
//             <h2>Hello from a Class</h2>
//         )
//     }
// }

export default Header;