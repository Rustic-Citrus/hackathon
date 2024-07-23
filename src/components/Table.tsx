import data from "../../data/processed.json";
import "../css/Table.css";
import { Link } from "react-router-dom";

export const Table = () => {
  return (
    <div className="table-container">
      <table>
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
                <td>{row.organization?.substring(0, 20)}...</td>
                <td>
                  {/* <button type="button" onClick={(i) => handleClick(i)}>
                    Show Description
                  </button> */}
                  {row.description?.substring(0, 20)}...
                </td>
                <td>{row.created_date}</td>
                <td>{row.url?.substring(0, 20)}...</td>
                <td>{row.access}</td>
                <td>{row.license}</td>
                <td>{row.size}</td>
                <td>
                  <Link to={`/LLM/${row.table_pk}`}>
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
