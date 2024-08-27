import React from 'react'
import AppMenu from '../AppMenu/AppMenu';

function Canvas() {
    return (
        <div className='canvas_name' style={{"marginTop":"10px"}}>
            <div className='canvas_menu '>
                <AppMenu />
            </div>
        </div>
    )
}

export default Canvas;