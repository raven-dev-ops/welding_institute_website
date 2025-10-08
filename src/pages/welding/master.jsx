import { CTAButton } from "@components";
import Accordion from "@components/Accordion";
import Typography from "@components/Typography";
import Layout from "@layout/Layout";
import Link from "next/link";
import Image from "next/image";

export default function MasterWelding() {
  const courses = [
    {
      name: "OFAC-101 - Oxy-fuel and Arc Cutting - 16 hours",
      description: {
        paragraphs: [
          "Course Description: Students will learn the proper procedures for set up, shut down and proper use of the oxy-fuel, carbon arc, and plasma cutting equipment.",
        ],
        objectives: [
          "Perform safety inspections of equipment and accessories. ",
          "Set up for manual oxy-fuel gas cutting operations on plain carbon steel. ",
          "Operate manual oxy-fuel gas cutting equipment.",
          "Perform straight, shape and bevel cutting using a hand torch. ",
          "Perform metal removal operations on plain carbon steel using carbon arc cutting process.",
          "Perform shape cutting operations on plain carbon steel, aluminum and stainless steel using the Plasma cutting process. ",
          ,
        ],
      },
    },
    {
      name: "SMAW-101 - Shielded metal Arc Welding (SMAW) Basic - 60 hours",
      description: {
        paragraphs: [
          "Course Description: Layout procedures for metal fabrication and cutting. Measurement and preparation of structural steel, welding set-up, leveling, and aligning for project fabrication. Study orthographic projection. ",
        ],
        objectives: [
          "Demonstrate and perform construction of 90-degree bends.  ",
          "Demonstrate and perform construction of 45-degree bends.",
          "Interpret basic blueprints and Weld symbols. ",
          "Layout and learn how to do flange alignment. ",
        ],
      },
    },
    {
      name: "SMAW-201 - Shielded metal Arc Welding (SMAW) Advanced - 70 hours",
      description: {
        paragraphs: [
          "Course Description: Student will develop an awareness of arc welding safety and the shielded metal arc welding (SMAW) process. This includes acquiring the knowledge of power sources and polarities, principles of operation, welding techniques, electrode identification and use, code welding and maintenance of SMAW equipment. ",
        ],
        objectives: [
          "Describe and demonstrate arc welding safety issues as they apply to Shielded Metal Arc Welding. ",
          "Differentiate between DCEP and DCEN and describe the difference in current flow.",
          "Demonstrate the ability to select the electrode, current, and polarity to use while SMAW in a given welding position. ",
          "Demonstrate the ability to perform acceptable fillet welds in four (4) positions using E-6010 and E-7018 electrodes. ",
        ],
      },
    },
    {
      name: "GTAW-102 - Gas Tungsten Arc Welding (GTAW) Basic - 60 hours",
      description: {
        paragraphs: [
          "Course Description: Student will develop skills using the theory and techniques associated with advanced Shielded Metal Arc Welding processes. This will include groove welds in all positions on mild steel plates of E-6010 and E-7018 electrodes.",
        ],
        objectives: [
          "Demonstrate arc welding safety as applied to advanced SMAW welding. ",
          "Select correct welding polarities for given tasks. ",
          "Execute corrective actions to identify and repair weld defects. Use correct SMAW filler metals for carbon steel. ",
          "Select correct polarities for given tasks. ",
          "Use correct SMAW filler metals for carbon steel. ",
          "Perform groove welds on carbon steel plate. ",
          "Perform single V-groove welds on 3/8 carbon steel plate. ",
          "Layout and cut plates then perform bend test to AWS D1.1 structural code. ",
        ],
      },
    },
    {
      name: "PIPE -201 - Pipe Welding - 220 hours",
      description: {
        paragraphs: [
          "Course Description: Student will develop an awareness of arc welding safety and the gas tungsten arc welding (GTAW) processes. This includes acquiring the knowledge of power sources and polarities and principles of operation, welding techniques, electrode identification and use, filler metal identification and maintenance of GTAW equipment and accessories.",
        ],
        objectives: [
          "Setup and troubleshoot GTAW equipment and accessories. ",
          "Set up for GTAW operations on a plain carbon steel plate. ",
          "Perform fillet welds, all positions, on a carbon steel plate. ",
          "Perform groove welds on a carbon steel plate. ",
        ],
      },
    },
    {
      name: "GTAW-201 - Gas Tungsten Arc Welding (GTAW) Advanced - 60 hours",
      description: {
        paragraphs: [
          "Course Description: Student will develop an awareness of arc welding safety and the gas metal arc welding (GMAW) processes. This includes acquiring the knowledge of power sources and polarities, principles of operation, welding techniques, modes of filler metal transfer and filler metal identification.",
        ],
        objectives: [
          "Demonstrate arc welding safety issues as they apply to GMAW welding. ",
          "Describe and use constant voltage power sources. Identify and select correct welding polarities for given tasks. ",
          "Describe the various modes of filler metal transfer. ",
          "Determine the correct GMAW filler materials for various carbon steel application.",
          "Perform various GMAW welding techniques. ",
          "Select the proper arc welding machine, wire feeder, shielding gas, flow rate, contact tube size, nozzle size and electrode wire type to produce acceptable GMAW welds. ",
          "Properly assemble and adjust all the equipment required to produce an acceptable GMAW weld. ",
        ],
      },
    },
    {
      name: "GMAW-101 - Gas Metal Arc Welding (GMAW) - 42 hours",
      description: {
        paragraphs: [
          "Course Description: Student will develop the skills of welding safety and gas tungsten arc welding (GTAW) processes. This includes applying the knowledge of power sources, polarities, principles of operation, welding techniques, electrode identification, filler metal identification and use, and maintenance of GTAW equipment and accessories. Student will also learn to perform fillet and groove welds on stainless steel and aluminum thin gauge sheet metal.",
        ],
        objectives: [
          "Contrast the effects of DCEN, DCEP, and AC on surface cleaning efficiency, electrode life, and weld characteristics. ",
          "Select the proper welding power source, polarity, shielding gas, flow rate, tungsten electrode type and diameter, nozzle size, and filler metal required to produce an acceptable GTA weld. ",
          "Properly assemble and adjust all the variables required to produce an acceptable GTA weld. ",
          "Correctly prepare a tungsten electrode for welding with AC or DC. ",
          "Correctly prepare metals for welding and perform acceptable welds on all types of joints in all positions. ",
          "Identify the potential safety hazards involved when using the GTAW process in a working environment and describe ways of safely dealing with these hazards. ",
          "Demonstrate proper purging techniques on stainless steel and aluminum. ",
          "Make minor repairs to GTAW equipment and accessories. ",
        ],
      },
    },
    {
      name: "FCAW-101 - Flux Core Arc Welding (FCAW) - 30 hours",
      description: {
        paragraphs: [
          "Course Description: Student will develop skills using the theory and techniques of flux cored arc welding, both self-shielded and gas-shielded. This will include fillet welds and groove welds in all positions on carbon steel plates. The student will also identify and initiate recommended repairs for given weld defects. ",
        ],
        objectives: [
          "Demonstrate arc welding safety issues as they apply to FCAW-S welding. ",
          "Select correct welding polarities for given tasks. ",
          "Execute corrective actions to repair weld defects. Apply FCAW principles of operation on carbon steel plate. ",
          "Select and use the correct FCAW filler metals for various carbon steel applications. ",
        ],
      },
    },
    {
      name: "FLBR-101 - Fabrication Layout and Blueprint Reading - 42 hours",
      description: {
        paragraphs: [
          "Course Description: Designed to instruct welders in arc welding safety and the Shielded Metal Arc Welding process (SMAW) and Gas Tungsten Arc Welding (GTAW) of welding pipe to meet ASME (vertical up) or API (vertical down) welding codes. ",
        ],
        objectives: [
          "Demonstrate the ability to explain the system that is used to denote the strengths of pipe. ",
          "Demonstrate the ability to explain the importance of the root face and root gap for weld penetration. ",
          "Demonstrate the ability to prepare a single V-groove pipe for boiler code (ASME) Section IX and Pipeline code API-1104. ",
          "Demonstrate the ability to make a weld on a pipe in the vertical fixed position. (2G) ",
          "Demonstrate the ability to make a weld on a pipe in the horizontal fixed position. (5G) ",
          "Demonstrate the ability to make a weld on a pipe in the inclined position. (6G) ",
          "Demonstrate the ability to make a uniform weld to the specified standard on a 6G inclined positioned pipe using E6010 or ER-70S Tig rod for the root pass and E-7018 electrode for the filler and cover pass. ",
        ],
      },
    },
  ];
  return (
    <Layout
      pageTitle="CIWT Master Welder Program"
      bgImage="/images/ciwt_photos/2-1920w.jpg"
    >
      <div className="px-[40px] py-[30px]">
        <div className="flex flex-row max-w-[960px] w-full m-auto items-start">
          <div className="basis-2/3">
            <div className="max-w-full mx-auto flex flex-col gap-5">
              <div>
                <Typography level="h2">
                  Become a Master Welder in Four to Six Months With Our Classes
                </Typography>
                <div className="py-[2px] max-w-[586px] my-[8px] leading-[1.5] flex flex-col gap-[30px] ">
                  <Typography level="p">
                    Start your new career in welding with Crider&apos;s
                    Institute of Welding Technology and our welding programs.
                    During our 16 to 24-week courses, you&apos;ll develop the
                    necessary skills to become a certified welder. We look
                    forward to helping you advance your career and become a
                    great asset to any company you choose. As the leading
                    provider of welding classes in Columbia, MO and throughout
                    the Kansas City metropolitan area, Crider&apos;s Institute
                    of Welding Technology is the wisest place to begin or
                    advance your career in welding. We look forward to revealing
                    all the possibilities and potential within you! Let&apos;s
                    get started today.
                  </Typography>
                  <Typography level="p">
                    We currently offer two welding programs:
                  </Typography>
                  <Typography level="p">
                    Our Master Pipe Welding Program involves 600 hours of
                    classroom and hands-on training and includes two
                    certification tests. Tuition is $21,000 and includes tools,
                    gear, materials, supplies, and books. Classes are 25 hours a
                    week over 24 weeks.
                  </Typography>
                  <Typography level="p">
                    For students who do not wish to study pipe welding, we also
                    offer a shorter Structural and Alloy Welding Program which
                    omits course PIPE-201. It involves 400 hours of classroom
                    and hands-on training and includes two certification tests.
                    Tuition is $15,750 and includes tools, gear, materials,
                    supplies, and books. Classes are 25 hours a week over 16
                    weeks.
                  </Typography>
                  <Typography level="p">
                    Crider&apos;s Institute of Welding Technology offers the most
                    esteemed and valuable welder training in Springfield, MO and
                    throughout the Kansas City metropolitan area. Since 2015,
                    we&apos;ve served as the most reputable and distinguished welding
                    school in the community. When you visit us or enroll in a
                    course, you&apos;ll quickly see why that&apos;s the case. Contact us
                    today to learn more.
                  </Typography>
                </div>
              </div>

              <div>
                <Typography level="h2">
                  Master Pipe welding Class Schedule and Curriculum
                </Typography>
                <div className="py-[2px] max-w-[586px] my-[8px] leading-[1.5] flex flex-col gap-[30px] ">
                  <Typography level="p">
                    CIWT classes are Monday through Friday. The first shift
                    classes are 7:00 AM to 12:00 PM. Second shift is 12:00 PM to
                    5:00 PM. The third shift is 5:00 PM to 10:00 PM.
                  </Typography>
                  <Typography level="p">Our curriculum:</Typography>
                  <ul className="list-disc list-inside pl-[30px] indent-6.5">
                    {courses.map((course, idx) => {
                      return (
                        <li key={`course-${idx}`}>
                          <Typography level="p">{course.name}</Typography>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div>
                <Typography level="h2">
                  Course Descriptions and Objectives
                </Typography>
                <div className="py-[2px] max-w-[586px] my-[8px] leading-[1.5] flex flex-col gap-[30px] ">
                  <Accordion data={courses} />
                </div>
              </div>

              <div>
                <Typography level="h2">Other Programs Offered</Typography>
                <div className="py-[2px] max-w-[586px] my-[8px] leading-[1.5] flex flex-col  ">
                  <Typography level="p">
                    <b>Welding for the Hobbyist</b>
                  </Typography>
                  <Typography level="p">Length of course: 8 hours</Typography>
                  <Typography level="p">Tuition - $285.00</Typography>
                  <Typography level="p">
                    <Link href="/welding/hobby" className="text-red-500">
                      Click here for more information
                    </Link>
                  </Typography>
                </div>
              </div>

              <div>
                <Typography level="h2">
                  Employment Assistance and Housing
                </Typography>
                <div className="py-[2px] max-w-[586px] my-[8px] leading-[1.5] flex flex-col gap-[30px] ">
                  <Typography level="p">
                    Classroom work includes training on job search, resume
                    writing, and interviewing. The school maintains a
                    relationship with local employers and will assist students
                    in finding employment throughout their welding career.
                  </Typography>
                  <Typography level="p">
                    The administrator and staff will be happy to help students
                    find housing within commuting distance of the school.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3 pl-[1.5%]">
            <div className="h-[250px] mt-[8px] text-start">
              <div className="bg-[rgba(16,23,78,1)] border-solid pt-[20px] pb-[10px] ">
                <center>
                  <div className="w-[239px] h-[80px]">
                    <Image
                      src="/images/web_art/map-pin.svg"
                      height={80}
                      width={80}
                      alt=""
                    />
                  </div>
                  <div className="text-[36px] font-[Staatliches] leading-[28px] mt-[10px] my-[1em] text-[#fff]">
                    Free tours
                  </div>
                  <Typography level="p">
                    <span className="text-white my-[1em]">
                      Call us today for more information
                    </span>
                  </Typography>
                  <div className="my-[1em]">
                    <CTAButton href="tel:8169924046" size="md" variant="text">
                      <div>(816) 992-4046</div>
                    </CTAButton>
                  </div>
                </center>
              </div>
              <div className="bg-cta pt-[20px] pb-[10px] px-[20px]">
                <center>
                  <div className="w-[80px] h-[55px]">
                    <Image
                      src="/images/web_art/message.svg"
                      height={55}
                      width={80}
                      alt=""
                    />
                  </div>
                  <div className="mt-[25px] text-[16px] italic text-white my-[1em]">
                    I absolutely loved going to school here. Learned a lot in a
                    quick and easy manner. Everyone, there is very friendly and
                    never had a problem asking any questions that came to mind,
                    whether it be welding or just questions about jobs and the
                    future. I definitely recommend this school to someone who
                    wants to learn how to weld!
                  </div>
                  <div className="text-[14px] italic text-white my-[1em]">
                    - Sam W. | Google Review
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
