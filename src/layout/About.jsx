import SectionHeader from "@/components/SectionHeader";
import style from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={style.about} id="about">
      <SectionHeader title="About" />
      <div className={style.details}>
        <div className={style.description}>
          <p>
            I&apos;m a self-taught web developer based in Bangladesh working as
            a freelancer. I mainly use JavaScript, react, and many other tools,
            libraries, and languages for my daily work. 
          </p>
          <p>
            I started working as a web developer a few years ago and have been
            working on many projects since for both personal and clients. I love
            learning new things and continuously improving my skills. 
          </p>
          <p>
            Besides web development, I&apos;ve many areas of interest. As a
            hobby, I like to do 3d modelling work. I also planned to learn a
            musical instrument(piano) someday. One of my favourite pass time
            activities is to read books. I read mostly fantasy genres and
            Brandon Sanderson is my current favourite writer. 
          </p>
          <p>
            I liked to plan everything and try to follow a routine for
            day-to-day activities. Work is essential, and so are health and
            family so I divide my time accordingly and always focus on what
            I&apos;m doing. I&apos;m not very active on social media but I
            always prioritize real human communication. 
          </p>
          <p>
            I&apos;m willing to help anyone in need. I would love to hear from
            you, send an email through the form, and let&apos;s connect!
          </p>
        </div>
        <Image
          src="/myImg.jpeg"
          width={250}
          height={250}
          alt="a photo of ismayel alam"
          className={style.myImage}
        />
      </div>
    </section>
  );
}
