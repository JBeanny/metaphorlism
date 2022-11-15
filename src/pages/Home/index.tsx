import classes from "./index.module.css";
import {
  EducationIcon,
  ExperienceIcon,
  CapabilityIcon,
  Hero,
} from "../../assets";
import { AiOutlineArrowRight } from "react-icons/ai";
import member from "../../data/member";
import service from "../../data/service";

const index = () => {
  const members = member;
  const services = service;

  const MemberContent = () => {
    return (
      <div className={classes.team}>
        {members.map((val, index) => {
          return (
            <div
              key={index}
              className={
                (index + 1) % 2 !== 0
                  ? classes.memberPriCol
                  : classes.memberWhiCol
              }
            >
              <div className={classes.profile}>
                <div className={classes.profileImg}>
                  <img src={val.image} className={classes.img} />
                </div>

                <div className={classes.profileText}>
                  <div className={classes.name}>{val.name}</div>
                  <div className={classes.age}>{val.age} year-old</div>
                </div>
              </div>

              <div className={classes.memberContent}>
                <div className={classes.col1}>
                  <div className={classes.education}>
                    <div className={classes.educationTitle}>
                      <EducationIcon />
                      <span>Education</span>
                    </div>
                    <ul className={classes.educationContent}>
                      {val.education.map((edu,index) => {
                        return <li key={index}>{edu}</li>;
                      })}
                    </ul>
                  </div>

                  <div className={classes.experience}>
                    <div className={classes.experienceTitle}>
                      <ExperienceIcon />
                      <span>Experience</span>
                    </div>
                    <ul className={classes.experienceContent}>
                      {val.experience.map((exp,index) => {
                        return <li key={index}>{exp}</li>;
                      })}
                    </ul>
                  </div>
                </div>

                <div className={classes.col2}>
                  <div className={classes.capability}>
                    <div className={classes.capabilityTitle}>
                      <CapabilityIcon />
                      <span>What am I capable of ?</span>
                    </div>

                    <div className={classes.capabilityContent}>
                      {val.capability}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const ServiceContent = () => {
    return (
      <div className={classes.row2}>
        {services.map((val, index) => {
          return (
            <div
              key={index}
              className={classes.box}
              style={index !== 2 ? { borderRight: "2px solid #ffffff6e" } : {}}
            >
              <div className={classes.boxImage}>
                <img src={val.image} />
              </div>
              <div className={classes.boxName}>{val.name}</div>
              <div className={classes.boxContent}>{val.description}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.heroSection}>
        <div className={classes.heroContent}>
          <div className={classes.welcome}>
            Hi There ! <br />
            Welcome to Metaphorlism
          </div>

          <div className={classes.quote}>We make metaphors into reality</div>

          <div className={classes.talkBtnContainer}>
            <div className={classes.talkBtn}>
              <span>Let's talk</span>
              <AiOutlineArrowRight />
            </div>
          </div>

          <div className={classes.inspiration}>
            Let's empower <br />
            our greatest <br />
            dreams <br />
            together
          </div>
        </div>

        <div className={classes.heroImage}>
          <img src={Hero} alt="Metaphorlism" className={classes.img} />
        </div>
      </div>

      <div className={classes.teamSection}>
        <div className={classes.teamTitle}>
          <div>Our Team</div>
          <div className={classes.titleStyle}></div>
        </div>

        <MemberContent />
      </div>

      <div className={classes.serviceSection}>
        <div className={classes.serviceTitle}>
          <div>Our Services</div>
          <div className={classes.titleStyle}></div>
        </div>

        <div className={classes.serviceContent}>
          <div className={classes.row1}>
            <div className={classes.serviceProvide}>
              <div>Our services that we provide</div>
              <ol>
                <li>Good Service</li>
                <li>On-time guarantee</li>
                <li>Decent price</li>
              </ol>
            </div>
            <div className={classes.btnContainer}>
              Interested ? Want to see more ?
              <div className={classes.btn}>
                Services &nbsp;<AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <ServiceContent />
        </div>
      </div>
    </div>
  );
};

export default index;
