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

    const getAllCharacter = async () => {
        const res = await request(`${apiBase}/character`);
        return res.docs.map((character) => {
            return {
                birth: character.birth,
                gender: character.gender,
                race: character.race,
                spouse: character.spouse,
                wikiUrl: character.wikiUrl,
                id: character._id,
                name: character.name,
            }
        })
    }
    const getCharacterById = async (id) => {
        const res = await request(`${apiBase}/character/${id}`);
        return res
    }


    return { loading, error, clearError, getAllMovie, getMovieById, getAllCharacter, getCharacterById }
}

export default useService;
