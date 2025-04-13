import { renderNavbar } from './navbar.js';
import { saveTasks, loadTasks } from './storage.js'; // Import storage functions

renderNavbar(); // Tampilkan navbar sebelum elemen lainnya
// Navigation handlers
window.addEventListener('loadHome', () => renderTasks(loadTasks()));
window.addEventListener('loadCalendar', () => renderCalendarPage());

// Personal Dashboard App
class Task {
  constructor(title, description) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.createdAt = new Date().toISOString();
  }

  getFormattedDate() {
    return new Date(this.createdAt).toLocaleString();
  }
}

// Rendering Utils
const renderTasks = (tasks) => {
  const container = document.getElementById('taskList');
  container.innerHTML = '';
  tasks.forEach(task => {
    const item = document.createElement('div');
    item.className = 'task-item bg-white p-4 rounded shadow mb-2';
    item.innerHTML = `
      <h3 class="text-lg font-bold">${task.title}</h3>
      <p>${task.description}</p>
      <h4 class="text-gray-500">Scheduled for: ${new Date(task.createdAt).toLocaleString()}</h4>
      <small class="text-gray-500">Created at: ${new Task(task.title, task.description).getFormattedDate()}</small>
      <div class="mt-2 space-x-2">
        <button class="edit-btn bg-yellow-400 text-white px-2 py-1 rounded" data-id="${task.id}">Edit</button>
        <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded" data-id="${task.id}">Delete</button>
      </div>
    `;
    container.appendChild(item);
  });
};

const getFormData = () => ({
  title: document.getElementById('taskTitle').value,
  description: document.getElementById('taskDesc').value
});

// Calendar Rendering
const renderCalendar = () => {
  const dateContainer = document.getElementById('calendar');
  const today = new Date();
  dateContainer.textContent = `📅 Hari ini: ${today.toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })}`;
};

// Weather API Fetching (with geolocation support & multi-day forecast + swipe animation)
const fetchWeather = async () => {
  const weatherEl = document.getElementById('weather');
  const locationEl = document.getElementById('location');
  const forecastEl = document.getElementById('forecast');

  const getWeather = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`);
      const data = await res.json();

      const current = data.current_weather;
      weatherEl.textContent = `🌤️ Cuaca saat ini: ${current.temperature}°C, kode: ${current.weathercode}`;

      const dailyDates = data.daily.time;
      const tempsMax = data.daily.temperature_2m_max;
      const tempsMin = data.daily.temperature_2m_min;
      const precipitation = data.daily.precipitation_sum;
      const codes = data.daily.weathercode;

      const getIcon = (code) => {
        if (code === 0) return '☀️';
        if ([1, 2, 3].includes(code)) return '🌤️';
        if ([45, 48].includes(code)) return '🌫️';
        if ([51, 53, 55, 61, 63, 65].includes(code)) return '🌦️';
        if ([66, 67, 71, 73, 75, 77].includes(code)) return '❄️';
        if ([80, 81, 82].includes(code)) return '🌧️';
        if ([95, 96, 99].includes(code)) return '⛈️';
        return '❓';
      };

      forecastEl.innerHTML = '<h4 class="font-semibold mt-2">📆 Perkiraan Cuaca:</h4>';
      const row = document.createElement('div');
      row.className = 'flex flex-wrap justify-center gap-4 mt-4 mx-auto px-8 max-w-screen-xl';
      // scroll not needed due to wrapping layout

      for (let i = 0; i < dailyDates.length; i++) {
        const card = document.createElement('div');
        card.className = 'w-36 p-3 bg-white rounded shadow text-center transform transition-all duration-300 hover:scale-105';
        const icon = getIcon(codes[i]);
        const dateStr = new Date(dailyDates[i]).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' });

        card.innerHTML = `
          <div class="text-2xl">${icon}</div>
          <div class="text-sm mt-1 font-medium">${dateStr}</div>
          <div class="text-xs text-gray-600">🌡️ ${tempsMin[i]}°C - ${tempsMax[i]}°C</div>
          <div class="text-xs text-blue-500">💧 ${precipitation[i]}mm</div>
        `;
        row.appendChild(card);
      }

      forecastEl.appendChild(row);
    } catch (error) {
      weatherEl.textContent = 'Gagal memuat data cuaca';
    }
  };

  const showLocation = async (lat, lon) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
      const data = await res.json();
      locationEl.textContent = `📍 Lokasi: ${data.address.city || data.address.town || data.address.village || 'Tidak diketahui'}, ${data.address.country}`;
    } catch (error) {
      locationEl.textContent = '📍 Lokasi tidak diketahui';
    }
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude);
        showLocation(latitude, longitude);
      },
      () => {
        weatherEl.textContent = 'Gagal mendapatkan lokasi, menampilkan cuaca default';
        locationEl.textContent = '📍 Lokasi default: Jakarta, Indonesia';
        getWeather(-6.2, 106.8);
      }
    );
  } else {
    weatherEl.textContent = 'Geolocation tidak didukung';
    locationEl.textContent = '📍 Lokasi default: Jakarta, Indonesia';
    getWeather(-6.2, 106.8);
  }
};

// Main Functionality
let tasks = loadTasks(); // Using the imported loadTasks

const addTask = (task) => {
  tasks.push(task);
  saveTasks(tasks);  // Using the imported saveTasks
  renderTasks(tasks);
};

const updateTask = (id, newTitle, newDesc) => {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, title: newTitle, description: newDesc } : task
  );
  saveTasks(tasks);  // Using the imported saveTasks
  renderTasks(tasks);
};

const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(tasks);  // Using the imported saveTasks
  renderTasks(tasks);
};

// Event Handlers
const handleFormSubmit = async (e) => {
  e.preventDefault();
  const { title, description } = getFormData();
  if (!title || !description) return alert("Please fill out all fields");
  const newTask = new Task(title, description);
  addTask(newTask);
  e.target.reset();
};

const handleTaskActions = (e) => {
  const id = Number(e.target.dataset.id);
  if (e.target.classList.contains('delete-btn')) {
    deleteTask(id);
  }
  if (e.target.classList.contains('edit-btn')) {
    const task = tasks.find(t => t.id === id);
    const newTitle = prompt("Edit Title", task.title);
    const newDesc = prompt("Edit Description", task.description);
    if (newTitle && newDesc) updateTask(id, newTitle, newDesc);
  }
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  fetchWeather();
  renderTasks(tasks);
  document.getElementById('taskForm').addEventListener('submit', handleFormSubmit);
  document.getElementById('taskList').addEventListener('click', handleTaskActions);
});
