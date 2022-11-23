import { useState } from "react";
import classes from "./index.module.css";
import { OptionIcon } from "../../assets";

type DetailServiceProps = {
  id: string;
  title: string;
  servicePackage: Array<{
    name: string;
    image: string;
    description: string;
    serviceList: Array<string>;
    duration: number;
    price: number;
  }>;
};

function DetailService(props: DetailServiceProps) {
  const { id, title, servicePackage } = props;
  const [isOption, setOption] = useState(false);
  const [bundle, setBundle] = useState(servicePackage[0]);

  const handleOption = () => {
    if (servicePackage.length < 2) return;
    setOption((prev) => !prev);
  };

  const handleSelect = (name: string) => {
    setOption(false);
    const newBundle = servicePackage.find((bundle) => bundle.name === name);
    if (newBundle) setBundle(newBundle);
  };

  return (
    <div className={classes.service}>
      <h1 className={classes.serviceName} id={id}>
        {title}
      </h1>
      <div className={classes.container}>
        <div className={classes.imageSection}>
          <img src={bundle.image} alt={bundle.name} />
          <div className={classes.action}>
            <div className={classes.optionSelector}>
              {bundle.name}
              {servicePackage.length > 1 ? (
                <>
                  <span
                    onClick={handleOption}
                    className={isOption ? classes.active : ""}
                  >
                    <OptionIcon />
                  </span>
                  <div
                    className={classes.option}
                    style={{
                      scale: isOption ? "1 1" : "1 0",
                      translate: isOption ? "0" : "0 100%",
                    }}
                  >
                    {servicePackage.map((pack) => {
                      if (pack.name === bundle.name) return null;
                      return (
                        <li
                          key={pack.name}
                          onClick={() => handleSelect(pack.name)}
                        >
                          {pack.name}
                        </li>
                      );
                    })}
                  </div>
                </>
              ) : null}
            </div>
            <button className={classes.buy}>Buy</button>
          </div>
        </div>
        <div className={classes.package}>
          <div className={classes.priceTag}>{bundle.price}$</div>
          <h2 className={classes.name}>{bundle.name}</h2>
          <p className={classes.description}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{bundle.description}
          </p>
          <p className={classes.list}>List of Services</p>
          {bundle.serviceList.map((service) => {
            return <li key={service}>{service}</li>;
          })}
          <div className={classes.duration}>Duration: {bundle.duration}s</div>
        </div>
      </div>
    </div>
  );
}

export default DetailService;
