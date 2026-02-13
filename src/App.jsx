import Todo from "./components/Todo";
import TodoReducer from "./reducer/TodoReducer";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);

  const data = {
    theme,
    setTheme,
  };

  return (
    <>
      <TodoReducer>
        <ThemeContext.Provider value={data}>
          <Todo />
        </ThemeContext.Provider>
      </TodoReducer>
    </>
  );
}

export default App;
