import styles from "./styles.module.css";

type LogoProps = {
  size?: "normal" | "large";
};

export default function Logo({ size = "normal" }: LogoProps) {
  return (
    <div className={size === "large" ? styles.logoLarge : styles.logoColor}>
      <span
        style={size !== "large" ? { color: "#1459f1" } : { color: "white" }}
      >
        Coin
      </span>
      <span>Wise.</span>
    </div>
  );
}
