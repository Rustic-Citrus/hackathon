import data from "../../data/processed.json";
import "../css/Table.css";
import { Link } from "react-router-dom";

export const Table = () => {

    const formatDate = (date: number | null) => { 
    if (date === null) {
      return "N/A";
    }
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="table-container">
      <table className="LLMTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>URL</th>
            <th>Access</th>
            <th>License</th>
            <th>Size</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                <td>{row.name}</td>
                <td>{row.organization}</td>
                <td>
                  {row.description}
                </td>
                <td>{formatDate(row.created_date)}</td>
                <td title={row.url}>{row.url?.substring(0, 20)}...</td>
                <td>{row.access}</td>
                <td>{row.license}</td>
                <td>{row.size}</td>
                <td>
                  <Link to={`/LLM/${row.id}`}>
                    <button>Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
