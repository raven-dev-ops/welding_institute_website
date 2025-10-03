import Page from "@layout/Page";
import Layout from "@layout/Layout";

export default function Policies() {
  const sections = [
    {
      header: "Learn More About Our Policies and Codes of Conduct",
      p: [
        {
          type: "text",
          text: "See below to learn more about our specific policies and codes of conduct at Crider's Institute of Welding Technology. We have been training welders for successful careers since 2015. Call us today to schedule a free tour of our facilities. Ask us about our payment options and flexible scheduling!",
        },
      ],
    },
    {
      header: "Our School Policies and Codes",
      p: [
        {
          type: "accordion",
          content: [
            {
              name: "Dress Code",
              description: {
                paragraphs: [
                  "Students are required to dress appropriately for the welding profession. No “tennis” or open-toed shoes are allowed. 100% cotton long pants, preferably jeans, and long sleeve heavy 100% cotton shirts, and leather boots are required. Absolutely no polyester clothing. Safety glasses shall be worn in the lab at all times.",
                  "Failure to adhere to the dress code will result in dismissal from class until the dress code is met. The student will not be allowed to make up work missed as a result of non-compliance with the dress code.",
                ],
              },
            },
            {
              name: "Grading",
              description: {
                paragraphs: [
                  "Grades will be calculated based on written tests, and hands-on tests. Grades will be calculated on the following percentages:",
                  "[li] 80% hands-on performance [li] 20% written tests",
                  "Grading scale for classroom work:",
                  "[li] 90-100%: A [li] 80-89%: B [li] 70-79%: C [li] 60-69%: D [li] 59% and below: F [li] Welding Work: Pass / Fail",
                  "While a D is a passing grade it will make it difficult for the student to pass the AWS certification test and would almost certainly affect a student’s employment potential.",
                  "A student with a grade of less than 70% will be placed on a 30-day probation. If student’s performance has not improved after 30 days, the student will receive counseling and be informed about their limited employment potential. This information shall be maintained in a student's permanent record.",
                ],
              },
            },
            {
              name: "Attendance Policy",
              description: {
                paragraphs: [
                  "Attendance is required in both classroom and lab work. No exception shall be made. Program requirements cannot be met without class attendance. When speaking to prospective employers, school officials are always asked for an attendance record. There is no substitute for class attendance.",
                  "Students must maintain an 80% attendance rate. Failure to do so will result in the student being placed on probation. The student will be given 30 days to bring their attendance up to 80%. Failure to do so will result in dismissal from the program.",
                  "Four instances of tardiness will count as one absence.",
                ],
              },
            },
            {
              name: "Leave of Absence",
              description: {
                paragraphs: [
                  "The student may request one leave of absence of no more than 180 days in his or her career at CIWT. The student must make arrangements for their leave of absence with the administrator and head instructor.",
                  "If the student fails to return at the arranged date, the student shall be dismissed and will not receive a refund of any tuition or fees. Reasons for leave of absence include but are not limited to medical, family care, and military obligations.",
                ],
              },
            },
            {
              name: "Facility",
              description: {
                paragraphs: [
                  "Our facility consists of 6,000 square feet, including the welding lab, classroom, offices, and break room. The welding lab consists of 12 booths each with a welding machine, stool and positioner. Each student will have their own booth.",
                  "Our equipment includes:",
                  "[li] 12 AC/DC Arc Welders SMAW/GTAW Combination including High Frequency[li] 12 GMAW/FCAW machines[li] 8 cutting torches[li] 2 pipe beveling machines[li] 1 plasma cutting torch[li] 1 ironworker[li] 1 Band saw",
                  "Our classrooms also have Powerpoint, a television, and a DVD player.",
                ],
              },
            },
            {
              name: "Student Conduct Policy",
              description: {
                paragraphs: [
                  "All students shall respect the rights of others including fellow students, faculty and staff. No manner of harassment shall be tolerated. All students shall comply with the laws of national, state, and local governments. Possession, manufacture, solicitation, sale, dispensation, or distribution of illicit drugs or alcohol is prohibited on school property or at school activities. The only exception being medication prescribed by a licensed physician. Violation of this policy shall be grounds for dismissal.",
                  "Crider’s Institute of Welding Technology reserves the right to require a drug test at any time. Lab rules will be followed at all times. Violation is grounds for dismissal.",
                ],
              },
            },
            {
              name: "Grievance Procedure",
              description: {
                paragraphs: [
                  "Any student with a grievance against CIWT may seek resolution by submitting grievance in writing to student's instructor or the head instructor. The school official shall address the grievance within two school days.",
                  "A student not satisfied with the outcome of the grievance resolution may appeal to the owner of CIWT. The owner shall have 10 days to respond to the appeal. If the student's appeal is denied, they have the option of contacting the Missouri Department of Higher Education to file a grievance against the school.",
                ],
              },
            },
            {
              name: "Withdrawal Policy",
              description: {
                paragraphs: [
                  "A student may cancel enrollment agreement up to three days after signing excluding Saturdays, Sundays, and holidays.",
                  "Students withdrawing during week one of classes will receive a 90% refund. Second week 80% refund to students. Third week 70% refund to students. Fourth week 60% refund to students. Fifth week 50% refund to students. Sixth week 40% refund to students. Seventh week 30% refund to students. Eighth week 20% refund to students. Ninth week 10% refund to students. After tenth week 0% refund to students.",
                  "An official withdrawal consists of a written statement stating the reason for withdrawal. If a minor student withdraws, the refund shall be sent to the guarantor.",
                  "There will be no refund for books or tools after classes start or if tools or books have been used.",
                  "For Welding for the Hobbyist courses, the student may cancel enrollment at any time within three days of signing the enrollment agreement, excluding Saturdays, Sundays, and holidays, and receive a full refund of all monies paid.",
                ],
              },
            },
            {
              name: "Transcript Issuance",
              description: {
                paragraphs: [
                  "Upon written request, the school will provide a student with one official transcript at no cost. Thereafter transcripts will be $10 each. The school will permanently maintain all student records.",
                ],
              },
            },
          ],
        },
      ],
    },
  ];

  const review = {
    comment:
      "I took the Tig course here starting December 4th and I couldn't ask for better teachers. Stan has worked in almost every industry and is very professional in approach and overall understanding, and Donna pushes each student to be their best. No favorites are played and you couldn't ask for better treatment. Never have I looked forward to coming to school every day but you learn and grow each time. It beats paying 15k for a 2 year-school and you won't get better hands-on experiences in a small class. They go above and beyond.",
    author: "Kyle Smith | Google Review",
  };

  return (
    <Layout
      pageTitle="CIWT Policies & Code of Conduct"
      bgImage="/images/ciwt_photos/6-2880w.jpg"
      header="School Policy and Conduct"
    >
      <Page sections={sections} review={review}></Page>
    </Layout>
  );
}
