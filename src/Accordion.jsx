// import React, { useState } from "react";
// import { Question } from "./Api";

// const Accordion = ({Question,anwer})=>{
//   const [show ,setShow] = useState(false);

//   return(
//     <>
//     <div className="main-heading">
//       <p onClick={()=>setShow(!show)}>{show? "-":"+"}</p>
//    <h3>{Question}</h3>
//     {show && <p className="answer">{answer}</p>}
//     </div>
//     </>
//   )
// }


import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-title" onClick={onClick}>
      {title}
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;


