import Link from 'next/link';
import HomeUsuario from '@/src/componentes/home_usuario';
import Vagas from '@/src/componentes/vagas';
import Candidatos from '@/src/componentes/inclusao_home';
import Cursos from '@/src/componentes/cursos_home';
import Footer from '@/src/componentes/Footer';

export default function Usuario() {
    return (
        <>
            <HomeUsuario />
            <Vagas />
            <Candidatos />
            <Cursos />
            <Footer />
        </>
    )
}