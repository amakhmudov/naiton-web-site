import clsx from "clsx";
import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import Error from "@/components/Error.jsx";
import Loader from "@/components/Loader.jsx";
import Logo from "@/Logo.jsx";
import PhoneIcon from "@/assets/img/icons/phone.svg?react";

function Navigation({ pathname }) {
  const [menuItems, setMenuItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("/data/db.json", { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setMenuItems(jsonData.menuItems);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          setMenuItems(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  if (isLoading || !menuItems) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error.message} />;
  }

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
            <Navigation pathname={pathname} />
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
