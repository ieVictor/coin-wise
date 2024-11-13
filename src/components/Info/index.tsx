import styles from "./styles.module.css";
type InfoProps = {
  Website: string[];
};
function Info(props: InfoProps) {
  return (
    <div className={styles.info}>
      <h2>Info</h2>
      <div className={styles.infoWrapper}>
        <p>Website</p>
        <div className={styles.infoButtonsWrapper}>
          {props.Website.map((website, index) => (
            <button key={index}>{website}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
