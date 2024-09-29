import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar, Header, CampaignPost, ActiveCampaign } from "./sections";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <NavBar />
        <section>
          <Header />
        </section>
        <section>
          <CampaignPost />
        </section>
        <section>
          <ActiveCampaign />
        </section>
      </main>
    </>
  );
}

export default App;
