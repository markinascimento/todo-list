// -> Custom hooks
import { useTodo } from "../hooks/useTodo";

// -> Components
import { EmptyState } from "../components/EmptyState";
import { TaskCard } from "../components/TaskCard";

export function Completed() {
  const { filteredTasksComplete } = useTodo();

  return (
    <div className="flex flex-1 flex-col w-full max-w-[1024px] h-full m-auto overflow-hidden pb-4 md:pb-0">
      <header className="flex flex-col gap-px h-14 w-full">
        <h1 className="font-semibold text-xl tracking-[-1px] text-zinc-900">
          Atividades completas
        </h1>
      </header>

      <main className="flex flex-1 flex-col overflow-auto pt-4 gap-6">
        {filteredTasksComplete.length <= 0 ? (
          <>
            <EmptyState title="Nenhuma task criada até o momento." />
          </>
        ) : (
          filteredTasksComplete.map((task) => (
            <TaskCard
              hasButtonCheckedComplete={false}
              hasButtonRemove={false}
              key={task.task}
              task={task}
            />
          ))
        )}
      </main>
    </div>
  );
}
