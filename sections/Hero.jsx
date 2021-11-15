import Link from 'next/link';

import Container from '../components/Container';
import Title from '../components/Title';
import ColorText from '../components/ColorText';

import Button from '../components/Button';
import { COLORS } from '../data/theme';
import styles from '../styles/sections/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <Title className={styles.title}>
          Bienvenido a <br />
          <ColorText color={COLORS.red}>tu</ColorText>{' '}
          <ColorText color={COLORS.blue}>solucionario</ColorText> de{' '}
          <ColorText color={COLORS.green}>matemáticas</ColorText>
        </Title>
        <p className={styles.description}>
          Cursos de matemáticas gratis para estudiantes escolares y universitarios
        </p>
        <div className={styles.buttons}>
          <Link href='/materias'>
            <a>
              <Button className={styles.btn} color={COLORS.green}>
                Ver materias
              </Button>
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
