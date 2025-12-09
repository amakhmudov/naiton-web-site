import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  const phoneNumber = "310208932732";

  return (
    <>
      <Header phoneNumber={phoneNumber} />
      <main className="main">
        <Outlet context={{ phoneNumber }} />
      </main>
      <Footer phoneNumber={phoneNumber} />
    </>
  );
}
