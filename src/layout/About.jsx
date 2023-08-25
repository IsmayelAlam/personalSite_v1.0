import SectionHeader from "@/components/SectionHeader";
import style from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={style.about} id="about">
      <div className={style.description}>
        <h2 className={style.heading}>Little about me 👋</h2>
        <p>
          I&apos;m a self-taught web developer based in Bangladesh, proudly
          freelancing my way through the digital world. My daily grind is a
          delightful mix of JavaScript, React, and all sorts of tools and
          languages, as I whip up web wonders for clients and dabble in personal
          projects. I jumped onto this wild ride a few years back and
          haven&apos;t stopped learning since!
        </p>
        <p>
          When I&apos;m not coding up a storm, you&apos;ll find me getting my
          creative groove on with 3D modeling or daydreaming about mastering the
          piano. Oh, and I&apos;m an avid fantasy bookworm, with Brandon
          Sanderson as my current literary wizard.
        </p>
        <p>
          Life is all about balance, right? I&apos;m a big believer in planning
          my days to make time for work, family, and, of course, self-care. In
          an age of social media madness, I&apos;m all about real, meaningful
          conversations and connections.
        </p>
        <p>
          Drop me a line through the email form - let&apos;s chat, swap stories,
          and dive into the vast sea of shared interests and knowledge. I&apos;m
          all ears and excited to connect! 🤗
        </p>
      </div>
      <Image
        src="/myImg.svg"
        width={500}
        height={500}
        alt="a photo of ismayel alam"
        className={style.myImage}
      />
    </section>
  );
}
