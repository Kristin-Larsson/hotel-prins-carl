// eslint-disable-next-line
import styled from 'styled-components'
import { useContext } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LocaleContext from "LocaleContext";
import i18n from "../../i18n";

function Navigation () {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className={locale === 'en' ? 'ms-auto' : 'me-auto'}>
            <NavDropdown title={t('language')} id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => changeLocale('sv')}>Svenska</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Navigation

const Navbar = styled.div`
position: absolute;
right: 40%;
top: 12px;
background-color: white;
@media (min-width: 668px) {
right: 25px;
  }
`

const Container = styled.div`
`