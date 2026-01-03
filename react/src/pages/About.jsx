import { useOutletContext } from "react-router-dom";
import ContentSection from "@/components/ContentSection.jsx";
import CTASection from "@/components/CTASection.jsx";
import niafferp from "@/assets/img/niafferp.png";
import niafferrpWebp from "@/assets/img/niafferp.webp";
import naitonOopbp from "@/assets/img/naiton-oopbp.png";
import naitonOopbpWebp from "@/assets/img/naiton-oopbp.webp";
import odmwacpac from "@/assets/img/odmwacpac.png";
import odmwacpacWebp from "@/assets/img/odmwacpac.webp";

export default function About() {
  const { phoneNumber } = useOutletContext();
  const sections = [
    {
      title: "Naiton is a full-fledged ERP",
      paragraphs: ["Comparable to Navision, SAP, Dynamics or Oracle, but it is cheaper, unprecedentedly flexible and very user-friendly. During thorough and detailed selection processes, Naiton often appears to be preferred over competitors such as these.", "The Naiton software platform contains virtually all business processes, housed in a large number of modules, combined into one whole. The projects that are carried out make use of this very broad base and are possibly expanded with functionalities that are necessary for the specific customer."],
      image: {
        png: niafferp,
        webp: niafferrpWebp,
        width: 840,
        height: 435,
      },
      imageAlt: "comparable to navision, sap, dynamics or oracle, but its cheaper, unprecedently flexible and very user friendly",
    },
    {
      title: "All our solutions can be fully used via the cloud",
      paragraphs: ["In addition, all our solutions can be fully used via the cloud from home or mobile on a PC, Laptop, Tablet or Smart Phone.", "In this way we can offer complete ERP, WMS and TMS solutions, including CRM, HRM, orders, calculation, work preparation, inventory management, forecasting, financial modules, planning of people and vehicles, fully integrated e-commerce websites, Planning tools and Fleet management solutions."],
      image: {
        png: naitonOopbp,
        webp: naitonOopbpWebp,
        width: 1074,
        height: 512,
      },
      imageAlt: "in addition all our solutions can be fully used via the cloud from home or mobile on a pc, laptop or smart phone",
    },
    {
      title: "One data model in which all customer processes are combined",
      paragraphs: ["The ultimate goal is to create an environment with one data model in which all customer processes are combined, without all kinds of difficult connections. Users therefore no longer have to work with different software packages.", "This ensures optimal software integration of departments, meaning less time is lost on unnecessary communication. Your employees can now fully focus on the activities that actually contribute to the operating result."],
      image: {
        png: odmwacpac,
        webp: odmwacpacWebp,
        width: 840,
        height: 402,
      },
      imageAlt: "one data model in which all customer processes are combined",
    },
  ];

  return (
    <>
      <div className="container flex items-center justify-between text-white py-9 bg-accent">
        <p className="text-white h2">About Naiton</p>

        <ul className="breadcrumbs">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span>About Naiton</span>
          </li>
        </ul>
      </div>

      <section className="container py-12 md-down:text-center">
        {sections.map((section, index) => (
          <ContentSection key={index} {...section} />
        ))}

        <div className="flex lg-down:flex-wrap md:gap-x-6 lg-down:space-y-6">
          <div className="w-full lg:w-3/12"></div>
          <div className="w-full space-y-12 lg:w-9/12">
            <p>Naiton's software is now used by hundreds of customers, with thousands of users. No costs are charged for the software modules and no (monthly) license fees are charged. How is that possible? Ask us!</p>
          </div>
        </div>

        <hr className="mt-12 border-t" />

        <CTASection phoneNumber={phoneNumber} title="Would you like to get acquainted with Nation Business Suite without obligation?" />
      </section>
    </>
  );
}
