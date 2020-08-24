import * as React from "react";
import { UsfmEditor } from "../components/UsfmEditor";
import { ReferenceInputSelector } from "./ReferenceInputSelector";
import { usfmToSlate } from "../transforms/usfmToSlate.js";
import { slateToUsfm } from "../transforms/slateToUsfm.ts";
import { IdentificationSetter } from "./IdentificationSetter";
import "./demo.css";

function transformToOutput(usfm) {
    return slateToUsfm(usfmToSlate(usfm))
}

export default class ReferenceDemo extends React.Component {
    constructor(props) {
        super(props);
        // Get the first usfm string in the dropdown menu
        const initialUsfm = props.usfmStrings.values().next().value
        this.state = {
            usfmInput: initialUsfm,
            usfmOutput: transformToOutput(initialUsfm),
            showInputUsfm: false,
            readOnly: true
        };
        this.handleInputChange =
            input => this.setState(
                { 
                    usfmInput: input,
                    usfmOutput: transformToOutput(input),
                    identification: null
                }
            );
        this.handleEditorChange = (usfm) => this.setState({ usfmOutput: usfm });
        this.handleShowInputChange = () => {
            this.setState({ showInputUsfm: !this.state.showInputUsfm});
        }
        this.handleReadOnlyChange = () => {
            this.setState({ readOnly: !this.state.readOnly});
        }
        this.onIdentificationChange = (id) => {
            if (typeof id == "string") {
                id = JSON.parse(id)
            }
            this.setState({ identification: id })
        }
    }

    render() {
        return (
            <div>
                <div className={ this.state.showInputUsfm ? "" : "row" }>
                    <div className="column column-left">
                        <ReferenceInputSelector 
                            onChange={this.handleInputChange} 
                            demoUsfmStrings={this.props.usfmStrings}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column column-left">
                        <IdentificationSetter 
                            idJson={JSON.stringify(this.state.identification)} 
                            onChange={this.onIdentificationChange} />
                        <UsfmEditor
                            usfmString={this.state.usfmInput}
                            key={this.state.usfmInput}
                            onChange={this.handleEditorChange}
                            readOnly={true}
                            identification={this.state.identification}
                            onIdentificationChange={this.onIdentificationChange}
                        />
                    </div>
                    {/* <div className="column column-right">
                        {
                            this.state.showInputUsfm ||
                                <OutputUsfm usfm={this.state.usfmOutput} />
                        }
                    </div> */}
                </div>
            </div>
        )
    }
}