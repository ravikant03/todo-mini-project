import TodoBox from "./TodoBox";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Todo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex items-center justify-center h-screen w-screen   ${theme ?"dark:bg-black/80": "bg-[#3D45AA]" }`}
      >
        <div className="w-full  px-5 md:px-0 py-20">
          <div>
            <TodoBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
