import React from 'react'
import './widgetzOption.css';

function WidgetzOption({active,text, Icon, topic}) {
    return (
        <div className={`widgetzOption ${active && 'widgetzOption--active'}`}>
  <h2>{text}</h2>
           <Icon />
         <h2> {topic}</h2>

        </div>
    )
}

export default WidgetzOption
