// -> Controller
import { useHomeController } from "./useHomeController";

// -> Components
import { DrawerModal } from "./components/DrawerModal";

export function Home() {
  const { tasks, drawerModal, closeDrawerModal, openDrawerModal } =
    useHomeController();

  return (
    <div className="flex flex-1 flex-col w-full max-w-[1024px] h-full m-auto overflow-hidden pb-4 md:pb-0">
      <header className="h-14 w-full ">
        <h1> Boa noite </h1>
      </header>

      <main className="flex flex-1 flex-col  overflow-auto">
        {tasks.length < 0 ? (
          <>
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal </span> <br /> <br /> <br /> <br /> <br />
            <span> principal 2 </span> <br /> <br /> <br /> <br /> <br />
          </>
        ) : (
          tasks.map((task) => (
            <div key={task.task}>
              <span> {task.task} </span>
            </div>
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
