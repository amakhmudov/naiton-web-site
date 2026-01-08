import clsx from "clsx";
import { Link, useLocation } from "react-router";
import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader.jsx";
import Logo from "@/Logo.jsx";
import PhoneIcon from "@/assets/img/icons/phone.svg?react";

function Navigation({ pathname }) {
  const { data: menuItems } = useSuspenseQuery({
    queryKey: ["menuItems"],
    queryFn: () =>
      fetch("/data/db.json")
        .then((response) => response.json())
        .then((data) => data.menuItems),
  });

  return (
    <ul className="flex items-center space-x-2 md:space-x-12">
      {menuItems.map((item) => (
        <li key={item.href}>
          <Link to={item.href} className={clsx("menu-link", item.href === pathname && "active")}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <h1 className="sr-only">Naiton Business Suite</h1>

      <header className="header">
        <div className="container flex items-center justify-between py-4">
          <Logo />

          <nav>
            <Suspense fallback={<Loader />}>
              <Navigation pathname={pathname} />
            </Suspense>
          </nav>

          <a href="tel:310208932732" className="btn flex items-center space-x-2 text-white bg-accent lg-down:p-0 lg-down:!bg-transparent">
            <PhoneIcon className="lg-down:text-accent lg-down:w-6 lg-down:h-6" />

            <span className="lg-down:hidden">020&nbsp;893&nbsp;2732</span>
          </a>
        </div>
      </header>
    </>
  );
}
