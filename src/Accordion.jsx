import React, { useState } from "react";

const Accordion = ({items}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p>
      </div>
      {show && <div className="main-div">
        
        {
          items.map((item, idx) => (
            <div className="">
            <h3>{item.question}</h3>
            <p key={idx}>{item.answer}</p>
            </div>
          ))
        }
      </div> }
    </>
  )
}

export default Accordion;