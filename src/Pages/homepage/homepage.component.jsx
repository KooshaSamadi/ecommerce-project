import React from "react";
import "./homepage.styles.scss";
import Directory from "../../Components/directory/directoy.component";
function homepage() {
  return (
    <div className="homepage container-xxl">
      <Directory />
    </div>
  );
}

export default homepage;
