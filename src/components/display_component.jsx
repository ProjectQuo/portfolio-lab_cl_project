import React from "react";

const DisplayComp = () => {
  console.log("DisplayComp");

  return (
    <>
      <div className="whom_display_1">
        <div className="display_1_text">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </div>
        <div className="display_row">
          <div className="display_col_1">
            <div className="display_name">Fundacja “Dbam o Zdrowie”</div>
            <div className="display_goal">
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej.
            </div>
          </div>
          <div className="display_col_2">
            ubrania, jedzenie, sprzęt AGD, meble, zabawki
          </div>
        </div>
        <div className="display_row">
          <div className="display_col_1">
            <div className="display_name">Fundacja “Dla dzieci”</div>
            <div className="display_goal">
              Cel i misja: Pomoc dzieciom z ubogich rodzin.
            </div>
          </div>
          <div className="display_col_2">ubrania, meble, zabawki</div>
        </div>
        <div className="display_row">
          <div className="display_col_1">
            <div className="display_name">Fundacja “Bez domu”</div>
            <div className="display_goal">
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </div>
          </div>
          <div className="display_col_2">ubrania, jedzenie, ciepłe koce</div>
        </div>
        <div className="page_numbers">
          <div className="page_number">1</div>
          <div className="page_number">2</div>
          <div className="page_number">3</div>
        </div>
      </div>
    </>
  );
};

export default DisplayComp;
