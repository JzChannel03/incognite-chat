import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Avatar, Input } from "@nextui-org/react";

export default function Header() {
  return (
    <header className="z-10 flex flex-col gap-3 w-full px-5 py-3 rounded-b-2xl">
      <section className="flex flex-row justify-between items-center w-full">
        <Button title="Filters" className="bg-transparent md:hidden" isIconOnly>
          <Icon icon={`mingcute:filter-2-line`} color="white" width={25} />
        </Button>
        <Button
          className="text-white bg-transparent hidden md:flex hover:rounded-xl group"
          startContent={
            <Icon
              className="group-hover:scale-125 transition duration-300"
              icon={`mingcute:filter-2-line`}
              color="white"
              width={30}
            />
          }
        >
          Filters
        </Button>
        <div className="flex flex-row align-middle items-center gap-1">
          {/* <h4>Hi, Joseph!</h4>
          <Icon icon="ph:hand-waving-duotone" width={22} /> */}
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </div>
        <Button
          title="New Chat"
          className="bg-transparent md:hidden"
          isIconOnly
        >
          <Icon icon={`mingcute:add-circle-line`} color="white" width={25} />
        </Button>
        <Button
          className="text-white bg-transparent hidden md:flex hover:rounded-xl group"
          startContent={
            <Icon
              className="group-hover:rotate-180 transition duration-300"
              icon={`mingcute:add-circle-line`}
              color="white"
              width={30}
            />
          }
        >
          New Chat
        </Button>
      </section>
      <section>
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={<Icon icon="mingcute:search-3-line" />}
        />
      </section>
    </header>
  );
}
