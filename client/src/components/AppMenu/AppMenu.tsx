import React from 'react'
import { tool_data } from '../data/Data'

export default function AppMenu() {
    return (
        <div className='flex justify-center'>
            {/* Tools */}
            <div className='px-1 shadow-lg flex inline-block border-2 rounded toolStack'>
                {
                    tool_data.map((value) => (
                        <div className='m-0.5 p-2 w-10 rounded hover:bg-violet-100 hover:text-violet-800 toolShape_icon'>
                            <value.icon fontSize='small'/>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
