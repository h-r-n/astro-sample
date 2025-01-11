function Faq({ q, a }) {
  return (
    <>
      <dt className="question">{q}</dt>
      <dd className="answer">{a}</dd>
    </>
  );
}

export default Faq;
