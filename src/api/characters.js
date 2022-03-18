const URL = "https://rickandmortyapi.com/api/character/"

export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}?page=30`);
        const response = await request.json();
        return response.results;
    } catch (err) {
        throw Error(err);
    }
}

export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}${id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

export async function getEpisodeName(url){
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name;
    }catch (err){
        throw Error(err);
    }
}
