import { useState } from "react";
import { Dev, Lecture, OptionIcon, UI } from "../../assets";
import { SmallService, DetailService } from "../../components";
import classes from "./index.module.css";

function Service() {
  const SERVICE = [
    {
      id: "design",
      image: UI,
      title: "Design",
      description: "Lorem ipsum dolor sit amet.",
      package: [
        {
          name: "Basic",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, veritatis.",
          serviceList: ["Example1", "Example2", "Example3", "Example4"],
          duration: 0,
          price: 20,
        },
        {
          name: "Advance",
          description:
            "Lorem consectetur adipisicing elit. Officia, veritatis.",
          serviceList: ["Example5", "Example2", "Example3", "Example4"],
          duration: 10,
          price: 50,
        },
      ],
    },
    {
      id: "web",
      image: Dev,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet.",
      package: [
        {
          name: "Basic",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, veritatis.",
          serviceList: ["Example1", "Example2", "Example3", "Example4"],
          duration: 0,
          price: 20,
        },
      ],
    },
    {
      id: "lecture",
      image: Lecture,
      title: "Lecture",
      description: "Lorem ipsum dolor sit amet.",
      package: [
        {
          name: "Basic",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, veritatis.",
          serviceList: ["Example1", "Example2", "Example3", "Example4"],
          duration: 0,
          price: 20,
        },
      ],
    },
  ];

  return (
    <>
      <h1 className={classes.title}>Our Services</h1>
      <div className={classes.serviceContainer}>
        {SERVICE.map((service) => {
          return (
            <SmallService
              key={service.id}
              id={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
      {SERVICE.map((service) => {
        return (
          <DetailService
            key={service.id}
            id={service.id}
            title={service.title}
            servicePackage={service.package}
          />
        );
      })}
    </>
  );
}

export default Service;
