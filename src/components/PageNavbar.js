import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import LangContext from '../LangContext'
import { useContext } from 'react';

const langs = {
  English: {title: 'English'},
  French: {title: 'French'}
}


function PageNavbar() {

  const {t} = useTranslation();

  const { lang } = useContext(LangContext);

  function changeLang (l) {
    if (lang !== l) {
      i18n.changeLanguage(l);
      
    }
  }



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/Project2">Ottawa Tutoring</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Project2">{t('Navbar.Home')}</Nav.Link>
            <Nav.Link href="/Project2/Services">{t('Navbar.OurTutors')}</Nav.Link>
            <Nav.Link href='/Project2/StudyGroups'>{t('Navbar.StudyGroups')}</Nav.Link>
            <Nav.Link href="/Project2/Aboutus">{t('Navbar.AboutUs')}</Nav.Link>
            <NavDropdown title={lang} id="basic-nav-dropdown">
              {Object.keys(langs).map((lang) => (
                <NavDropdown.Item style={{ fontWeight: i18n.resolvedLanguage === lang ? 'bold' : 'normal' }} onClick={() => changeLang(lang)}>
                  {langs[lang].title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;

