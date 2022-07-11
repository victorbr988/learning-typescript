/*  
  criar uma tarefa
  remover uma tarefa
  marcar como concluída
  busca por uma tarefa
*/

interface TaskType {
  name: string;
  id: number;
  terminate: boolean;
}

let tasksSaved: TaskType[] = [];

// função para criar uma tarefa
function addTask(name: string): void /* deixando explícito que não quero retornar nada */ { 
  const task = { name, id: Date.now(), terminate: false };
  tasksSaved.push(task);
}

//função para remover umas tarefa
function removeTask(id: number): void {
  const filterById = tasksSaved.filter((task) => task.id !== id )
  tasksSaved = filterById;
}

// marcar uma tarefa como concluída
function taskTerminate(id: number): void {
  const MarkAsTerminate = tasksSaved.map((task) => {
    if (task.id === id) task.terminate = true
    return task
  })
  tasksSaved = MarkAsTerminate
}

// retornar uma task específica
function searchTask(id: number): TaskType | undefined{
  const taskfind = tasksSaved.find((task) => task.id === id);
  return taskfind;
}
