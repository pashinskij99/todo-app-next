import styles from './Header.module.scss';
import ReactLogo from '../../assets/react.svg'
import {Button, Container, Navbar} from "react-bootstrap";
import MoonIcon from '../../assets/icon-moon.svg'
import SunIcon from '../../assets/icon-sun.svg'

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => {
  const theme = 'light'
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <ReactLogo />{' '}
          Todo App
        </Navbar.Brand>
        {
          theme === 'light'
            ? <Button variant="light"><MoonIcon/></Button>
            : <Button variant="light"><SunIcon/></Button>
        }

      </Container>
    </Navbar>
  );
}
