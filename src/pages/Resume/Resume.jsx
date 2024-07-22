import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Hacktiv8"
            date="Nov 2020 - Mar 2021"
            position="Full Stack JavaScript Immersive Program"
            description="Learned to create website and mobile apps from scratch (front-end, back-end, database). Graduated with 98.41% final grade."
            imageUrl="images/hacktiv8.png"
            rounded
          />
          <TimelineItem
            title="Unitec Institute of Technology"
            date="Feb 2015 - Sep 2019"
            description="Bachelor of Business (Accountancy)."
            imageUrl="images/unitec.svg"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="PT Photon"
            position="Senior Software Engineer"
            date="Nov 2023 — current"
            imageUrl="images/photon.jpeg"
            description={`Responsibilities:<br />
1. Collaborating with designers, developers, and stakeholders to develop functional and intuitive user interfaces.<br/>
2. Writing clean and maintainable code that is scalable, efficient, and adheres to established coding standards.<br/>
3. Troubleshooting and debugging code to ensure that web applications work smoothly and efficiently.<br/>
4. Integrating frontend code with backend systems, including APIs and databases.<br/>
5. Developing and maintaining scalable and efficient frontend architectures that support the development of high-quality web and mobile applications.`}
          />
          <TimelineItem
            title="Astra International Tbk"
            position="Full Stack Developer"
            date="May 2023 — Nov 2023"
            imageUrl="images/astra.png"
            description={`Responsibilities:<br />
            1. Developing and maintaining scalable and efficient backend architectures that support the development of high-quality web applications.<br/>
2. Writing clean and maintainable code that is scalable, efficient, and adheres to established coding standards.<br/>
3. Troubleshooting and debugging code to ensure that web applications work smoothly and efficiently.`}
          />
          <TimelineItem
            title="Hyfen"
            position="Web & Mobile Developer"
            date="Jan 2023 — Apr 2023"
            imageUrl="images/hyfen.jpeg"
            rounded
            description={`Responsibilities:<br />
            1. Developing and maintaining decentralized applications (dApps) on blockchain platforms.<br/>
2. Collaborating with designers, developers, and stakeholders to develop functional and intuitive user interfaces.<br/>
3. Writing clean and maintainable code that is scalable, efficient, and adheres to established coding standards.<br/>
4. Troubleshooting and debugging code to ensure that web applications work smoothly and efficiently.<br/>
5. Integrating frontend code with backend systems, including APIs and databases.<br/>
6. Developing and maintaining scalable and efficient frontend architectures that support the development of high-quality web and mobile applications.`}
          />
          <TimelineItem
            title="Adira Finance"
            position="Flutter Developer"
            date="Aug 2021 - Dec 2022"
            imageUrl="images/adira.png"
            rounded
            description={`Responsibilities:<br />
            1. Developing mobile apps and web applications for Adira's internal use.<br/>
2. Developing and maintaining scalable and efficient frontend architectures that support the development of high-quality mobile applications.<br/>
3. Collaborating with designers, developers, and stakeholders to develop functional and intuitive user interfaces.<br/>
4. Writing clean and maintainable code that is scalable, efficient, and adheres to established coding standards. <br/>
5. Troubleshooting and debugging code to ensure that web or mobile applications work smoothly and efficiently.<br/>
6. Integrating frontend code with backend systems, including APIs and databases.`}
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
