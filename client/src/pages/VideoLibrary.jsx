import React from "react";

const medicalTopics = [
  {
    title: "CPR Basics",
    videoId: "TPpiWG_HzkI",
  },
  {
    title: "How to Clean a Wound",
    videoId: "AhANvBB9hz0",
  },
  {
    title: "How to Save Person Choking",
    videoId: "e20XYkM68EA",
  },
  {
    title: "How to be safe from covid",
    videoId: "IS1fJ4sAOJ4",
  },
  {
    title: "How to react on heart Attack",
    videoId: "gDwt7dD3awc",
  },

  {
    title: "How to react when you feel dizzy",
    videoId: "s4xLBvhl_Lw",
  },

  // Add more topics as needed
];

const MedicalCard = ({ title, videoId }) => {
    return (

        



    
      <div className="col-lg-4 mb-4 mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  };

const VideoLibrary = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {medicalTopics.map((topic, index) => (
          <MedicalCard
            key={index}
            title={topic.title}
            videoId={topic.videoId}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoLibrary;
