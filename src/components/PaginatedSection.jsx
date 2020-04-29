import React, { useState } from "react";
import { Element } from 'react-scroll';
import DisplayComp from "./DisplayComponent";

const PaginatedSection = () => {
    const containers = {
        fundations: {desc: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.'},
        organizations: {},
        local: {}
    }
    const [currentContainer, setCurrentContainer] = useState(containers.fundations);
    const handleClick = key => setCurrentContainer(containers[key]);

    return (
        <Element name="paginatedSection">
            <div className="whom_container">
                <div className="whom_header">Komu pomagamy?</div>
                <div className="whom_decor"></div>
                <div className="whom_select">
                    {/* a => ChooseButton({key, value, onClick={handleClick}}) zrobić pętle i podłączyć komponent */}
                    <a href="/" className="select_fundations selected">Fundacjom</a>
                    <a href="/" className="select_organizations selected">Organizacjom pozarządowym</a>
                    <a href="/" className="select_locals selected">Lokalnym zbiórkom</a>
                </div>
                <div className="display_1_text">
                    {currentContainer.desc}
                    
                </div>
                {/* ListWithPagination */}
                <DisplayComp/>                
            </div>
        </Element>
    )
}

export default PaginatedSection;