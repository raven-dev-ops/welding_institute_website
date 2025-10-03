import { Page, Layout } from "@layout";
import { useState } from "react";

const sections = [
  {
    header: "Learn more about Crider's Institute of Welding Technology",
    p: [
      {
        type: "text",
        text: "Have a welding-related question? We have the answer! Check out our FAQs below to learn more about our company and services.",
      },
    ],
  },
  {
    header: "",
    p: [
      {
        type: "accordion",
        content: [
          {
            name: "Are there different types of welding?",
            description: {
              paragraphs: [
                "Yes. Our welder training covers MIG Welding (GMAW), TIG Welding (GTAW), Stick Welding (SMAW), and Flux Cored Welding (FCAW). Contact us today for more information.",
              ],
            },
          },
          {
            name: "Does CIWT offer different types of welding classes?",
            description: {
              paragraphs: [
                "Yes! CIWT offers a hobby class, a master pipe welding program, and a structural and alloy welding program. See our website for more details.",
              ],
            },
          },
          {
            name: "How much do these classes cost?",
            description: {
              paragraphs: [
                "The hobby class is $295. The 6-month master pipe welding program costs $21,000. The 4-month structural and alloy welding program costs $15,750. Contact us to request a tour!",
              ],
            },
          },
          {
            name: "What does the master welding program include?",
            description: {
              paragraphs: [
                "The cost includes tuition, books, supplies, tools, and two AWS welding certifications. Our welder training is sure to get you career-ready.",
              ],
            },
          },
          {
            name: "How do I pay for the master welding program? Do you offer financial aid?",
            description: {
              paragraphs: [
                "We accept VA benefits and Vocational Rehabilitation through the state. We also have an in-house payment plan. However, we cannot accept federal financial aid such as Pell Grants.",
              ],
            },
          },
          {
            name: "Are there any requirements to enroll in the master welding program?",
            description: {
              paragraphs: [
                "Yes. You must have a high school diploma or GED equivalent and a solid understanding of basic math. Once you've met those prerequisites, we'll be happy to welcome you.",
              ],
            },
          },
          {
            name: "How many of your students get jobs after they graduate?",
            description: {
              paragraphs: [
                "We have a 100% job placement rate for graduates who want to work after completing the program. Contact us today to request a free tour.",
              ],
            },
          },
          {
            name: "How much money can I earn as a welder?",
            description: {
              paragraphs: [
                "The average income for a welder is around $36,000/year. Entry-level jobs pay $20–$24/hr. Pipe welders and underwater welders can earn more but may travel. Welding engineers and researchers can earn $50,000–$100,000/year.",
              ],
            },
          },
          {
            name: "What skills do you need to be a good welder?",
            description: {
              paragraphs: [
                "Good vision, attention to detail, physical stamina, concentration, communication skills, and understanding safety procedures are all important.",
              ],
            },
          },
          {
            name: "Is CIWT accredited?",
            description: {
              paragraphs: [
                "Yes! We’re fully accredited by the state of Missouri. See our website to learn more about our welding school and admissions process.",
              ],
            },
          },
        ],
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout
      pageTitle="CIWT Frequently Asked Questions"
      header="Crider's Institute of Welding Technology FAQs"
      bgImage="/images/stock_photos/RSshutterstock_300760469-2880w.jpg"
      showVideo={false}
    >
      <Page withCallout={false} sections={sections}></Page>
    </Layout>
  );
}
