import http from "../services/http-common";

class MovieDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }

    get(id) {
        return http.get(`/id/${id}`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`?${by} = ${query}&page=${page}`);
    }

    createReview(data) {
        return http.post("/review", data);
    }

    updateReview(data) {
        return http.put("/review", data);
    }

    deleteReview(id) {
        return http.delete(`/review?id=${id}`);
    }

    getGenres(id) {
        return http.get(`/genres`);
    }
}

export default new MovieDataService();