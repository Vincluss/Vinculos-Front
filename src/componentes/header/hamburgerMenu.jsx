import { Squash as Hamburger } from "hamburger-react";
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
          <li>INÍCIO</li>
          <li>SOBRE</li>
          <details>
            <summary>INCLUSÃO</summary>
            <p>Encontrar talentos</p>
            <p>Vagas</p>
          </details>

          <details>
            <summary>CURSOS</summary>
            <p>Para candidatos</p>
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
          color="#E8A023"
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
