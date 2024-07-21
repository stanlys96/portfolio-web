import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { Modal, Button } from "antd";

const Portfolio = () => {
  // State to store project data and filtered projects
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedProject, setSelectedProject] = useState();

  // Load project data from projects.json

  // Load project data from projects.json
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.categories.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 portfolio-title article-title">Portfolio</h2>
      </header>
      <p className="total-text">
        Total: {filteredProjects?.length ?? "0"} projects
      </p>
      {/* Filter buttons */}
      <ul className="filter-list">
        {["All", "Website", "Mobile App", "Web3"].map((category) => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? "active" : ""}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a
                className="curs-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  showModal();
                }}
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img
                    className="proj-img"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>
                <div className="project-subcontainer">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-title company-color">
                    {project.company}
                  </span>
                  <div className="projects-container">
                    {project.categories.map((cat) => (
                      <span
                        className={`${
                          cat === "Mobile App"
                            ? "green-value"
                            : cat === "Website"
                            ? "blue-value"
                            : "yellow-value"
                        } project-category`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
              <div>
                <a
                  href={project?.link}
                  target="_blank"
                  className={`${
                    project.available ? "button-portfolio" : "button-restricted"
                  }`}
                >
                  {project.projectMessage}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Modal
        title={selectedProject?.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="custom-modal"
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <img
          className="proj-img"
          src={selectedProject?.image}
          alt={selectedProject?.title}
          loading="lazy"
        />
        <h2 className="mtop-10">{selectedProject?.company}</h2>
        <p className="proj-desc">{selectedProject?.description}</p>
        {selectedProject?.available && (
          <a target="_blank" href={selectedProject?.link} className="proj-link">
            Go To Project
          </a>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
