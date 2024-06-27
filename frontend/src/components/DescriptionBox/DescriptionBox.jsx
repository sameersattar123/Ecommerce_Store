import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="DescriptionBox">
      <div className="DescriptionBox_navigtor">
        <div className="DescriptionBox_nav_box">Description</div>
        <div className="DescriptionBox_nav_box fade">Review(122)</div>
      </div>
      <div className="DescriptionBox_description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          cum nulla exercitationem placeat, accusantium eum ex at adipisci,
          quibusdam obcaecati, aliquid aliquam eveniet repellat recusandae
          praesentium sequi. Nemo, vitae facere.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          cum nulla exercitationem placeat, accusantium eum ex at adipisci,
          quibusdam obcaecati, aliquid aliquam eveniet repellat recusandae
          praesentium sequi. Nemo, vitae facere.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
