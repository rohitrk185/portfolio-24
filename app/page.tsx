import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

type NavbarItem = {
  name: string;
  link: string;
  icon?: JSX.Element | undefined;
};

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} className="" />
        <Hero />

        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
