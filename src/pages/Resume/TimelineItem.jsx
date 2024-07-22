const TimelineItem = ({
  title,
  date,
  description,
  position,
  imageUrl,
  bgWhite,
  rounded,
}) => {
  return (
    <li className="timeline-item">
      <div className="logo-container">
        <img
          style={{
            backgroundColor: "white",
            borderRadius: rounded ? "50%" : 0,
          }}
          width={50}
          height={50}
          src={imageUrl}
          alt={title}
          loading="lazy"
        />
        <div>
          <h4 className="h4 timeline-item-title">{title}</h4>
          <h3 className="h3 timeline-item-title underline">{position}</h3>
        </div>
      </div>
      <span>{date}</span>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="timeline-text"
      />
    </li>
  );
};

export default TimelineItem;
