import MainSection from '@/assets/Main-section.png'
import { LINKS, TITLE } from '@/configs/constants'
import {
  Center,
  Container,
  Image,
  Text,
  TypographyStylesProvider,
} from '@mantine/core'
import { useDocumentTitle } from '@mantine/hooks'
import { styles } from './index.css'

export default function IntroductionPage() {
  useDocumentTitle(`Introduction - ${TITLE}`)
  return (
    <Container fluid p={'md'}>
      <Center>
        <Image src={MainSection} alt="main-section" />
      </Center>
      <TypographyStylesProvider pt={'md'}>
        Welcome to the Persona 4 Golden Helper! This website is designed to help
        you with the game Persona 4 Golden. You can find answers to the
        questions in the game, as well as guides to help you with the game.
        Enjoy your stay!{' '}
        <Text
          component={'a'}
          href={LINKS.twitter}
          target="_blank"
          className={styles.text}
        >
          - @kurumeii
        </Text>
      </TypographyStylesProvider>
    </Container>
  )
}
