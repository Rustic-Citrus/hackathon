import data from "../../data/processed.json";
import "../css/Table.css";
// import { useState } from "react";

export const Table = () => {
  //   const [descriptionToShow, setDescriptionToShow] = useState(""

  //   const handleClick = (i: number) => {
  //     let textToDisplay : string | null;
  //     for (let index : number = 0; index < data.length; index++) {
  //       if (index === i) {
  //         textToDisplay = data[i].description;
  //       }
  //     }
  // tToDisplay);  };

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
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};
