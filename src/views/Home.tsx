import Body from "../components/body";
import Header from "../components/header";
import MobileNav from "../components/mobile-nav";

function ChatPreview() {
  return (
    <section className="w-4/6 h-full border-l-1 border-solid border-gray-200 grid grid-rows-[120px,20fr]">
      <div>ChatHeaderPreview</div>
      <div>ChatBodyPreview</div>
    </section>
  );
}

const Home = () => {
  return (
    <section className="w-full h-full md:flex md:flex-row overflow-hidden">
      <div className="w-full h-full md:w-2/6 grid grid-rows-[120px,20fr]">
        <Header></Header>
        <Body></Body>
        <MobileNav></MobileNav>
      </div>
      <ChatPreview></ChatPreview>
      {/* <button className="bg-blue-gradient p-2 rounded-2xl fixed bottom-20 right-3 text-white">
        Generate AI
      </button> */}
    </section>
  );
};

export default Home;
