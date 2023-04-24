import { useHttp } from "./http";

const useService = () => {
    const { loading, request, error, clearError } = useHttp();
    const apiBase = 'https://the-one-api.dev/v2';

    const getAllMovie = async () => {
        const res = await request(`${apiBase}/movie`);
        return res.docs.map((movie) => {
            return {
                id: movie._id,
                title: movie.name,
            }
        })
    }
    const getMovieById = async (id) => {
        const res = await request(`${apiBase}/movie/${id}`);
        return res
    }

    const getAllCharacter = async (limit, character) => {
        const options = character ? `?name=${character}` : '';
        const res = await request(`${apiBase}/character${options}?limit=${limit}}`);
        return res.docs.map((character) => {
            return {
                birth: character.birth,
                gender: character.gender,
                race: character.race ? character.race : "Информация отсутствует",
                spouse: character.spouse,
                wikiUrl: character.wikiUrl,
                id: character._id,
                name: character.name,
            }
        })
    }
    const getCharacterById = async (id) => {
        const res = await request(`${apiBase}/character/${id}`);
        const character = res.docs[0]
        return {
            birth: character.birth,
            death: character.death,
            gender: character.gender,
            hair: character.hair,
            height: character.height,
            name: character.name,
            race: character.race,
            realm: character.realm,
            spouse: character.spouse,
            wikiUrl: character.wikiUrl,
        }
    }
    const getQuote = async () => {
        const res = await request(`${apiBase}/quote`);
        return res
    }
    const getCharacterQuote = async (id) => {
        const res = await request(`${apiBase}/character/${id}/quote`);
        return res
    }


    return { loading, error, clearError, getAllMovie, getMovieById, getAllCharacter, getCharacterById, getCharacterQuote, getQuote }
}

export default useService;
