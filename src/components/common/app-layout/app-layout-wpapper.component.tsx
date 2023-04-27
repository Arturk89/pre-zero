import { Box } from "@mui/material";
import styles from "./style.module.scss";

type Props = {
  children: React.ReactNode;
};

export function ApplicationWrapper({ children }: Props) {
  return <Box className={styles.appWrapper}>{children}</Box>;
}
