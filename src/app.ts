import { TaskManager } from './Models/TaskManager.js';
import type { Prioridad, Filtro } from './Interfaces/tareaInterface.js';

const manager = new TaskManager();

const formulario = document.querySelector<HTMLFormElement>('#form-tareas')!;
const inputTitulo = document.querySelector<HTMLInputElement>('#input-titulo')!;
const selectPrioridad = document.querySelector<HTMLSelectElement>('#select-prioridad')!;
const listaContenedor = document.querySelector<HTMLUListElement>('#lista-tareas')!;
const loadingState = document.querySelector<HTMLDivElement>('#loading-state')!;
const botonesFiltro = document.querySelectorAll<HTMLButtonElement>('.btn-filtro');