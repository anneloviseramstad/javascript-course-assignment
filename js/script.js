document.querySelectorAll("#sizeOptions a").forEach((item) => {
  item.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the data-size attribute from the clicked link
    var size = this.getAttribute("data-size");

    // Update the button's text to show the selected size
    document.getElementById("sizeButton").textContent = size;
  });
});
