"use client";
import { CiUser } from "react-icons/ci";
import Style from "../../css/headerUser.module.css";
import { useButtonMenu } from "./useButtonMenu";
import { ModalCandidatos } from "../modal_candidatos";

export default function User() {
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


  const SideBarUser = () => {
    return (
      <div
        className={`${Style.sideBarUser} ${
          isOpen ? Style.modalEnterUser : Style.modalExitUser
        }`}
      >
        <ul>
          <li>Alterar cadastro</li>
          <li>Cancelar cadastro</li>
          <li>Dados pessoais</li>
          <li>Sair</li>
        </ul>

        {/* {windowWidth < 720 && <ApoieVinculos />} */}
      </div>
    );
  };

  return (
    <>
      <button
        role="button"
        type=""
        aria-label="Abra menu de usuário"
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded="false"
        className={Style.btnUser}
        toggled={isOpen}
        toggle={setIsOpen}
        onClick={toggleMenu}
      >
        <CiUser size={48} />
      </button>
      {isVisible && <SideBarUser />}
    </>
  );
}
