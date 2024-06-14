// import React, { useState } from 'react';

// const AccordionItem = ({ title, content, isOpen, onClick }) => (
//   <div className="accordion-item">
//     <div className="accordion-title" onClick={onClick}>
//       <span>{isOpen ? '-' : '+'}</span>
//       {title}
//     </div>
//     {isOpen && <div className="accordion-content">{content}</div>}
//   </div>
// );

// const Accordion = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleItemClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion">
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           title={<h2>{item.question}</h2>}
//           content={item.answer}
//           isOpen={openIndex === index}
//           onClick={() => handleItemClick(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Accordion;



import React, { useState } from "react";

const Accordion = ({Question,answer})=>{
  const [show,setShow] = useState(false);
console.log(Question)
  return(
  <>
  <div className="main-heading">
    <p onClick={()=>setShow(!show)}>{show?"-":"+"}</p>
    {/* <h3>{Question}</h3> */}
   
  </div>
  {show && <p className="answer">{answer}</p>}
  </>
  )
}

export default Accordion

