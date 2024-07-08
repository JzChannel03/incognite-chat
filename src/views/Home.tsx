import Body from "../components/body";
import Header from "../components/header";
import MobileNav from "../components/mobile-nav";

function ChatBubble({ isMine }: Readonly<{ isMine: boolean }>) {
  return (
    <div
      className={`p-1 bubble-chat-bg w-fit text-wrap inline-block rounded-md ${
        isMine ? "float-left" : "float-right"
      }`}
    >
      <span>Hola Hermanito!</span>
    </div>
  );
}

function ChatPreview() {
  return (
    <section className="w-4/6 h-full border-l-1 border-solid border-gray-200 grid grid-rows-[60px,20fr]">
      <div className="px-5 py-3 text-white flex align-middle items-center">
        ChatHeaderPreview
      </div>
      <div
        /* style={{ backgroundImage: `url(${chatBg})` }} */
        className={`bg-white w-full h-full flex flex-col-reverse shrink-0 basis-auto p-5 bg-[image:var(--image-url)]`}
      >
        <ChatBubble isMine={true} />
        <ChatBubble isMine={false} />
        <ChatBubble isMine={false} />
        <ChatBubble isMine={true} />
        <ChatBubble isMine={true} />
        <ChatBubble isMine={true} />
        <ChatBubble isMine={false} />
        <ChatBubble isMine={true} />
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <section className="w-full h-full md:flex md:flex-row overflow-hidden">
      <div className="relative w-full min-w-80 h-full md:w-2/6 grid grid-rows-[130px,20fr]">
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
