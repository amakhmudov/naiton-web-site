import { Link } from "react-router";
import CTASection from "@/components/CTASection.jsx";
import SolutionSection from "@/components/SolutionSection.jsx";
import SuccessCaseSection from "@/components/SuccessCaseSection.jsx";

const sections = [
  {
    title: "CRM",
    subtitle: "Client Relation Management",
    Component: "CRMItems",
  },
  {
    title: "HRM",
    subtitle: "Human Resource Management",
    Component: "HRMItems",
  },
  {
    title: "WMS Module",
    subtitle: "Warehouse Management",
    Component: "WMSItems",
  },
  {
    title: "Licences",
    subtitle: "Updates, Livences and Modules",
    Component: "LicencesItems",
  },
];

export default function Solutions() {
  return (
    <>
      <div className="container">
        <div className="px-4 py-9 text-white bg-accent flex items-center justify-between">
          <p className="h2 text-white">Solutions</p>

          <ul className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Solutions</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="container pt-12 pb-6 md-down:text-center">
        {sections.slice(0, 2).map((section, index) => (
          <SolutionSection key={index} {...section} showDivider={index < sections.slice(2).length - 1} />
        ))}
      </section>

      <section className="container relative before:content-[''] before:absolute before:w-[calc(100%-2rem)] before:h-full before:top-0 before:bg-accent before:z-0 overflow-hidden">
        <SuccessCaseSection className="container pt-12 pb-6 md-down:text-center" />
      </section>

      <section className="container pt-12 pb-6 md-down:text-center">
        {sections.slice(2).map((section, index) => (
          <SolutionSection key={index + 2} {...section} showDivider={index < sections.slice(2).length - 1} />
        ))}
      </section>

      <section className="container pb-12">
        <CTASection title="Would you like to get acquainted with Nation Business Suite without obligation?" />
      </section>
    </>
  );
}
