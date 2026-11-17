import { TaskManager } from './Models/TaskManager.js';
import type { Prioridad, Filtro } from './Interfaces/tareaInterface.js';

const manager = new TaskManager();

const formulario = document.querySelector<HTMLFormElement>('#form-tareas')!;
const inputTitulo = document.querySelector<HTMLInputElement>('#input-titulo')!;
const selectPrioridad = document.querySelector<HTMLSelectElement>('#select-prioridad')!;
const listaContenedor = document.querySelector<HTMLUListElement>('#lista-tareas')!;
const loadingState = document.querySelector<HTMLDivElement>('#loading-state')!;
const botonesFiltro = document.querySelectorAll<HTMLButtonElement>('.btn-filtro');

async function inicializarApp(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  loadingState.style.display = 'none';
  pintarTareas();
}

function pintarTareas(): void {
  listaContenedor.innerHTML = '';
  
 manager.getTareas().forEach(tarea => {
    const li = document.createElement('li');
    li.classList.add('item-tarea', tarea.prioridad);
    if (tarea.completada) li.classList.add('completada');

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