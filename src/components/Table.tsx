import data from "../../data/processed.json";
import "../css/Table.css";
import { Link } from "react-router-dom";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Organization</td>
          <td>Description</td>
          <td>Date Created</td>
          <td>URL</td>
          <td>Access</td>
          <td>License</td>
          <td>Size</td>
          <td>More Info</td>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => {
          if (i < 5) {
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
                <td><Link to={`/LLM/${row.table_pk}`}><button>Click Here</button></Link></td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};
