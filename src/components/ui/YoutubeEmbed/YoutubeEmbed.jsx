"use client";

import React from "react";
import PropTypes from "prop-types";

export default function YoutubeEmbed({ embedId }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>
  );
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
