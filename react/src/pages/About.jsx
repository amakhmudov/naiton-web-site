import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import ContentSection from "@/components/ContentSection.jsx";
import CTASection from "@/components/CTASection.jsx";
import Loader from "@/components/Loader.jsx";
import LazySection from "@/components/LazySection.jsx";
import niafferp from "@/assets/img/niafferp.png";
import niafferrpWebp from "@/assets/img/niafferp.webp";
import naitonOopbp from "@/assets/img/naiton-oopbp.png";
import naitonOopbpWebp from "@/assets/img/naiton-oopbp.webp";
import odmwacpac from "@/assets/img/odmwacpac.png";
import odmwacpacWebp from "@/assets/img/odmwacpac.webp";

// Image mappings for about sections
const sectionImages = {
  niafferp: {
    png: niafferp,
    webp: niafferrpWebp,
    width: 840,
    height: 435,
  },
  "naiton-oopbp": {
    png: naitonOopbp,
    webp: naitonOopbpWebp,
    width: 1074,
    height: 512,
  },
  odmwacpac: {
    png: odmwacpac,
    webp: odmwacpacWebp,
    width: 840,
    height: 402,
  },
};

function AboutContent() {
  const { data: sections } = useSuspenseQuery({
    queryKey: ["aboutData"],
    queryFn: () =>
      fetch("/data/db.json")
        .then((response) => response.json())
        .then((data) =>
          data.aboutSections.map((section) => ({
            ...section,
            image: sectionImages[section.id],
          })),
        ),
  });

  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between text-white py-9 px-4 bg-accent">
          <p className="text-white h2">About Naiton</p>

          <ul className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>About Naiton</span>
            </li>
          </ul>
        </div>
      </div>

      <section className="container py-12 md-down:text-center">
        {sections.map((section, index) => (
          <LazySection>
            <ContentSection key={section.id} {...section} />
          </LazySection>
        ))}

        <LazySection>
          <div className="flex lg-down:flex-wrap md:gap-x-6 lg-down:space-y-6">
            <div className="w-full lg:w-3/12"></div>
            <div className="w-full space-y-12 lg:w-9/12">
              <p>Naiton's software is now used by hundreds of customers, with thousands of users. No costs are charged for the software modules and no (monthly) license fees are charged. How is that possible? Ask us!</p>
            </div>
          </div>
        </LazySection>

        <hr className="mt-12 border-t" />

        <LazySection>
          <CTASection title="Would you like to get acquainted with Nation Business Suite without obligation?" />
        </LazySection>
      </section>
    </>
  );
}

export default function About() {
  return (
    <Suspense fallback={<Loader />}>
      <AboutContent />
    </Suspense>
  );
}
