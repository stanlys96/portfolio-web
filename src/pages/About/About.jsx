/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";
import SkillItem from "../Resume/SkillItem";
import { FaRegEye } from "react-icons/fa";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web3 development",
    description:
      "Involved in several projects that deal with smart contracts, cryptocurrencies and NFTs.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load project data from projects.json
  useEffect(() => {
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, my name is Stanly and I am a full-stack Web, Mobile and Web3
          Developer. I specialize in using React for Web Development, Flutter &
          React Native for Mobile development and React & Solidity for Web3
          Development. I use Node JS for backend development, and PostgreSQL as
          the database.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem
            imageUrl="images/nextjs.png"
            title="React, Next JS"
            value={80}
          />
          <SkillItem
            imageUrl="images/react.svg"
            title="React Native"
            value={80}
          />
          <SkillItem imageUrl="images/flutter.png" title="Flutter" value={70} />
          <SkillItem
            imageUrl="images/solidity.png"
            title="Solidity"
            value={70}
          />
          <SkillItem imageUrl="images/hardhat.png" title="Hardhat" value={70} />
          <SkillItem
            imageUrl="images/nodejs.png"
            title="Node JS, Express JS, Nest JS"
            value={75}
          />
          <SkillItem
            bgWhite
            imageUrl="images/postgre.webp"
            title="PostgreSQL"
            value={75}
          />
        </ul>
      </div>
    </article>
  );
};

export default About;
