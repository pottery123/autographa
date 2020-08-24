import * as React from "react";
import { useMemo } from 'react';
import { FileSelector } from "./FileSelector"

export const InputSelector = ({ onChange, demoUsfmStrings }) => useMemo(() => {

    const fileSelectorId = "input-file"

    const handleInputFileChange = (fileName, usfm) => {
        onChange(usfm)
    }

    return (
        <div>
            <div className="row">
                <div className="column">
                    <h2 className="demo-header">
                        Translation text selection
                    </h2>
                </div>
            </div>
            <div className="horizontal">
                <FileSelector 
                    id={fileSelectorId}
                    onChange={handleInputFileChange} 
                />
            </div>
        </div>
    )
}, [])