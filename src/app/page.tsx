// import Image from "next/image";

import Main from "@/components/homepage/main";
import AboutSection from "@/components/about/about";
import Experance from "@/components/experience/experince";
import Skills from "@/components/skills/skills";
import Education from "@/components/education/index";
import Projects from "@/components/projects/index";
import ContactSection from "@/components/contact/index";
import { personalData } from "@/utils/data/personal-data";
import Blog from "@/components/blog/index";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item: any) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};


export default async function Home() {

  const blogs = await getData();

  return (
    <>
      <Main />
      <AboutSection />
      <Experance />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>

  );
}



