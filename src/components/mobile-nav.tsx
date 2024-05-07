import MobileNavItem from "./mobile-nav-item";

export default function MobileNav() {
  return (
    <div className="flex justify-between align-middle items-center gap-1 lg:hidden h-[70px] w-full fixed bottom-0 left-0 shadow-2xl bg-white py-3 px-8 rounded-t-2xl">
      <MobileNavItem iconName="chat-1-line" isMarked title="Chats" />
      <MobileNavItem iconName="group-3-fill" isBadgeInvisible title="Groups" />
      <MobileNavItem iconName="notification-line" title="Notifications" />
      <MobileNavItem iconName="phone-line" isBadgeInvisible title="Calls" />
    </div>
  );
}
