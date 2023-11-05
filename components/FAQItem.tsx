import React from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};
export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="col-span-1 flex flex-col gap-y-4">
      <span className="text-lg font-semibold">{question}</span>
      <p>{answer}</p>
    </div>
  );
};
