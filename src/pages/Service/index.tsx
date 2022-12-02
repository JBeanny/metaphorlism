import { useState } from "react";
import { OptionIcon } from "../../assets";
import { SmallService, DetailService } from "../../components";
import { getServices } from "../../config/axios";
import classes from "./index.module.css";
import { useQuery } from "react-query";

function Service() {
  const [serviceId, setServiceId] = useState<Array<string>>([]);
  const [activeId, setActiveId] = useState<string>("");

  const { data, status } = useQuery(["services"], getServices, {
    onSuccess: (data) => {
      setServiceId(data.map((service) => service.id));
      setActiveId(data[0].id);
    },
  });

  const handleNextService = () => {
    setActiveId((prev) => {
      if (serviceId.indexOf(activeId) === serviceId.length - 1)
        return serviceId[0];
      return serviceId[serviceId.indexOf(prev) + 1];
    });
  };

  if (status === "loading")
    return <h1 style={{ textAlign: "center", letterSpacing: ".5em" }}>Loading...</h1>;

  if (status == "success") {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Our Services</h1>
        <div className={classes.serviceContainer}>
          {data.length > 1 ? (
            <div className={classes.next} onClick={handleNextService}>
              <OptionIcon /> {/* Next Icon */}
            </div>
          ) : null}
          {data.map((service, i) => {
            return (
              <span
                className={activeId === service.id ? classes.active : undefined}
                key={service.id}
              >
                <SmallService
                  id={service.id}
                  image={`http://localhost:8080${service.image.url}`}
                  title={service.name}
                  description={service.description}
                />
              </span>
            );
          })}
        </div>
        {data.map((service, i) => {
          return (
            <DetailService
              key={service.id}
              id={service.id}
              title={service.name}
              servicePackage={service.package}
            />
          );
        })}
      </div>
    );
  }
}

export default Service;
