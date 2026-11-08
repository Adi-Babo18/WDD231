import { saveReview } from "./storage.js";

const search = document.querySelector("#search");
const genre = document.querySelector("#genre");
const movieCards = document.querySelectorAll(".movie-card");

search.addEventListener("input", searchMovies);
genre.addEventListener("change", filterMovies);

function searchMovies() {
  const searchText = search.value.toLowerCase();
  movieCards.forEach((card) => {
    const movieName = card
      .querySelector("h3")
      .textContent.toLowerCase();
      
    if (movieName.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterMovies() {
  const selectedGenre = genre.value;
  movieCards.forEach((card) => {
    const movieGenre = card.dataset.genre;

    if (
      selectedGenre === "all" ||
      selectedGenre === movieGenre
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const reviewForm = document.querySelector("#review-form-element");
const message = document.querySelector("#message");

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const movieName = document.querySelector("#movie-name").value;
  const rating = document.querySelector("#rating").value;
  const reviewText = document.querySelector("#review").value;
  const review = {
    movie: movieName,
    rating: rating,
    review: reviewText,
  };

  saveReview(review);
  message.textContent = "Your review was saved!";
  message.classList.add("show-message");
  reviewForm.reset();
});

movieCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
  card.classList.add("movie-card-animation");
});