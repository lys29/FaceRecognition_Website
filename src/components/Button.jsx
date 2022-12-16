import styles from "./Button.module.css";

const Button = ({ children, variant }) => {
  return variant === "primary" ? (
    <div>
      <button className={styles.primary}>{children}</button>
    </div>
  ) : (
    <div>
      <button className={styles.secondary}>{children}</button>
    </div>
  );
}

export default Button;