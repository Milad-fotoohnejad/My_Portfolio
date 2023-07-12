import React from "react";
import HomePage from "./pages/home";
import Navigation from "./components/navigation";
import Footer from "./components/footer";


// interface PageLayoutProps {
//   children: React.ReactNode;
// }


export default function Home() {
  return (
    <div className="grid-container">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="content">
        <HomePage />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};




