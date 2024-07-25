// -> Controller
import { useHomeController } from "./useHomeController";

// -> Components
import { EmptyState } from "../../components/EmptyState";
import { DrawerModal } from "./components/DrawerModal";
import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";

export function Home() {
  const { filteredNewTasks, drawerModal, closeDrawerModal, openDrawerModal } =
    useHomeController();

  return (
    <div className="flex flex-1 flex-col w-full max-w-[1024px] h-full m-auto overflow-hidden pb-4 md:pb-0">
      <Header />

      <main className="flex flex-1 flex-col overflow-auto pt-4">
        {filteredNewTasks.length <= 0 ? (
          <>
            <EmptyState title="Nenhuma task criada até o momento." />
          </>
        ) : (
          filteredNewTasks.map((task) => (
            <TaskCard key={task.task} task={task} />
          ))
        )}
      </main>

      <footer className="flex items-center justify-center h-14 w-full px-4 ">
        <button
          type="button"
          onClick={openDrawerModal}
          className="bg-zinc-900 text-zinc-100 w-full max-w-96 h-10 rounded-full"
        >
          <span> Nova atividade </span>
        </button>
      </footer>

      <DrawerModal onClose={closeDrawerModal} open={drawerModal} />
    </div>
  );
}
