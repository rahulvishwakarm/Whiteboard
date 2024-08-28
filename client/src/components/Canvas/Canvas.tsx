import React from 'react'
import AppMenu from '../AppMenu/AppMenu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { decrease, increase } from './CanvasSlice';
import { Button } from '@mui/material';
import ZoomInOutUndoRedo from '../ZoomInOutUndoRedo/ZoomInOutUndoRedo';

function Canvas() {
    const canvasvalue =  useSelector((state: RootState) => state.canvas.value);
    const dispatch = useDispatch();
    return (
        <div className='canvas_name' style={{"marginTop":"10px"}}>
            <div className='canvas_menu '>
                <AppMenu />
                <div id='canvasSpace'></div>
                {/* <div className='absolute bottom-0 left-0 ml-5 mb-2'> */}
                <div className='ml-5'>
                    <ZoomInOutUndoRedo />   
                </div>
            </div>
        </div>
    )
}

export default Canvas;