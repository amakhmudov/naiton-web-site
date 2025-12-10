export default function SolutionSection({ title, subtitle, items, showDivider = true }) {
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
            {items.map((item, index) => (
              <li key={index} className="flex flex-col space-y-3 p-6 lg-down:px-0">
                {item.icon}

                <p className="text-lead">{item.title}</p>

                <ul className="list-disc">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showDivider && <hr className="border-t mt-6 mb-12" />}
    </>
  );
}
