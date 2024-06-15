import React from "react";

const colors = ["#FF8B00", "#C06832", "#814663", "#412395", "#0200C6"];

const WorkCard = (props) => {
  const { workItem } = props;
  const backgroundColor =
    workItem.id < colors.length ? colors[workItem.id] : "#0200C6";

  return (
    <div className="work-card-container">
      <div className="work-card">
        <div
          className="work-card-preview"
          style={{ backgroundColor: backgroundColor }}
        >
          <h2>{workItem.company}</h2>
          <a>{workItem.location}</a>
        </div>
        <div className="work-card-info">
          <div className="progress-container">
            <span
              className="progress-text"
              style={{ position: "relative", top: "-10px" }}
            >
              {workItem.startDate} - {workItem.endDate}
            </span>
          </div>
          <h2>{workItem.title}</h2>
          <div className="work-description">
            <ul>
              {workItem.description?.map((listItem, index) => (
                <div key={`${workItem.id}-list-item-${index}`}>
                  <li>
                    <h6>{listItem}</h6>
                  </li>
                  <div style={{ marginBottom: "15px" }} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
