import { TITLE } from "@/configs/constants";
import { Text } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";

export default function IntroductionPage() {
  useDocumentTitle(`Introduction - ${TITLE}`);
  return (
    <Text size="lg" my="md" mx="auto">
      Introduction page
    </Text>
  );
}
