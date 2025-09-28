function generateCalendar(containerId, year, month, highlightDay) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = `<table class="calendar"><caption>${monthNames[month]} ${year}</caption><tr>`;
  days.forEach(d => html += `<th>${d}</th>`);
  html += "</tr><tr>";

  for (let i = 0; i < firstDay; i++) html += "<td></td>";

  for (let day = 1; day <= daysInMonth; day++) {
    if ((firstDay + day - 1) % 7 === 0 && day !== 1) html += "</tr><tr>";
    if (day === highlightDay) {
      html += `<td style="background:#ffd700;font-weight:bold;">${day}</td>`;
    } else {
      html += `<td>${day}</td>`;
    }
  }
  html += "</tr></table>";
  container.innerHTML = html;
}
generateCalendar("calendarA", 2002, 10, 9);

generateCalendar("calendarB", 2005, 0, 5);
