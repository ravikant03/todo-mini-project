import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { RContext } from "../reducer/TodoReducer";
import { methods } from "../reducer/reducer";
import ThemeContext from "../context/ThemeContext";

const NewTodo = ({ todos, ind }) => {
  const [click, setClick] = useState(false);

  const { dispatch } = useContext(RContext);
  const {theme} = useContext(ThemeContext)

  const deleteTodo = (ind) => {
    dispatch({ type: methods.deleteTodo, payload: ind });
    // console.log(ind);
  };

  return (
    <>
      <div className="w-full mt-7 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 md:gap-5 w-full">
          {/* tick */}
          <div
            className={`border h-4 w-4 md:h-6 md:w-6 rounded-full cursor-pointer ${click && "bg-amber-500"}`}
            onClick={() => setClick((prev) => !prev)}
          >
            {click && <TiTick className="h-full w-full text-white" />}
          </div>
          {/* text */}
          <p
            className={`w-[70%] text-xl font-medium truncate ${click && "line-through"} ${theme? 'text-white/70' : 'text-black'}`}
          >
            {todos}
          </p>
        </div>
        {/* delete icon */}

        <div
          className="h-4 w-4 md:h-7 md:w-7 cursor-pointer group"
          onClick={() => deleteTodo(ind)}
        >
          <RxCross2 className={`h-full w-full group-hover:text-red-600 ${theme ? 'text-white/50' : 'text-black'}`} />
        </div>
      </div>
    </>
  );
};

export default NewTodo;
