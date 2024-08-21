function showtable(button) {
    const table = button.nextElementSibling;
    if (table.style.display === "none") {
        table.style.display = "table";
        button.textContent = "Hide Table";
    } else {
        table.style.display = "none";
        button.textContent = "Show Table";
    }
}