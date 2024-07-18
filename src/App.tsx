import "./App.css";
import { motion } from "framer-motion";
import { Table } from "./components/Table";

function App() {
  return (
    <main>
      <div className="left">
        <motion.div
          className="sidebar"
          whileHover={{ scale: 1.05, boxShadow: "0.5rem 0.5rem black" }}
        >
          <input
            placeholder="Search"
            type="text"
            name="search"
            id="name"
            aria-label="search-input"
            className="search-input"
          ></input>
        </motion.div>
      </div>

      <div className="right">
        <div>
          <h1>LLM's</h1>
          <Table />
        </div>
      </div>
    </main>
  );
}

export default App;
