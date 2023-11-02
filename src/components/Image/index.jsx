import React from "react";
import styles from "./styles.module.css";

const Image = ({ alt, src, props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function displayImage(e) {
    setSkeleton(false);
    e.target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={displayImage} src={src} alt={alt} {...props} />
    </div>
  );
};

export default Image;
