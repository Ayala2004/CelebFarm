import {
  NavBar,
  Header,
  CampaignPost,
  ActiveCampaign,
} from "./sections/index.js";

function App() {
  return (
    <>
      <main className="Poppins">
        <div>
          <NavBar />
        </div>
        <div>
          <section>
            <Header />
          </section>
          <section>
            <CampaignPost />
          </section>
          <section>
            <ActiveCampaign />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
