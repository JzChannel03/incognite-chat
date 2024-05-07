import Body from "../components/body";
import Header from "../components/header";
import MobileNav from "../components/mobile-nav";

const Home = () => {
  return (
    <section className="w-full h-full overflow-hidden">
      <div className="w-full h-full grid grid-rows-[2.5fr,20fr]">
        <Header></Header>
        <Body></Body>
      </div>
      <MobileNav></MobileNav>
      {/* <button className="bg-blue-gradient p-2 rounded-2xl fixed bottom-20 right-3 text-white">
        Generate AI
      </button> */}
    </section>
  );
};

export default Home;
