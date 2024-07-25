// -> ReactJS
import { useCallback, useState } from "react";

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

  return {
    tasks,
    drawerModal,
    openDrawerModal,
    closeDrawerModal,
  };
}
