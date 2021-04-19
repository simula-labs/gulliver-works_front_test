import React from "react";
import styles from "./style.module.scss";
import image from "../../images/Rectangle77.png";
import Avatar from "../Avatar/index";

const RecruitmentCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img src={image} className={styles.image} />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>
            三度の飯よりReact!フロントエンドエキスパートになりたいエンジニア募集
          </p>
          <div className={styles.company}>
            <Avatar />
            <div className={styles.name}>
              <p>株式会社</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitmentCard;
