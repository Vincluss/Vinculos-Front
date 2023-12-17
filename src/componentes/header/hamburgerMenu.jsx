import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Style from "../../css/headerUser.module.css";
import { useButtonMenu } from "./useButtonMenu";

export default function HamburgerMenu() {
  const { isOpen, setIsOpen, isVisible, setIsVisible } = useButtonMenu();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsVisible(true);

    if (isOpen) {
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  };

  const SideBar = () => {
    return (
      <div
        className={`${Style.sideBar} ${
          isOpen ? Style.modalEnter : Style.modalExit
        }`}
      >
        <ul>
          <Link href="/">
            <li>INÍCIO</li>
          </Link>
          <Link href="/sobre">
            <li>SOBRE</li>
          </Link>
          <details>
            <summary>INCLUSÃO</summary>
            <p>Encontrar talentos</p>
            <Link href="/usuario_vagas">
              <p>Vagas</p>
            </Link>
          </details>

          <details>
            <summary>CURSOS</summary>
            <Link href="/Cursos">
              <p>Para candidatos</p>
            </Link>
          </details>
        </ul>

        {/* {windowWidth < 720 && <ApoieVinculos />} */}
      </div>
    );
  };

  return (
    <>
      <button className={Style.menu} onClick={toggleMenu}>
        <Hamburger
          onClick={toggleMenu}
          color="#AFC2FF"
          size={40}
          label="Abrir o menu"
          toggled={isOpen}
          toggle={setIsOpen}
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        />
      </button>

      {isVisible && <SideBar />}
    </>
  );
}
