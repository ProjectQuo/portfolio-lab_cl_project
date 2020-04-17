import React from "react";
import DisplayComp from "./display_component";

const WhomToHelp = () => {
    console.log('WhomToHelp');

    return (
        <>
            <div className="whom_container">
                <div className="whom_header">Komu pomagamy?</div>
                <div className="whom_decor"></div>
                <div className="whom_select">
                    <a href="/" className="select_fundations selected">Fundacjom</a>
                    <a href="/" className="select_organizations selected">Organizacjom pozarządowym</a>
                    <a href="/" className="select_locals selected">Lokalnym zbiórkom</a>
                </div>
                <DisplayComp/>                
            </div>
        </>
    )
}

export default WhomToHelp;