export const jobsData = [
    { id: 1, position: [getRandomLongitude(), getRandomLatitude()], title: 'Estágio Administração' },
    { id: 2, position: [getRandomLongitude(), getRandomLatitude()], title: 'Desenvolvedor Full Stack' },
    { id: 3, position: [getRandomLongitude(), getRandomLatitude()], title: 'Analista de Dados' },
    { id: 4, position: [getRandomLongitude(), getRandomLatitude()], title: 'Engenheiro de Software' },
    { id: 5, position: [getRandomLongitude(), getRandomLatitude()], title: 'Designer UX/UI' },
    { id: 6, position: [getRandomLongitude(), getRandomLatitude()], title: 'Gerente de Projetos' },
    { id: 7, position: [getRandomLongitude(), getRandomLatitude()], title: 'Analista de Segurança da Informação' },
    { id: 8, position: [getRandomLongitude(), getRandomLatitude()], title: 'Arquiteto de Soluções' },
    { id: 9, position: [getRandomLongitude(), getRandomLatitude()], title: 'Desenvolvedor Mobile' },
    { id: 10, position: [getRandomLongitude(), getRandomLatitude()], title: 'Analista de Sistemas' },
    { id: 11, position: [getRandomLongitude(), getRandomLatitude()], title: 'Engenheiro de Dados' },
    { id: 12, position: [getRandomLongitude(), getRandomLatitude()], title: 'Product Manager' },
    { id: 13, position: [getRandomLongitude(), getRandomLatitude()], title: 'Analista de Qualidade de Software' },
    { id: 14, position: [getRandomLongitude(), getRandomLatitude()], title: 'Desenvolvedor Front-end' },
    { id: 15, position: [getRandomLongitude(), getRandomLatitude()], title: 'Cientista de Dados' },
    { id: 16, position: [getRandomLongitude(), getRandomLatitude()], title: 'Engenheiro de DevOps' },
    { id: 17, position: [getRandomLongitude(), getRandomLatitude()], title: 'Analista de Redes' },
    { id: 18, position: [getRandomLongitude(), getRandomLatitude()], title: 'Scrum Master' },
    { id: 19, position: [getRandomLongitude(), getRandomLatitude()], title: 'Desenvolvedor Back-end' }
];

function getRandomLatitude() {
    const minLatitude = -46.915399;
    const maxLatitude = -46.633308;
    return Math.random() * (maxLatitude - minLatitude) + minLatitude;
}

function getRandomLongitude() {
    const minLongitude = -23.550520;
    const maxLongitude = -23.445017;
    return Math.random() * (maxLongitude - minLongitude) + minLongitude;
}
