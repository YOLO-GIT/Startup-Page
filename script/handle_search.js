let selectedEngine = "google"; // Default search engine

// Handle Dropdown Selection
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    selectedEngine = this.getAttribute("data-engine");
    document.getElementById("dropdown-button").innerHTML =
      this.innerText +
      ' <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /></svg>';
  });
});

// Search Function
function performSearch() {
  const query = document.getElementById("search-input").value.trim();
  if (!query) return; // Prevent empty search

  let searchUrl = "";
  switch (selectedEngine) {
    case "google":
      searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      break;
    case "bing":
      searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
      break;
    case "duckduckgo":
      searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
      break;
    case "youtube":
      searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        query
      )}`;
      break;
  }

  window.location.href = window.open(searchUrl, "_blank");
}

// Press "Enter" to Search
document
  .getElementById("search-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });
