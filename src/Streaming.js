import React from "react";
import PropTypes from "prop-types";

const Streaming = ({ embedId }) => (
  <div className="video-responsive container">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Streaming.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Streaming;
