import styles from './LoadingList.module.scss';
import {Spinner} from "react-bootstrap";

interface LoadingListProps { }

export const LoadingList = ({ }: LoadingListProps) => (
  <div className={styles.loadingList}>
    <Spinner className={styles.spinner} animation="grow" />
  </div>
);
