import { useState } from "react";
import { Dev, Lecture, OptionIcon, UI, UIPicture } from "../../assets";
import { SmallService, DetailService } from "../../components";
import classes from "./index.module.css";
const SERVICE = [
  {
    id: "design",
    image: UI,
    title: "Design",
    description: "Lorem ipsum dolor sit amet.",
    package: [
      {
        name: "Basic",
        image: UIPicture,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, veritatis.",
        serviceList: ["Example1", "Example2", "Example3", "Example4"],
        duration: 0,
        price: 20,
      },
      {
        name: "Advance",
        image: "",
        description: "Lorem consectetur adipisicing elit. Officia, veritatis.",
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
        image: "",
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
        image: "",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, veritatis.",
        serviceList: ["Example1", "Example2", "Example3", "Example4"],
        duration: 0,
        price: 20,
      },
    ],
  },
];

function Service() {
  const SERVICE_ID = SERVICE.map((service) => service.id);
  const [activeId, setActiveId] = useState(SERVICE_ID[0]);

  const handleNextService = () => {
    setActiveId((prev) => {
      if (SERVICE_ID.indexOf(activeId) === SERVICE_ID.length - 1)
        return SERVICE_ID[0];

      return SERVICE_ID[SERVICE_ID.indexOf(prev) + 1];
    });
  };

  return (
    <>
      <h1 className={classes.title}>Our Services</h1>
      <div className={classes.serviceContainer}>
        <div className={classes.next} onTouchStart={handleNextService}>
          <OptionIcon /> {/* Next Icon */}
        </div>
        {SERVICE.map((service, i) => {
          return (
            <span
              className={activeId === service.id ? classes.active : undefined}
              key={service.id}
            >
              <SmallService
                id={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </span>
          );
        })}
      </div>
      {SERVICE.map((service, i) => {
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
