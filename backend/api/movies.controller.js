import MoviesDao from "../dao/moviesDAO.js"

export default class MoviesController {
    static async apiGetMovies(req, res, next) {
        const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.title) {
            filters.title = req.query.title
        } else if (req.query.genre) {
            filters.genre = req.query.genre
        } else if (req.query._id) {
                filters.id = req.query._id
            //} else if (req.query.languages) {
            //    filters.languages = req.query.languages
        }

        const { moviesList, totalNumMovies } = await MoviesDao.getMovies({
            filters,
            page,
            moviesPerPage,
        })

        let response = {
            movies: moviesList,
            page: page,
            filters: filters,
            entries_per_page: moviesPerPage,
            total_results: totalNumMovies,
        }
        res.json(response)
    }
}