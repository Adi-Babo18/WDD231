const movies = {
  1: {
    title: "Inception",
    description:
      "A thief enters people’s dreams to steal information.",
  },

  2: {
    title: "The Batman",
    description:
      "Batman investigates a mystery in Gotham City.",
  },

  3: {
    title: "Barbie",
    description:
      "Barbie begins a journey of self-discovery.",
  },
};

const pageURL = new URLSearchParams(window.location.search);
const movieID = pageURL.get("id");
const movie = movies[movieID];

const title = document.querySelector("#movie-title");
const description = document.querySelector("#movie-description");

if (movie) {
  title.textContent = movie.title;
  description.textContent = movie.description;
} else {
  title.textContent = "Movie not found";

  description.textContent =
    "We could not find information for this movie.";
}