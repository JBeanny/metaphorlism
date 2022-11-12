import React from "react";
import classes from "./index.module.css";

type SmallServiceProps = {
  id: string;
  image: string;
  title: string;
  description: string;
};

function SmallService(props: SmallServiceProps) {
  const { id, image, title, description } = props;

  return (
    <div className={`${classes.container}`}>
      <img src={image} alt="#" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={`#${id}`}>View more</a>
    </div>
  );
}

export default SmallService;
