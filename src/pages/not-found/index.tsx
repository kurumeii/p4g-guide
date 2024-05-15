import NotFoundImg from "@/assets/404.png";
import { TITLE } from "@/configs/constants";
import { Button, Container, Group, Image } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { styles } from "./index.css";

export default function NothingFoundPage() {
  useDocumentTitle(`${TITLE}- Page not found`);
  const nav = useNavigate();
  return (
    <Container className={styles.root}>
      <div className={styles.inner}>
        <Image
          src={NotFoundImg}
          alt="Not-found-page"
          className={styles.image}
        />
        <Group justify="center">
          <Button
            component="a"
            onClick={() => nav("/", { replace: true })}
            size="md"
          >
            Take me back to home page
          </Button>
        </Group>
      </div>
    </Container>
  );
}
