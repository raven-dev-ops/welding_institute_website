import { useState } from 'react';
import Layout from '@components/Layout';

const faqs = [
  {
    question: "Are there different types of welding?",
    answer:
      "Yes. Our welder training covers MIG Welding (GMAW), TIG Welding (GTAW), Stick Welding (SMAW), and Flux Cored Welding (FCAW). Contact us today for more information.",
  },
  {
    question: "Does CIWT offer different types of welding classes?",
    answer:
      "Yes! CIWT offers a hobby class, a master pipe welding program, and a structural and alloy welding program. See our website for more details.",
  },
  {
    question: "How much do these classes cost?",
    answer:
      "The hobby class is $295. The 6-month master pipe welding program costs $21,000. The 4-month structural and alloy welding program costs $15,750. Contact us to request a tour!",
  },
  {
    question: "What does the master welding program include?",
    answer:
      "The cost includes tuition, books, supplies, tools, and two AWS welding certifications. Our welder training is sure to get you career-ready.",
  },
  {
    question: "How do I pay for the master welding program? Do you offer financial aid?",
    answer:
      "We accept VA benefits and Vocational Rehabilitation through the state. We also have an in-house payment plan. However, we cannot accept federal financial aid such as Pell Grants.",
  },
  {
    question: "Are there any requirements to enroll in the master welding program?",
    answer:
      "Yes. You must have a high school diploma or GED equivalent and a solid understanding of basic math. Once you've met those prerequisites, we’ll be happy to welcome you.",
  },
  {
    question: "How many of your students get jobs after they graduate?",
    answer:
      "We have a 100% job placement rate for graduates who want to work after completing the program. Contact us today to request a free tour.",
  },
  {
    question: "How much money can I earn as a welder?",
    answer:
      "The average income for a welder is around $36,000/year. Entry-level jobs pay $20–$24/hr. Pipe welders and underwater welders can earn more but may travel. Welding engineers and researchers can earn $50,000–$100,000/year.",
  },
  {
    question: "What skills do you need to be a good welder?",
    answer:
      "Good vision, attention to detail, physical stamina, concentration, communication skills, and understanding safety procedures are all important.",
  },
  {
    question: "Is CIWT accredited?",
    answer:
      "Yes! We’re fully accredited by the state of Missouri. See our website to learn more about our welding school and admissions process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span className="ml-2 text-gray-500">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
