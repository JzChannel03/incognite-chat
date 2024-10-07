import { Input } from "@nextui-org/react";
import Body from "../components/body";
import Header from "../components/header";
import MobileNav from "../components/mobile-nav";
import { Icon } from "@iconify/react/dist/iconify.js";

function ChatBubble({ isMine }: Readonly<{ isMine: boolean }>) {
  return (
    <div className={`flex w-full ${isMine ? "flex-row-reverse" : "flex-row"}`}>
      <span className="p-2 rounded-md w-fit text-wrap bubble-chat-bg">
        Hola Hermanito!
      </span>
    </div>
  );
}

function ChatPreview() {
  return (
    <section className="border-gray-200 grid grid-rows-[60px,1fr,80px] border-l-1 border-solid w-4/6 h-full">
      <div className="flex items-center px-5 py-3 text-white align-middle">
        ChatHeaderPreview
      </div>
      <div
        /* style={{ backgroundImage: `url(${chatBg})` }} */
        className={`bg-white w-full h-full flex gap-2 flex-col-reverse shrink-0 basis-auto p-5 bg-[image:var(--image-url)]`}
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
      <div className="flex flex-row justify-center items-center gap-2 bg-red-400 p-5 w-full h-full">
        <Icon
          className="group-hover:scale-125 transition duration-300"
          width={30}
          icon="majesticons:microphone"
        />
        <Input placeholder="Escribe tu mensaje..." />
        <button className="bg-blue-gradient p-2 rounded-2xl text-white">
          Enviar
        </button>
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <section className="md:flex md:flex-row w-full h-full overflow-hidden">
      <div className="relative grid grid-rows-[130px,20fr] w-full md:w-2/6 min-w-80 h-full">
        <Header></Header>
        <Body></Body>
        <MobileNav></MobileNav>
      </div>
      <ChatPreview></ChatPreview>
      {/* <button className="right-3 bottom-20 fixed bg-blue-gradient p-2 rounded-2xl text-white">
        Generate AI
      </button> */}
    </section>
  );
};

export default Home;
