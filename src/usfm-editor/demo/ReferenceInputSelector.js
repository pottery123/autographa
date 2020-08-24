import * as React from "react";
import { useMemo } from 'react';
import { RefFileSelector } from "./RefFileSelector"

export const ReferenceInputSelector = ({ onChange, demoUsfmStrings }) => useMemo(() => {

    const fileSelectorId = "Ref-input-file"

    const handleInputFileChange = (fileName, usfm) => {
        onChange(usfm)
    }

    return (
        <div>
            <div className="row">
                <div className="column">
                    <h2 className="demo-header">
                        Reference text selection
                    </h2>
                </div>
            </div>
            <div className="horizontal">
                <RefFileSelector 
                    id={fileSelectorId}
                    onChange={handleInputFileChange} 
                />
            </div>
        </div>
    )
}, [])