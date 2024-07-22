const SkillItem = ({ title, value, imageUrl, bgWhite }) => {
  return (
    <li className="skills-item">
      <div className="skills-container">
        <img
          style={{ background: bgWhite ? "white" : "none" }}
          alt="walao"
          src={imageUrl}
          width={30}
          height={30}
        />
        <div className="title-wrapper">
          <h5 className="h5">{title}</h5>
          <data value={value}>{value}%</data>
        </div>
      </div>
      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </li>
  );
};

export default SkillItem;
