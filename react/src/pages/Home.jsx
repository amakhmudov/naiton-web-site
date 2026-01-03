import { useOutletContext } from "react-router-dom";
import CTASection from "@/components/CTASection.jsx";
import ProjectsSwiper from "@/components/ProjectsSwiper.jsx";
// Clients images
import clientGpsBuddy from "@/assets/img/clients/gps-buddy.svg";
import clientKitemana from "@/assets/img/clients/kitemana.svg";
import clientVandijk from "@/assets/img/clients/vandijk.png";
import clientEnergielive from "@/assets/img/clients/energielive.svg";
// Kitemana project images
import kitemanaWebp2x from "@/assets/img/projects/kitemana/kitemana@2x.webp";
import kitemanaWebp from "@/assets/img/projects/kitemana/kitemana.webp";
import kitemanaMobileWebp2x from "@/assets/img/projects/kitemana/kitemana-mobile@2x.webp";
import kitemanaMobileWebp from "@/assets/img/projects/kitemana/kitemana-mobile.webp";
import kitemana2x from "@/assets/img/projects/kitemana/kitemana@2x.jpg";
import kitemana from "@/assets/img/projects/kitemana/kitemana.jpg";
import kitemanaMobile2x from "@/assets/img/projects/kitemana/kitemana-mobile@2x.jpg";
import kitemanaMobile from "@/assets/img/projects/kitemana/kitemana-mobile.jpg";
// GPS Buddy project images
import gpsBuddyWebp2x from "@/assets/img/projects/gps-buddy/gps-buddy@2x.webp";
import gpsBuddyWebp from "@/assets/img/projects/gps-buddy/gps-buddy.webp";
import gpsBuddyMobileWebp2x from "@/assets/img/projects/gps-buddy/gps-buddy-mobile@2x.webp";
import gpsBuddyMobileWebp from "@/assets/img/projects/gps-buddy/gps-buddy-mobile.webp";
import gpsBuddy2x from "@/assets/img/projects/gps-buddy/gps-buddy@2x.jpg";
import gpsBuddy from "@/assets/img/projects/gps-buddy/gps-buddy.jpg";
import gpsBuddyMobile2x from "@/assets/img/projects/gps-buddy/gps-buddy-mobile@2x.jpg";
import gpsBuddyMobile from "@/assets/img/projects/gps-buddy/gps-buddy-mobile.jpg";
// Van Dijk project images
import vanDijkWebp2x from "@/assets/img/projects/van-dijk/van-dijk@2x.webp";
import vanDijkWebp from "@/assets/img/projects/van-dijk/van-dijk.webp";
import vanDijkMobileWebp2x from "@/assets/img/projects/van-dijk/van-dijk-mobile@2x.webp";
import vanDijkMobileWebp from "@/assets/img/projects/van-dijk/van-dijk-mobile.webp";
import vanDijk2x from "@/assets/img/projects/van-dijk/van-dijk@2x.jpg";
import vanDijk from "@/assets/img/projects/van-dijk/van-dijk.jpg";
import vanDijkMobile2x from "@/assets/img/projects/van-dijk/van-dijk-mobile@2x.jpg";
import vanDijkMobile from "@/assets/img/projects/van-dijk/van-dijk-mobile.jpg";
// Other images
import ChevronLeft from "@/assets/img/icons/chevron-left.svg?react";
import ChevronRight from "@/assets/img/icons/chevron-right.svg?react";

import naitonOopbp from "@/assets/img/naiton-oopbp.webp";
import naitonOopbpJpg from "@/assets/img/naiton-oopbp.png";

export default function Home() {
  const { phoneNumber } = useOutletContext();

  const projects = [
    {
      id: "gps-buddy",
      title: "GPS Buddy",
      webp: gpsBuddyWebp,
      webp2x: gpsBuddyWebp2x,
      mobileWebp: gpsBuddyMobileWebp,
      mobileWebp2x: gpsBuddyMobileWebp2x,
      jpg: gpsBuddy,
      jpg2x: gpsBuddy2x,
      mobileJpg: gpsBuddyMobile,
      mobileJpg2x: gpsBuddyMobile2x,
      alt: "GPS Buddy",
    },
    {
      id: "kitemana",
      title: "Kitemana",
      webp: kitemanaWebp,
      webp2x: kitemanaWebp2x,
      mobileWebp: kitemanaMobileWebp,
      mobileWebp2x: kitemanaMobileWebp2x,
      jpg: kitemana,
      jpg2x: kitemana2x,
      mobileJpg: kitemanaMobile,
      mobileJpg2x: kitemanaMobile2x,
      alt: "Kitemana",
    },
    {
      id: "van-dijk",
      title: "Van Dijk Staircase Solutions",
      webp: vanDijkWebp,
      webp2x: vanDijkWebp2x,
      mobileWebp: vanDijkMobileWebp,
      mobileWebp2x: vanDijkMobileWebp2x,
      jpg: vanDijk,
      jpg2x: vanDijk2x,
      mobileJpg: vanDijkMobile,
      mobileJpg2x: vanDijkMobile2x,
      alt: "Van Dijk Staircase Solutions",
    },
  ];

  const clients = [
    {
      id: "gps-buddy",
      name: "gps buddy",
      link: "https://www.gps-buddy.com",
      img: clientGpsBuddy,
    },
    {
      id: "kitemana",
      name: "kitemana",
      link: "https://www.kitemana.com",
      img: clientKitemana,
    },
    {
      id: "vandijk",
      name: "vanDijk",
      link: "https://vandijk-staircasesolutions.com",
      img: clientVandijk,
    },
    {
      id: "energielive",
      name: "energielive",
      link: "https://energielive.nl",
      img: clientEnergielive,
    },
  ];

  return (
    <>
      <section className="container">
        <div className="relative">
          <ProjectsSwiper>
            {projects.map((project) => (
              <picture key={project.id} className="swiper-slide">
                <source media="(min-width: 562px)" srcSet={`${project.webp} 1x, ${project.webp2x} 2x`} type="image/webp" />
                <source media="(max-width: 560px)" srcSet={`${project.mobileWebp} 1x, ${project.mobileWebp2x} 2x`} type="image/webp" />
                <source media="(min-width: 562px)" srcSet={`${project.jpg} 1x, ${project.jpg2x} 2x`} />
                <source media="(max-width: 560px)" srcSet={`${project.mobileJpg} 1x, ${project.mobileJpg2x} 2x`} />

                <img src={project.jpg} srcSet={`${project.jpg} 1x, ${project.jpg2x} 2x`} alt={project.alt} width="1440" height="600" className="w-full object-cover" />
              </picture>
            ))}
          </ProjectsSwiper>

          <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between">
            <button className="projects-navigation__prev w-10 h-10 text-white bg-accent opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-25 transition" aria-label="previous project">
              <ChevronLeft />
            </button>

            <button className="projects-navigation__next w-10 h-10 text-white bg-accent opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-25 transition" aria-label="next project">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section className="container py-12 space-y-12 max-md:text-center">
        <h2>Optimization of operational business&nbsp;processes</h2>

        <div className="flex max-md:flex-wrap gap-x-6 mx-auto">
          <div className="w-full md:w-3/12">
            <h3>Based on standard and company-specific&nbsp;modules</h3>
          </div>

          <div className="w-full md:w-9/12 space-y-3">
            <p className="text-lead">Naiton combines online and offline sales with your internal business processes. We work on an ongoing process, based on your specific situation.</p>

            <p>Moreover, Naiton not only helps generate new business, we also specialize in client retention. We retain regular customers and focus on repeat orders, which are more cost-efficient than acquiring new customers. We use order histories and innovative customer profiles.</p>
          </div>
        </div>

        <picture className="block">
          <source srcSet={`${naitonOopbp} 1x, ${naitonOopbp} 2x`} type="image/webp" />
          <img src={naitonOopbpJpg} width="1074" height="512" alt="naiton - optimization of operational business processes" className="w-full max-w-[80%] mx-auto object-cover" />
        </picture>

        <p className="text-center">
          <a href="/solutions/" className="btn text-white bg-accent">
            View Naiton solutions
          </a>
        </p>

        <CTASection phoneNumber={phoneNumber} title="Would you like to get acquainted with Nation Business Suite without obligation?" />

        <div className="flex max-md:flex-wrap max-md:space-y-6">
          <div className="w-full md:w-3/12">
            <h3>Our Clients</h3>
          </div>

          <div className="w-full md:w-9/12">
            <ul className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
              {clients.map((client) => (
                <li key={client.id}>
                  <a href={client.link} target="_blank" rel="noopener noreferrer" className="flex w-full h-full px-4 py-10 rounded bg-body/5 items-center justify-center hover:shadow-2xl duration-500 transition">
                    <img src={client.img} width="156" height="38" alt={client.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t" />

        <div className="flex max-md:flex-wrap max-md:space-y-6">
          <div className="w-full md:w-3/12">
            <h3>Interesting fact</h3>
          </div>

          <div className="w-full md:w-9/12">
            <p>Managed from the Netherlands, with more than 30 permanent (international) developers, English, German and Dutch-language support and maintenance. Internationally oriented solutions; the package is multi-language, multi-currency, multi-business (intercompany and intracompany)… but also international VAT payments, for example, are available on request.</p>
          </div>
        </div>
      </section>
    </>
  );
}
