// -> ReactJS
import { useCallback, useMemo, useState } from "react";

// -> Custom hooks
import { useTodo } from "../../hooks/useTodo";

export function useHomeController() {
  const { tasks } = useTodo();

  const [drawerModal, setDrawerModal] = useState(false);

  const openDrawerModal = useCallback(() => {
    setDrawerModal(true);
  }, []);

  const closeDrawerModal = useCallback(() => {
    setDrawerModal(false);
  }, []);

  const filteredTasksOnlyNotCompleted = useMemo(() => {
    return tasks.filter((task) => task.complete !== true);
  }, [tasks]);

  return {
    drawerModal,
    filteredTasksOnlyNotCompleted,
    openDrawerModal,
    closeDrawerModal,
  };
}
