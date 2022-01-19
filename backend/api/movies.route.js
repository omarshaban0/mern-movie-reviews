import express from "express"
import MoviesCtrl from "./movies.controller.js"
import ReviewCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(MoviesCtrl.apiGetMovies)

router
    .route("/review")
    .post(ReviewCtrl.apiPostReview)
    .put(ReviewCtrl.apiUpdateReview)
    .delete(ReviewCtrl.apiDeleteReview)

export default router