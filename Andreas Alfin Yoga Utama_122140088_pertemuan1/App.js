// ToDo List
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Bersihkan daftar sebelumnya

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = `${todo.text}  `;
    
    const completeButton = document.createElement('button');
    completeButton.textContent = todo.completed ? 'Batal' : 'Selesai';
    completeButton.onclick = () => toggleComplete(index);

    const statusSymbol = document.createElement('span');
    statusSymbol.textContent = todo.completed ? ' ✓ ' : ' ✗ ';
    statusSymbol.style.color = todo.completed ? 'green' : 'red';
    statusSymbol.style.fontWeight = 'bold';
    li.prepend(statusSymbol); 
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.onclick = () => deleteItem(index);

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

function handleEnter(event) {
  // Cek apakah tombol yang ditekan adalah Enter (key code 13)
  if (event.key === 'Enter') {
    addItem(); // Panggil fungsi untuk menambahkan item
  }
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addItem() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();

  if (text === '') {
    alert('Tidak boleh kosong!');
    return;
  }

  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push({ text, completed: false });
  saveTodos(todos);
  input.value = '';
  loadTodos();
}

function toggleComplete(index) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos[index].completed = !todos[index].completed;
  saveTodos(todos);
  loadTodos();
}

function deleteItem(index) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.splice(index, 1);
  saveTodos(todos);
  loadTodos();
}

window.onload = loadTodos;

// Kalkulator
function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
    case 'power':
      result = Math.pow(num1, num2);
      break;
    case 'sqrt':
      result = Math.sqrt(num1);
      break;
    case 'modulus':
      result = num1 % num2;
      break;
    default:
      result = 'Operasi tidak valid';
  }

  document.getElementById('result').textContent = result;
}

// Validasi Form
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const messageElement = document.getElementById('validationMessage');

  if (name.length <= 3) {
    messageElement.textContent = 'Nama harus lebih dari 3 karakter.';
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageElement.textContent = 'Email tidak valid.';
    return false;
  }

  if (password.length < 8) {
    messageElement.textContent = 'Password harus minimal 8 karakter.';
    return false;
  }

  messageElement.textContent = 'Validasi berhasil!';
  return true;
}