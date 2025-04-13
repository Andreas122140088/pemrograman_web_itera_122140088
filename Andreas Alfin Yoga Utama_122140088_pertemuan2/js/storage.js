const STORAGE_KEY = 'tasks';

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const loadTasks = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export const clearTasks = () => {
  localStorage.removeItem(STORAGE_KEY);
};
