// Function to sort table columns
function sortTable(n) {
    const table = document.getElementById("eventsTable");
    const rows = Array.from(table.getElementsByTagName("TR")).slice(1); // Exclude header row
    const isAscending = table.getElementsByTagName("TH")[n].classList.toggle("asc");

    rows.sort((rowA, rowB) => {
        const cellA = rowA.getElementsByTagName("TD")[n].innerText;
        const cellB = rowB.getElementsByTagName("TD")[n].innerText;
        return isAscending
            ? cellA.localeCompare(cellB)
            : cellB.localeCompare(cellA);
    });

    rows.forEach(row => table.getElementsByTagName("TBODY")[0].appendChild(row));
}

// Function to filter table rows
document.getElementById("filter").addEventListener("keyup", function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#eventsTable tbody tr");

    rows.forEach(row => {
        const cells = row.getElementsByTagName("TD");
        const eventTitle = cells[2].textContent.toLowerCase();
        row.style.display = eventTitle.includes(filter) ? "" : "none";
    });
});
