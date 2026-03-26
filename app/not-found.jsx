import WebLayout from "@/components/layout/WebLayout";
import styles from "../styles/NotFound.module.css";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";

const NotFound = () => {
  return (
    <WebLayout>
      <main className={styles.container}>
        <h1 className={styles.oopsText}>Oops!</h1>

        <h2 className={styles.errorCode}>404 - Page Not Found</h2>

        <p className={styles.description}>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>

        <ButtonComponent title="Go to Homepage" href="/" />
      </main>
    </WebLayout>
  );
};

export default NotFound;
