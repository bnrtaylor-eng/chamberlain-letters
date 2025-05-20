
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("letterContainer");
  const searchInput = document.getElementById("search");
  const yearFilter = document.getElementById("yearFilter");
  const recipientFilter = document.getElementById("recipientFilter");
  const toggleViewBtn = document.getElementById("toggleView");
  const toggleThemeBtn = document.getElementById("toggleTheme");

  let currentView = "list";

  function render(letters) {
    container.innerHTML = "";
    if (currentView === "list") {
      const ul = document.createElement("ul");
      letters.forEach(letter => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="letter.html?file=../tei/${letter.filename}">${letter.number}. ${formatDate(letter.date)} – ${letter.recipient}</a>`;
        ul.appendChild(li);
      });
      container.className = "list-view";
      container.appendChild(ul);
    } else {
      const table = document.createElement("table");
      table.innerHTML = "<thead><tr><th>#</th><th>Date</th><th>Recipient</th><th>Link</th></tr></thead>";
      const tbody = document.createElement("tbody");
      letters.forEach(letter => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${letter.number}</td>
          <td>${formatDate(letter.date)}</td>
          <td>${letter.recipient}</td>
          <td><a href="letter.html?file=../tei/${letter.filename}">View</a></td>
        `;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      container.className = "table-view";
      container.appendChild(table);
    }
  }

  function formatDate(dateStr) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateStr);
    return isNaN(date) ? dateStr : date.toLocaleDateString(undefined, options);
  }

  function filterAndRender() {
    let filtered = LETTERS;

    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(letter =>
        letter.recipient.toLowerCase().includes(searchTerm) ||
        formatDate(letter.date).toLowerCase().includes(searchTerm) ||
        letter.number.toString() === searchTerm
      );
    }

    const year = yearFilter.value;
    if (year) {
      filtered = filtered.filter(letter => letter.date.startsWith(year));
    }

    const recipient = recipientFilter.value;
    if (recipient) {
      filtered = filtered.filter(letter => letter.recipient === recipient);
    }

    render(filtered);
  }

  function populateFilters() {
    const years = [...new Set(LETTERS.map(l => l.date.substring(0, 4)))].sort();
    const recipients = [...new Set(LETTERS.map(l => l.recipient))].sort();

    years.forEach(year => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });

    recipients.forEach(recipient => {
      const option = document.createElement("option");
      option.value = recipient;
      option.textContent = recipient;
      recipientFilter.appendChild(option);
    });
  }

  toggleViewBtn.addEventListener("click", () => {
    currentView = currentView === "list" ? "table" : "list";
    toggleViewBtn.textContent = currentView === "list" ? "Switch to Table View" : "Switch to List View";
    filterAndRender();
  });

  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  searchInput.addEventListener("input", filterAndRender);
  yearFilter.addEventListener("change", filterAndRender);
  recipientFilter.addEventListener("change", filterAndRender);

  populateFilters();
  render(LETTERS);
});
