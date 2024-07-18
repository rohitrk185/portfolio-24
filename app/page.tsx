import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

type NavbarItem = {
  name: string;
  link: string;
  icon?: JSX.Element | undefined;
};

export default function Home() {
  const navbarItems: NavbarItem[] = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navbarItems} className="" />
        <Hero />
      </div>
    </main>
  );
}
