import {
  NavBar,
  Header,
  CampaignPost,
  ActiveCampaign,
} from "./sections/index.js";

function App() {
  return (
    <>
      <main className="Poppins grid lg:grid-cols-5 m-20 border-2 rounded-xl shadow-md shadow-black h-fit border-gray-100">
        <div className="">
          <NavBar />
        </div>
        <div className=" lg:col-span-4">
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
