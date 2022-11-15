import { useState } from "react";
import { ContactContainer } from "../../components";
import classes from "./index.module.css";
import {
  FacebookLogo,
  LinkedInLogo,
  MailLogo,
  WebsiteLogo,
  Sotharoth,
  Tangmeng,
  TelegramLogo,
} from "../../assets";

function Contact() {
  const [isTeam, setTeam] = useState(true);
  const CONTACT_INFO = {
    team: [
      {
        logo: FacebookLogo,
        platform: "Facebook Page",
        name: "Metaphorlism",
        link: "https://facebook.com/Metaphorlism",
        btnText: "Go to Facebook Page",
      },
      {
        logo: LinkedInLogo,
        platform: "LinkedIn",
        name: "Metaphorlism",
        link: "https://linkedin.com/in/metaphorlism",
        btnText: "Go to LinkedIn",
      },
      {
        logo: MailLogo,
        platform: "Email",
        name: "Metaphorlism",
        link: "Metaphorlism@gmail.com",
        btnText: "Send email to us",
      },
    ],
    member: [
      {
        info: {
          image: Sotharoth,
          name: "Sotharoth Yim",
        },
        contact: [
          {
            logo: LinkedInLogo,
            platform: "LinkedIn",
            name: "Sotharoth Yim",
            link: "https://linkedin.com/in/SotharothYim",
            btnText: "Go to LinkedIn",
          },
          {
            logo: WebsiteLogo,
            platform: "Website",
            name: "Sotharoth Yim",
            link: "https://yim-sotharoth.vercel.app",
            btnText: "Go to website",
          },
          {
            logo: TelegramLogo,
            platform: "Telegram",
            name: "Sotharoth Yim",
            link: "https://t.me/YimSotharoth",
            btnText: "Contact me",
          },
        ],
      },
      {
        info: {
          image: Tangmeng,
          name: "Tangmeng Lim",
        },
        contact: [
          {
            logo: LinkedInLogo,
            platform: "LinkedIn",
            name: "Tangmeng Lim",
            link: "https://linkedin.com/in/TangmengLim",
            btnText: "Go to LinkedIn",
          },
          {
            logo: WebsiteLogo,
            platform: "Website",
            name: "Tangmeng Lim",
            link: "https://limtangmeng.netlify.app",
            btnText: "Go to website",
          },
          {
            logo: TelegramLogo,
            platform: "Telegram",
            name: "Tangmeng Lim",
            link: "https://t.me/TangmengLim",
            btnText: "Contact me",
          },
        ],
      },
    ],
  };

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
          {CONTACT_INFO.team.map((team, i) => {
            return (
              <ContactContainer
                key={i}
                logo={team.logo}
                platform={team.platform}
                name={team.name}
                link={team.link}
                btnText={team.btnText}
              />
            );
          })}
        </div>
      ) : (
        <div className={classes.memberContainer}>
          {CONTACT_INFO.member.map((member, i) => {
            return (
              <div key={i}>
                <div className={classes.head}>
                  <img
                    src={member.info.image}
                    alt={member.info.name}
                    className={classes.image}
                  />
                  <h2 className={classes.name}>{member.info.name}</h2>
                </div>
                <div className={`${classes.contactWrapper} ${classes.member}`}>
                  {member.contact.map((contact, i) => {
                    return (
                      <ContactContainer
                        key={i}
                        logo={contact.logo}
                        platform={contact.platform}
                        name={contact.name}
                        link={contact.link}
                        btnText={contact.btnText}
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
