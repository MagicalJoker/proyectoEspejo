import { TaskManager } from './Models/TaskManager.js';
const manager = new TaskManager();
const formulario = document.querySelector('#form-tareas');
const inputTitulo = document.querySelector('#input-titulo');
const selectPrioridad = document.querySelector('#select-prioridad');
const listaContenedor = document.querySelector('#lista-tareas');
const loadingState = document.querySelector('#loading-state');
const botonesFiltro = document.querySelectorAll('.btn-filtro');
async function inicializarApp() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    loadingState.style.display = 'none';
    pintarTareas();
}
function pintarTareas() {
    listaContenedor.innerHTML = '';
    manager.getTareas().forEach(tarea => {
        const li = document.createElement('li');
        li.classList.add('item-tarea', tarea.prioridad);
        if (tarea.completada)
            li.classList.add('completada');
        const texto = document.createElement('span');
        texto.classList.add('texto-tarea');
        texto.textContent = `${tarea.titulo} - Prioridad: ${tarea.prioridad} - Estado: ${tarea.completada ? 'Completada' : 'Pendiente'}`;
        const boton = document.createElement('button');
        boton.type = 'button';
        boton.textContent = tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada';
        boton.addEventListener('click', () => {
            manager.alternarEstado(tarea.id);
            pintarTareas();
        });
        li.append(texto, boton);
        listaContenedor.appendChild(li);
    });
}
formulario.addEventListener('submit', event => {
    event.preventDefault();
    const titulo = inputTitulo.value.trim();
    if (!titulo)
        return;
    manager.agregar(titulo, selectPrioridad.value);
    pintarTareas();
    formulario.reset();
});
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        document.querySelector('.btn-filtro.active')?.classList.remove('active');
        boton.classList.add('active');
        manager.setFiltro(boton.dataset['filtro']);
        pintarTareas();
    });
});
inicializarApp();
//# sourceMappingURL=app.js.map