import Link from "next/link";
import Caduser from "@/src/componentes/cadastro_usuario";
import VLibras from "@/src/componentes/vlibras";

export default function Home() {
  return (
    <>
      <Caduser />
      <VLibras forceOnload={true} />

    </>
  );
}
