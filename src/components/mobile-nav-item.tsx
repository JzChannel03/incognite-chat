import { Icon } from "@iconify/react/dist/iconify.js";
import { Badge, Button } from "@nextui-org/react";

export default function MobileNavItem({
  iconName,
  isBadgeInvisible,
  isMarked,
  title,
}: Readonly<{
  iconName: string;
  title: string;
  isBadgeInvisible?: boolean;
  isMarked?: boolean;
}>) {
  return (
    <div className={`flex flex-col items-center gap-1`}>
      <Badge
        content="5"
        color="primary"
        variant="shadow"
        isInvisible={isBadgeInvisible}
      >
        <Button className={`bg-transparent`} isIconOnly>
          <Icon
            color={isMarked ? "blue" : "black"}
            icon={`mingcute:${iconName}`}
            width={24}
          />
        </Button>
      </Badge>

      <span className="text-sm hidden md:inline">{title}</span>
    </div>
  );
}
