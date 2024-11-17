const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

// Habilitar o deshabilitar el botón según el estado del input
input.addEventListener('input', () => {
    addBtn.disabled = input.value.trim() === '';
});

// Evento para agregar una nueva tarea
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input.value.trim(); // Evitar espacios innecesarios
    if (text !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        input.value = '';
        addBtn.disabled = true; // Deshabilitar botón después de agregar
        updateEmptyMessage();
    }
});

// Función para crear el botón de eliminar
function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item); // Eliminar la tarea
        updateEmptyMessage(); // Verificar si hay tareas
    });

    return deleteBtn;
}

// Actualizar el mensaje "No tienes tareas pendientes"
function updateEmptyMessage() {
    empty.style.display = ul.children.length === 0 ? 'block' : 'none';
}

// Inicializar estado del mensaje vacío
updateEmptyMessage();
