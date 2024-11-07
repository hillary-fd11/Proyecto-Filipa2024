// Muestra u oculta el modal del calendario
function toggleCalendar() {
    const modal = document.getElementById("calendarModal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Genera el calendario en el modal
function generateCalendar() {
    const calendarElement = document.getElementById("calendar");
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    let calendarHTML = `<h4>${month} ${year}</h4><table><tr>`;
    const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    daysOfWeek.forEach(day => calendarHTML += `<th>${day}</th>`);
    calendarHTML += `</tr><tr>`;

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i < firstDay; i++) {
        calendarHTML += `<td></td>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        calendarHTML += `<td>${i}</td>`;
        if ((i + firstDay - 1) % 7 === 0) calendarHTML += `</tr><tr>`;
    }

    calendarHTML += `</tr></table>`;
    calendarElement.innerHTML = calendarHTML;
}

// Cargar el calendario al abrir el modal
document.addEventListener("DOMContentLoaded", generateCalendar);