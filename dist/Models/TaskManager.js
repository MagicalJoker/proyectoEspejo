export class TaskManager {
    tareas = [
        { id: 1, titulo: 'Aprender la sintaxis de ES6', prioridad: 'Alta', completada: true },
        { id: 2, titulo: 'Dominar la asincronía y Fetch', prioridad: 'Media', completada: false },
        { id: 3, titulo: 'Migrar el proyecto a Angular', prioridad: 'Baja', completada: false },
    ];
    filtro = 'Todas';
    setFiltro(filtro) {
        this.filtro = filtro;
    }
    getTareas() {
        return this.tareas.filter(t => this.filtro === 'Pendientes' ? !t.completada :
            this.filtro === 'Completadas' ? t.completada :
                true);
    }
    agregar(titulo, prioridad) {
        this.tareas = [...this.tareas, { id: Date.now(), titulo, prioridad, completada: false }];
    }
    alternarEstado(id) {
        this.tareas = this.tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t);
    }
}
//# sourceMappingURL=TaskManager.js.map