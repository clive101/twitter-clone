import { Search } from '@material-ui/icons'
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import './Widgets.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import WidgetzOption  from "./WidgetzOption";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';

function Widgets() {
    return (
        <div className="widgets">

            <div className="widgets__input">
            <Search className="widgets__searchIcon"/>
            <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetsContainer">
                <h2>Trending</h2>
                
                    
                    <h4>#bafana < MoreHorizIcon/></h4> 
                    
                    <h4>#ManU < MoreHorizIcon/></h4> 
        
                
                </div>    


                 <div className="widgets__widgetsContainer">
                <h2>Topics to follow</h2>
                <div className="a">
                    

                    <h4>#ENCA</h4>
                    <h4>#RAp </h4> 
                    <h4>Mr Price</h4> 
                   

                </div>
                </div>     



                    <div className="widgets__widgetsContainer">
                <h2>Who to follow</h2>
                <div className="b">
                    

                    <h4>AKA </h4> 
                    <h4>TAU </h4> 
                    <h4>CLIVE</h4>
                   

                </div>
                </div> 
            
        </div>
    )
}

export default Widgets
