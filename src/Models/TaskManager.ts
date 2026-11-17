import type { Tarea, Prioridad, Filtro } from '../Interfaces/tareaInterface.js';

export class TaskManager {
  private tareas: Tarea[] = [
    { id: 1, titulo: 'Aprender la sintaxis de ES6', prioridad: 'Alta', completada: true },
    { id: 2, titulo: 'Dominar la asincronía y Fetch', prioridad: 'Media', completada: false },
    { id: 3, titulo: 'Migrar el proyecto a Angular', prioridad: 'Baja', completada: false },
  ];
  private filtro: Filtro = 'Todas';

  setFiltro(filtro: Filtro): void {
    this.filtro = filtro;
  }

  getTareas(): Tarea[] {
    return this.tareas.filter(t =>
      this.filtro === 'Pendientes' ? !t.completada :
      this.filtro === 'Completadas' ? t.completada :
      true
    );
  }

  agregar(titulo: string, prioridad: Prioridad): void {
    this.tareas = [...this.tareas, { id: Date.now(), titulo, prioridad, completada: false }];
  }

  alternarEstado(id: number): void {
    this.tareas = this.tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
  }
}