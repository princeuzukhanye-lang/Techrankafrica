
const chart = [
  {
    rank: 1,
    app: "JOBJACK",
    developer: "Heine Bellingan & Christiaan van den Berg",
    country: "South Africa",
    users: 15400
  },
  {
    rank: 2,
    app: "CareerDad",
    developer: "Donovan Tiemie",
    country: "South Africa",
    users: 13456
  },
  {
    rank: 3,
    app: "HIRELY",
    developer: "Uzukhanye Mlonyeni",
    country: "South Africa",
    users: 11546,
    highlight: true
  },
  {
    rank: 4,
    app: "Career Agent",
    developer: "Founder credit to be confirmed",
    country: "South Africa",
    users: 9820
  },
  {
    rank: 5,
    app: "ITSAGO",
    developer: "Founder credit to be confirmed",
    country: "South Africa",
    users: 7400
  },
  {
    rank: 6,
    app: "Fambai CV",
    developer: "Founder credit to be confirmed",
    country: "Africa",
    users: 6200
  },
  {
    rank: 7,
    app: "JobsReady",
    developer: "Founder credit to be confirmed",
    country: "South Africa",
    users: 5100
  },
  {
    rank: 8,
    app: "AltaCV",
    developer: "Founder credit to be confirmed",
    country: "South Africa",
    users: 3900
  },
  {
    rank: 9,
    app: "Elevait",
    developer: "Founder credit to be confirmed",
    country: "Nigeria",
    users: 2700
  },
  {
    rank: 10,
    app: "TomParo",
    developer: "Founder credit to be confirmed",
    country: "Nigeria",
    users: 1800
  }
];

const body = document.getElementById("chart-body");
const search = document.getElementById("search");

function formatNumber(value) {
  return Number(value).toLocaleString("en-US");
}

function renderChart(filter = "") {
  const query = filter.toLowerCase().trim();

  const rows = chart.filter(item =>
    `${item.app} ${item.developer} ${item.country}`
      .toLowerCase()
      .includes(query)
  );

  body.innerHTML = rows.map(item => `
    <tr class="${item.highlight ? "highlight-row" : ""}">
      <td>
        <span class="rank-number">
          ${String(item.rank).padStart(2, "0")}
        </span>
      </td>

      <td>
        <span class="app-name">${item.app}</span>
        <span class="developer">${item.developer}</span>
      </td>

      <td>
        <span class="country">${item.country}</span>
      </td>

      <td class="users-cell">
        ${formatNumber(item.users)}
      </td>
    </tr>
  `).join("");

  if (!rows.length) {
    body.innerHTML = `
      <tr>
        <td colspan="4">No applications found.</td>
      </tr>
    `;
  }
}

search.addEventListener("input", event => {
  renderChart(event.target.value);
});

renderChart();
