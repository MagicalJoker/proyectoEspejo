import type { Tarea, Prioridad, Filtro } from '../Interfaces/tareaInterface.js';
export declare class TaskManager {
    private tareas;
    private filtro;
    setFiltro(filtro: Filtro): void;
    getTareas(): Tarea[];
    agregar(titulo: string, prioridad: Prioridad): void;
    alternarEstado(id: number): void;
}
//# sourceMappingURL=TaskManager.d.ts.map