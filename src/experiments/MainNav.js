import React from 'react';
import { Button } from './Button.js'

export default class MainNav extends React.Component{

    render(){
        return(
            <nav>
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Shop</Button>
                <Button>Contact</Button>
            </nav>
        )
    }
}