import CRMItems from "@/components/solutions/CRMItems.jsx";
import HRMItems from "@/components/solutions/HRMItems.jsx";
import WMSItems from "@/components/solutions/WMSItems.jsx";
import LicencesItems from "@/components/solutions/LicencesItems.jsx";

const componentMap = {
  CRMItems,
  HRMItems,
  WMSItems,
  LicencesItems,
};

export default function SolutionSection({ title, subtitle, Component, showDivider = true }) {
  const ItemsComponent = componentMap[Component];

  return (
    <>
      <div className="flex lg-down:flex-wrap md:gap-x-6 lg-down:space-y-6">
        <div className="w-full lg:w-3/12">
          <h3 className="flex flex-col">
            {title}
            <span className="text-xl font-normal">{subtitle}</span>
          </h3>
        </div>

        <div className="w-full lg:w-9/12 space-y-12">
          <ul className="grid md:grid-cols-2 md:-mt-5">
            <ItemsComponent />
          </ul>
        </div>
      </div>
      {showDivider && <hr className="border-t mt-6 mb-12" />}
    </>
  );
}
