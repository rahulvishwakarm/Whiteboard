import React, { useState } from 'react'
import { tool_data } from '../../data/Tools'
import { ShareIcon, VerticalSplitIcon } from '../../Icons/Icons'
import Category from '../Category/Category';

export default function AppMenu() {
    return (
        <div className='flex justify-between'>

            {/* Category Dropdown*/}
            <Category />

            {/* Tools */}
            <div className='px-1 shadow flex inline-block border-2 rounded-lg toolStack'>
                {
                    tool_data.map((value, index) => {
                        const applyHoverColor = index === 1;
                            return (
                            < >
                                <div key={index} className={`m-0.5 p-2 rounded-lg ${applyHoverColor ? "bg-violet-100 text-violet-800" : "hover:bg-violet-100 hover:text-violet-800"} toolShape_icon`}>
                                    <value.icon fontSize='small'/>
                                    {
                                        ((index>1 &&  index<tool_data.length-1)) ? <sub style={{"fontSize":"11px"}}>{index-1}</sub> : ""
                                    }
                                </div>
                                {(index==tool_data.length - 2) || (index==0) ? (
                                    <div className="App-toolbar__divider"></div>
                                ) : <div></div>}
                            </>
                        )
                    })
                }
            </div>

            {/* Utils */}
            <button className="categoryBar mr-5 shadow border-2 rounded-lg p-2 rounded-lg hover:bg-violet-200 bg-violet-100 hover:text-violet-800 toolShape_icon" type="button">
                <ShareIcon />
            </button>

        </div>
    )
}
