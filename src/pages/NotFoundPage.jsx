import { useEffect } from "react";
import { useDispatch } from "react-redux";
function NotFoundPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_TITLE", payload: "Страница не найдена" });
  }, []);
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
}

export default NotFoundPage;
