// This script assumes a global `letters` array is loaded from letters.js
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("lettersContainer");
  const searchInput = document.getElementById("searchInput");
  const recipientFilter = document.getElementById("recipientFilter");

  // Group letters by year
  const grouped = {};
  const recipients = new Set();

  letters.forEach(letter => {
    const year = new Date(letter.date).getFullYear();
    const group = grouped[year] || [];
    group.push(letter);
    grouped[year] = group;

    if (letter.recipient) {
      recipients.add(letter.recipient);
    }
  });

  // Populate recipient filter
  Array.from(recipients).sort().forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    recipientFilter.appendChild(option);
  });

  // Fuse.js setup
  const fuse = new Fuse(letters, {
    keys: ["recipient", "title", "preview", "date"],
    threshold: 0.3,
  });

  function renderLetters(filtered = letters) {
    container.innerHTML = "";

    const groupedFiltered = {};
    filtered.forEach(letter => {
      const year = new Date(letter.date).getFullYear();
      if (!groupedFiltered[year]) groupedFiltered[year] = [];
      groupedFiltered[year].push(letter);
    });

    Object.keys(groupedFiltered).sort().forEach(year => {
      const section = document.createElement("div");
      const header = document.createElement("div");
      const list = document.createElement("ul");
      list.className = "letter-list";
      list.id = "y" + year;

      header.className = "year-header";
      header.textContent = year;
      header.onclick = () => {
        list.style.display = list.style.display === "none" ? "block" : "none";
      };

      groupedFiltered[year].forEach(letter => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `letter.html?file=tei/${letter.filename}`;
        link.textContent = `Letter ${letter.number} – To ${letter.recipient || "Unknown"}`;
        li.appendChild(link);

        if (letter.preview) {
          const snippet = document.createElement("div");
          snippet.innerHTML = `<small>${letter.preview}</small>`;
          li.appendChild(snippet);
        }

        list.appendChild(li);
      });

      section.appendChild(header);
      section.appendChild(list);
      container.appendChild(section);
    });
  }

  renderLetters();

  searchInput.addEventListener("input", function () {
    const results = fuse.search(this.value);
    const filtered = results.map(r => r.item);
    renderLetters(filtered);
  });

  recipientFilter.addEventListener("change", function () {
    const selected = this.value;
    if (!selected) {
      renderLetters();
    } else {
      const filtered = letters.filter(l => l.recipient === selected);
      renderLetters(filtered);
    }
  });
});
