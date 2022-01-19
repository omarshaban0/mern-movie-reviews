let movies

export default class MoviesDAO {
    static async injectDB(conn) {
        if (movies) {
            return
        }
        try {
            movies = await conn.db(process.env.MOVIES_NS).collection("movies")
        } catch (e) {
            console.error(
                'Unable to establish a collection handle in moviesDAO: ${e}',
            )
        }
    }

    static async getMovies({
        filters = null,
        page = 0,
        moviesPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("title" in filters) {
                query = { $text: { $search: filters["title"] } }
            } else if ("_id" in filters) {
                query = { $text: { $search: filters["_id"] } }
            //} else if ("genre" in filters) {
            //    query = { $eq: { $search: filters["genre"] } }
            //} else if ("languages" in filters) {
            //    query = { "languages": { $eq: filters["language"] } }
            }
        }

        let cursor

        try {
            cursor = await movies
                .find(query)
        } catch (e) {
            console.error('Unable to issue find command, ${e}')
            return { moviesList: [], totalNumMovies: 0 }
        }

        const displayCursor = cursor.limit(moviesPerPage).skip(moviesPerPage * page)

        try {
            const moviesList = await displayCursor.toArray()
            const totalNumMovies = page === 0 ? await movies.countDocuments(query) : 0

            return { moviesList, totalNumMovies }
        } catch (e) {
            console.error(
                'Unable to convert cursor to array or problem counting documents, ${e}'
            )
            return { moviesList: [], totalNumMovies: 0 }
        }
    }
}


