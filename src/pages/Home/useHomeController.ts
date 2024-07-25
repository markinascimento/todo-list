// -> ReactJS
import { useCallback, useState } from "react";

// -> Custom hooks
import { useTodo } from "../../hooks/useTodo";

export function useHomeController() {
  const { filteredNewTasks } = useTodo();

  const [drawerModal, setDrawerModal] = useState(false);

  const openDrawerModal = useCallback(() => {
    setDrawerModal(true);
  }, []);

  const closeDrawerModal = useCallback(() => {
    setDrawerModal(false);
  }, []);

  return {
    drawerModal,
    filteredNewTasks,
    openDrawerModal,
    closeDrawerModal,
  };
}
