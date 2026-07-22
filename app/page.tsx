import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { GithubStats } from "@/components/sections/github-stats";
import { LeetcodeStats } from "@/components/sections/leetcode-stats";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { CodingJourney } from "@/components/sections/coding-journey";
import { Achievements } from "@/components/sections/achievements";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Projects />
        <GithubStats />
        <LeetcodeStats />
        <Education />
        <Certifications />
        <CodingJourney />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
