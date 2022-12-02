import { useState } from "react";
import { ContactContainer } from "../../components";
import classes from "./index.module.css";
import { useQuery } from "react-query";
import { getContact } from "../../config/axios";

function Contact() {
  const [isTeam, setTeam] = useState(true);
  const { data, status } = useQuery(["contact"], getContact);

  if (status === "loading") return <h1>Loading</h1>;

  if (status === "success")
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          Get in touch with us for more information
        </h1>
        <p className={classes.sub}>
          If you need help or have questions, we're here for you.
        </p>
        <div className={classes.contactContainer}>
          <div
            className={`${classes.team} ${isTeam ? classes.active : ""}`}
            onClick={() => setTeam(true)}
          >
            Team Contact
          </div>
          <div
            className={`${classes.member} ${isTeam ? "" : classes.active}`}
            onClick={() => setTeam(false)}
          >
            Member Contact
          </div>
        </div>
        {isTeam ? (
          <div className={`${classes.contactWrapper} ${classes.team}`}>
            {data.team.contact.map((team, i) => {
              return (
                <ContactContainer
                  key={i}
                  logo={`${import.meta.env.VITE_BACKEND_URL}${
                    team.platform.image
                  }`}
                  platform={team.platform.name}
                  name={data.team.name}
                  link={team.url}
                  btnText={
                    team.platform.name.toLowerCase() !== "email"
                      ? `Go to ${team.platform.name}`
                      : "Send an Email"
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className={classes.memberContainer}>
            {data.member.map((member, i) => {
              return (
                <div key={i}>
                  <div className={classes.head}>
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}${member.image}`}
                      alt={member.name}
                      className={classes.image}
                    />
                    <h2 className={classes.name}>{member.name}</h2>
                  </div>
                  <div
                    className={`${classes.contactWrapper} ${classes.member}`}
                  >
                    {member.contact.map((contact, i) => {
                      return (
                        <ContactContainer
                          key={i}
                          logo={`${import.meta.env.VITE_BACKEND_URL}${
                            contact.platform.image
                          }`}
                          platform={contact.platform.name}
                          name={member.name}
                          link={contact.url}
                          btnText={
                            contact.platform.name.toLowerCase() !== "email"
                              ? `Go to ${contact.platform.name}`
                              : "Send an Email"
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
}

export default Contact;
