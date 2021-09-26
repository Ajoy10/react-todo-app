import Navbar from "./components/Navbar";
import TodoView from "./components/TodoView";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <TodoView />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
