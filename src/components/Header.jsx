import React from "react";
import Button from './Button'

const Header = ({ title, onAdd, btnText }) =>{

    return(
        <header>
            <h2 className="main-hdr">{title}</h2>
            <Button color={btnText ? 'red' : 'green'} btnText={btnText} onClick={onAdd} text={btnText ? 'Close' : 'Add'}/>
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