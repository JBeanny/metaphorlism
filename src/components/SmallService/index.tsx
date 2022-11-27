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
      <img src={image} alt={id} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={() => {
          window.scrollTo({
            top:
              (document.getElementById(id)?.offsetTop || 0) -
              (document.getElementById("navigation-bar")?.offsetHeight || 0),
            behavior: "smooth",
          });
        }}
      >
        View more
      </button>
    </div>
  );
}

export default SmallService;
