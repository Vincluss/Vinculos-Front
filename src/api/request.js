const baseUrl = 'http://localhost:8080';

export async function cadastrarCandidatoReq (candidato){
    const response = await fetch(`${baseUrl}/candidato/cadastrar_candidato`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(candidato)
    });

    if(!response.ok){
        throw {statusCode: response.status, message: "Falha ao cadastrar o candidato"}
    }

    return response.json();
}


export async function cadastrarEmpresaReq(empresa){
    const response = await fetch(`${baseUrl}/empresa/cadastrar_empresa`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(empresa)
    });

    if(!response.ok){
        throw {statusCode: response.status, message: "Falha ao cadastrar a empresa"}
    }

    return response.json();
}