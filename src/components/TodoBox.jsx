import { GiSecretBook } from "react-icons/gi";
import NewTodo from "./NewTodo";
import { useContext } from "react";
import { RContext } from "../reducer/TodoReducer";
import { useRef } from "react";
import { methods } from "../reducer/reducer";
import { FiMoon } from "react-icons/fi";
import ThemeContext from "../context/ThemeContext";
import { IoMdSunny } from "react-icons/io";

const TodoBox = () => {
  const { state, dispatch } = useContext(RContext);
  const ref = useRef();
  const { theme, setTheme } = useContext(ThemeContext);

  const addTodo = () => {
    if (ref.current.value === "") {
      alert("Add Todo");
    } else {
      dispatch({ type: methods.addTodo, payload: ref.current.value.trim() });
      ref.current.value = "";
    }
  };

  const changeTheme = () => {
    setTheme((prev) => !prev);
    console.log(theme);
  };

  return (
    <>
      <div
        className={`mx-auto md:min-w-xs max-w-md h-100 md:h-120 ${theme ? "bg-gray-700" : " bg-white"}  rounded p-5 md:p-10`}
      >
        <div className="flex items-center justify-between">
          <h1 className="flex shrink-0 gap-3 items-center">
            <span
              className={`text-xl md:text-3xl font-semibold ${theme ? "text-white/70" : "text-black"}`}
            >
              To-Do List
            </span>
            <GiSecretBook className="text-xl md:text-3xl text-[#FF9760]/70" />
          </h1>
          {/* dark/light icon */}
          <div
            className="flex items-center justify-center border rounded-full p-1 cursor-pointer"
            onClick={changeTheme}
          >
            {theme ? (
              <IoMdSunny className="text-2xl text-orange-500" />
            ) : (
              <FiMoon className="text-2xl text-orange-500" />
            )}
          </div>
        </div>
        {/* input */}
        <div className="relative border mt-5 md:mt-10 p-2 w-[95%] rounded-4xl">
          <input
            ref={ref}
            type="text"
            placeholder="add todo..."
            className={`h-full w-[68%] px-3 focus:outline-0 text-md md:text-lg font-mono ${theme ? "text-white/70" : "text-black"}
            `}
          />
          <button
            className={`absolute top-0 right-0  w-[30%] h-full rounded-4xl font-medium text-md md:text-xl ${theme ? "text-white/70" : "text-white"}  bg-[#0B2D72] cursor-pointer hover:bg-gray-500 transition-all duration-200`}
            onClick={addTodo}
          >
            ADD
          </button>
        </div>

        <div className="overflow-y-auto h-[65%] my-5 scroll scrollbar-hide">
          {state.todos.map((item, ind) => {
            return <NewTodo key={ind} todos={item} ind={ind} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TodoBox;
