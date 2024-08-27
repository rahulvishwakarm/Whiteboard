import React from 'react'
import AppMenu from '../AppMenu/AppMenu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { decrease, increase } from './CanvasSlice';
import { Button } from '@mui/material';

function Canvas() {
    const canvasvalue =  useSelector((state: RootState) => state.canvas.value);
    const dispatch = useDispatch();
    return (
        <div className='canvas_name' style={{"marginTop":"10px"}}>
            <div className='canvas_menu '>
                <AppMenu />
                <h1>{canvasvalue}</h1>
                <Button onClick={() => dispatch(increase())} >Increase</Button>
                <Button onClick={() => dispatch(decrease())} >Decrease</Button>
            </div>
        </div>
    )
}

export default Canvas;