import Link from "next/link";
import Login from "@/src/componentes/login_usuario";
import VLibras from "@/src/componentes/vlibras";

export default function Home() {
  return (
    <>
      <Login />
      <VLibras forceOnload={true} />
    </>
  );
}
