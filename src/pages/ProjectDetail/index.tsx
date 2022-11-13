import React from 'react';
import classes from './index.module.css';
import { useLocation,useNavigate } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

const index = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state.project;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className={classes.container}>
            <FiArrowLeftCircle className={classes.back} onClick={handleGoBack}/>
            <div className={classes.projectImage}>
                <img
                    className={classes.image}
                    src={data.image}
                />
            </div>
            <div className={classes.projectContent}>
                <div className={classes.project}>
                    <div className={classes.projectType}>
                        {data.type}
                    </div>
                    <div className={classes.projectName}>
                        {data.name}
                    </div>
                </div>
                <div className={classes.projectBanner}>
                    <div className={classes.technology}>
                        <span>Technologies: </span>
                        <ul>
                        {
                            data.technology.map((tech : string,index: Number) => {
                                return (
                                    <li className={classes.techName}>
                                        {index !== data.technology.length -1 ? `${tech}, ` : tech}
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className={classes.description}>
                        <span>Description: </span>
                        {data.description}
                    </div>
                    <div className={classes.producer}>
                        <span>Produced By: </span>
                        {
                            data.producer.map((producer: string, index: Number) => {
                                return (
                                    <span className={classes.producerName}>
                                        {index !== data.producer.length -1 ? `${producer} & ` : producer}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default index;