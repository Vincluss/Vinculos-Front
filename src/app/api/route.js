import Ably from "ably/promises";

export async function GET(request) {
    const client = new Ably.Realtime("FqGiJw.1FEytA:wP2iYOZiPp8bBj4qsh4r331hXpN7ZV0Mi3RwrLuePuI");
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    return Response.json(tokenRequestData);
};

