import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Easy Shop`;
  }, [title]);
};
export default useTitle;
