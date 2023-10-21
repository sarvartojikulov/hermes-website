import React from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};
export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="col-span-1 flex flex-col gap-y-4">
      <h4 className="font-semibold text-lg">{question}</h4>
      <p>{answer}</p>
    </div>
  );
};
