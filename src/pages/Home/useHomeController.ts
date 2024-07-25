// -> ReactJS
import { useCallback, useState } from "react";

export function useHomeController() {
  const [drawerModal, setDrawerModal] = useState(false);

  const openDrawerModal = useCallback(() => {
    setDrawerModal(true);
  }, []);

  const closeDrawerModal = useCallback(() => {
    setDrawerModal(false);
  }, []);

  return {
    drawerModal,
    openDrawerModal,
    closeDrawerModal,
  };
}
