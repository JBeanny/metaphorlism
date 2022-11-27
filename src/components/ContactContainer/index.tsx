import classes from "./index.module.css";

type ContactProps = {
  logo: string;
  platform: string;
  name: string;
  link: string;
  btnText: string;
};

function ContactContainer(props: ContactProps) {
  const { logo, platform, name, link, btnText } = props;

  const handleBtn = () => {
    switch (platform.toLowerCase()) {
      case "email":
        break;
      default:
        window.open(link);
    }
  };

  return (
    <div className={classes.container}>
      <img src={logo} alt={platform} className={classes.logo} />
      <h2 className={classes.platform}>{platform}</h2>
      <span className={classes.line}></span>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.link}>{link}</p>
      <div className={classes.btn} onClick={handleBtn}>
        {btnText}
      </div>
    </div>
  );
}

export default ContactContainer;
