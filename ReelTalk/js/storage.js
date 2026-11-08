export function saveReview(review) {
  const oldReviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

  oldReviews.push(review);

  localStorage.setItem(
    "reviews",
    JSON.stringify(oldReviews)
  );
}

export function getReviews() {
  return JSON.parse(localStorage.getItem("reviews")) || [];
}