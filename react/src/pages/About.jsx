import { useOutletContext } from "react-router-dom";
import niafferp from "../assets/img/niafferp.png";
import niafferrpWebp from "../assets/img/niafferp.webp";
import naitonOopbp from "../assets/img/naiton-oopbp.png";
import naitonOopbpWebp from "../assets/img/naiton-oopbp.webp";
import odmwacpac from "../assets/img/odmwacpac.png";
import odmwacpacWebp from "../assets/img/odmwacpac.webp";
import nbswo from "../assets/img/nbswo.png";
import nbswoWebp from "../assets/img/nbswo.webp";

export default function About() {
  const { phoneNumber } = useOutletContext();
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
        <div className="flex lg-down:flex-wrap md:gap-x-6 lg-down:space-y-6">
          <div className="w-full lg:w-3/12">
            <h3>Naiton is a full-fledged ERP</h3>
          </div>

          <div className="w-full space-y-12 lg:w-9/12">
            <div className="space-y-3">
              <p>Comparable to Navision, SAP, Dynamics or Oracle, but it is cheaper, unprecedentedly flexible and very user-friendly. During thorough and detailed selection processes, Naiton often appears to be preferred over competitors such as these.</p>

              <p>The Naiton software platform contains virtually all business processes, housed in a large number of modules, combined into one whole. The projects that are carried out make use of this very broad base and are possibly expanded with functionalities that are necessary for the specific customer.</p>
            </div>

            <picture className="block">
              <source srcSet={`${niafferrpWebp} 2x, ${niafferrpWebp} 1x`} />
              <img src={niafferp} width="840" height="435" alt="comparable to navision, sap, dynamics or oracle, but its cheaper, unprecedently flexible and very user friendly" className="object-cover w-full" />
            </picture>
          </div>
        </div>

        <hr className="my-12 border-t" />

        <div className="flex lg-down:flex-wrap md:gap-x-6 lg-down:space-y-6">
          <div className="w-full lg:w-3/12">
            <h3>All our solutions can be fully used via the cloud</h3>
          </div>

          <div className="w-full space-y-12 lg:w-9/12">
            <div className="space-y-3">
              <p>In addition, all our solutions can be fully used via the cloud from home or mobile on a PC, Laptop, Tablet or Smart Phone.</p>

              <p>In this way we can offer complete ERP, WMS and TMS solutions, including CRM, HRM, orders, calculation, work preparation, inventory management, forecasting, financial modules, planning of people and vehicles, fully integrated e-commerce websites. , Planning tools and Fleet management solutions.</p>
            </div>

            <picture className="block">
              <source srcSet={`${naitonOopbpWebp} 2x, ${naitonOopbpWebp} 1x`} />
              <img src={naitonOopbp} width="1074" height="512" alt="in addition all our solutions can be fully used via the cloud from home or mobile on a pc, laptop or smart phone" className="object-cover w-full" />
            </picture>
          </div>
        </div>

        <hr className="my-12 border-t" />

        <div className="flex lg-down:flex-wrap md:gap-x-6 lg-down:space-y-6">
          <div className="w-full lg:w-3/12">
            <h3>One data model in which all customer processes are combined</h3>
          </div>

          <div className="w-full space-y-12 lg:w-9/12">
            <div className="space-y-3">
              <p>The ultimate goal is to create an environment with one data model in which all customer processes are combined, without all kinds of difficult connections. Users therefore no longer have to work with different software packages.</p>

              <p>This ensures optimal software integration of departments, meaning less time is lost on unnecessary communication. Your employees can now fully focus on the activities that actually contribute to the operating result.</p>
            </div>

            <picture className="block">
              <source srcSet={`${odmwacpacWebp} 2x, ${odmwacpacWebp} 1x`} />
              <img src={odmwacpac} width="840" height="402" alt="one data model in which all customer processes are combined" className="object-cover w-full" />
            </picture>

            <p>Naiton's software is now used by hundreds of customers, with thousands of users. No costs are charged for the software modules and no (monthly) license fees are charged. How is that possible? Ask us!</p>
          </div>
        </div>

        <hr className="mt-12 border-t" />

        <div className="relative before:content-[''] before:absolute before:w-full before:h-full md:before:h-1/2 before:left-0 before:top-0 before:bg-accent before:z-0 overflow-hidden">
          <div className="pt-12 relative space-y-12 bg-no-repeat bg-top nbswo-bg">
            <h2 className="text-white max-w-[80%] mx-auto">Would you like to get acquainted with Nation Business Suite without&nbsp;obligation?</h2>

            <div className="flex md-down:flex-col justify-center md:space-x-4 md-down:space-y-4">
              <a href={`tel:${phoneNumber}`} className="btn md-down:mx-auto bg-white">
                Request a demo
              </a>
              <a href={`tel:${phoneNumber}`} className="btn md-down:mx-auto bg-white">
                or call 020&nbsp;893&nbsp;2732
              </a>
            </div>

            <picture className="block">
              <source srcSet={`${nbswoWebp} 2x, ${nbswoWebp} 1x `} />
              <img src={nbswo} width="1070" height="856" alt="would you like to get acquainted with Nation Business Suite without obligation" className="w-full max-w-[80%] mx-auto object-cover" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}
