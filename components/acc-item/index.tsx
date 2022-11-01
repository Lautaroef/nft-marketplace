import styles from "./accordion.module.sass";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AccordionItem({ faq }: { faq: { question: string; answer: string } }) {
  const [close, setClose] = useState<boolean>(true);

  return (
    <div className={`${styles.accordion_item} ${!close && styles.open}`}>
      <button
        className={`${close && "collapsed"} accordion-button ${styles.accordion_button}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded={close}
        aria-controls="panelsStayOpen-collapseOne"
        onClick={() => setClose(!close)}
      >
        <span>{faq?.question}</span>
        {close ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </button>
      <div
        id="panelsStayOpen-collapseOne"
        className={`accordion-collapse ${close && "collapse"} `}
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className={`accordion-body ${styles.accordion_body}`}>{faq?.answer}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
