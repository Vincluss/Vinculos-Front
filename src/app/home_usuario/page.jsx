import Link from 'next/link';
import HomeUsuario from '@/src/componentes/home_usuario';
import Vagas from '@/src/componentes/vagas';
import Candidatos from '@/src/componentes/inclusao';
import Cursos from '@/src/componentes/cursos';

export default function Usuario() {
    return (
        <>
            <HomeUsuario />
            <Vagas />
            <Candidatos />
            <Cursos />
        </>
    )
}