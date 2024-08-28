import React, { useEffect, useRef } from "react";
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform  } = useControls();

    return (
        <div className="tools">
            <button onClick={() => zoomOut()} className="border p-2 rounded shadow border-2 rounded-lg rounded-lg hover:bg-violet-200 bg-violet-100 hover:text-violet-800"><RemoveIcon fontSize="small"/></button>
            <button onClick={() => resetTransform()} className="border p-2 px-3 rounded shadow border-2 rounded-lg p-2 rounded-lg hover:bg-violet-200 bg-violet-50 hover:text-violet-800"> Reset </button>
            <button onClick={() => zoomIn()} className="border p-2 rounded shadow border-2 rounded-lg rounded-lg hover:bg-violet-200 bg-violet-100 hover:text-violet-800"><AddIcon fontSize="small"/></button>
        </div>
    );
};

const ZoomableContent = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const body = document.getElementById("canvasSpace");

        // Clone the content of the target element into the ref container
        if (contentRef.current && body) {
            contentRef.current.innerHTML = body.innerHTML;
        }
    }, []);

    return (
        <div ref={contentRef} />
    );
};

const Example = () => {
    return (
        <div className="Assets flex justify-between fixed bottom-0 w-full mb-2 bg-white">
            <div className="flex justify-between zoomInOutUndoRedo">
                {/* Zomm In Out */}
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={200}
                    initialPositionY={100}
                >
                    {({ zoomIn, zoomOut, resetTransform  }) => (
                        <>
                            <Controls />
                            <TransformComponent>
                                <ZoomableContent />
                            </TransformComponent>
                        </>
                    )}
                </TransformWrapper>

                {/* Undo Redo */}
                <div className="undoRedo">
                    <button className="ml-5 shadow border-1 rounded-lg p-2 rounded-lg hover:bg-violet-200 bg-violet-100 hover:text-violet-800 toolShape_icon">
                        <UndoIcon />
                    </button>
                    <button className="shadow border-1 rounded-lg p-2 rounded-lg hover:bg-violet-200 bg-violet-100 hover:text-violet-800 toolShape_icon">
                        <RedoIcon />
                    </button>
                </div>
            </div>
        
            {/* Encrypt Help */}
            <div className="flex encryptedHelp">
                <span className="cursor-pointer p-2 shadow hover:text-violet-800">
                    <EnhancedEncryptionIcon 
                        fontSize="small"
                    />
                </span>
                <button className="border p-2 ml-2 mr-10 rounded shadow border-2 rounded-lg rounded-lg hover:bg-violet-200 bg-violet-100 hover:text-violet-800">
                    <LiveHelpIcon fontSize="small" />   
                </button>
            </div>
        </div>
    );
};

export default Example;
