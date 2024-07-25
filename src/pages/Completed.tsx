// -> Custom hooks
import { useTodo } from "../hooks/useTodo";

// -> Components
import { EmptyState } from "../components/EmptyState";

export function Completed() {
  const { filteredTasksComplete } = useTodo();

  return (
    <div className="flex flex-1 flex-col w-full max-w-[1024px] h-full m-auto overflow-hidden pb-4 md:pb-0">
      {filteredTasksComplete.length > 0 ? (
        filteredTasksComplete.map((taks) => (
          <div key={taks.task}>
            <span> {taks.task} </span>
          </div>
        ))
      ) : (
        <EmptyState title="Você não completou nenhuma task :(" />
      )}
    </div>
  );
}
