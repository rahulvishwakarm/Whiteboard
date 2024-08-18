import React from 'react'
import AppMenu from '../AppMenu/AppMenu';

function Canvas() {
    return (
        <div className='canvas_name'>
            <h4>Main Canvas</h4>
            <div className='canvas_menu'>
                <AppMenu />
            </div>
        </div>
    )
}

export default Canvas;