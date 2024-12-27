import React, { useState } from "react";
import { faq } from "../../../../Util/faq";
import "./Faq.css";

export const Faq = () => {
  return (
    <div className="faqs">
      <h1>Frequently Asked Questions:</h1>
      {faq.map((item) => (
        <div className="faq" key={item.id}>
          <div className="faqQuestion">{item.question}</div>
          <div className="faqAnswer">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

//   const [showAnswers, setShowAnswers] = useState({});

//   const toggleAnswer = (id) => {
//     setShowAnswers((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <div className="faq">
//         <h2>Frequently Asked</h2>
//         <div className="faqs">
//       {faq.map((item) => (
//         <div
//           className="faqItem"
//           key={item.id}
//           onClick={() => toggleAnswer(item.id)}
//         >
//           <div className="faqQuestion">
//             <h2>{item.question}</h2>
//           </div>
//           {showAnswers[item.id] ? (
//             <div className="faqAnswer">
//               <p>{item.answer}</p>
//             </div>
//           ) : null}
//         </div>
//       ))}
//       </div>
//     </div>
//   );
