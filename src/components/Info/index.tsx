import styles from "./styles.module.css";

type InfoProps = {
  Website: string[];
  Explorers: string[];
  Wallets: string[];
  Community: string[];
  SearchOn: string[];
  SourceCode: string[];
  ApiId: string;
  Chains: string[];
  Categories: string[];
};

function Info(props: InfoProps) {
  return (
    <div className={styles.info}>
      <h2>Info</h2>

      <div className={styles.infoWrapper}>
        <p>Website</p>
        <div className={styles.infoButtonsWrapper}>
          {props.Website.map((website, index) =>
            website.length > 0 ? <button key={index}>{website}</button> : null
          )}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <p>Explorers</p>
        <div className={styles.infoButtonsWrapper}>
          {props.Explorers.map((explorer, index) => (
            <button key={index}>{explorer}</button>
          ))}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <p>Wallets</p>
        <div className={styles.infoButtonsWrapper}>
          {props.Wallets.map((wallet, index) => (
            <button key={index}>{wallet}</button>
          ))}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <p>Community</p>
        <div className={styles.infoButtonsWrapper}>
          {props.Community.map((community, index) =>
            community.length > 0 ? (
              <button key={index}>{community}</button>
            ) : null
          )}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <p>Search on</p>
        <div className={styles.infoButtonsWrapper}>
          {props.SearchOn.map((search, index) => (
            <button key={index}>{search}</button>
          ))}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <p>Source code</p>
        <div className={styles.infoButtonsWrapper}>
          {props.SourceCode.map((source, index) => (
            <button key={index}>{source}</button>
          ))}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <p>API ID</p>
        <p>{props.ApiId}</p>
      </div>

      <div className={styles.infoWrapper}>
        <p>Chains</p>
        <div className={styles.infoButtonsWrapper}>
          {props.Chains.map((chain, index) => (
            <button key={index}>{chain}</button>
          ))}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <p>Categories</p>
        <div className={styles.infoButtonsWrapper}>
          {props.Categories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
