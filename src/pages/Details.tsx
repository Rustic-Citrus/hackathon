import data from "../../data/processed.json";
import { Navbar } from "../components/Navbar.tsx";
import "../css/Details.css";
import { useState, useEffect } from "react";

const Details = ({ id }: { id: number }) => {  
  type LLMDataType = {
  table_pk: number,
  model_pk: number,
  name: null | string,
  organization: null | string,
  description: null | string,
  created_date: null | string,
  url: null | string,
  size: null | string,
  analysis: null | string,
  dependencies: null | string,
  quality_control: null | string,
  access: null | string,
  license: null | string,
  intended_uses: null | string,
  prohibited_uses: null | string,
  monitoring: null | string,
  feedback: null | string,
  model_card: null | string,
  training_emissions: null | string,
  training_time: null | string,
  training_hardware: null | string,
  input_modality: null | string,
  output_modality: null | string
};

const [LLMData, setLLMData] = useState<LLMDataType | undefined>();
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].table_pk === id) {
        setLLMData(data[i]);
        break;
      }
    }
  }, []);

  return (
    <>
    <Navbar />
    <main>
      <h1>
        {LLMData && LLMData.name}
        {!LLMData && "Invalid LLM"}
      </h1>
      {LLMData && (
        <div className="container">
          <div className="info-box">
            {/* 
            There is no "type" attribute in the LLMData.

            <div className="item">
              <p><label>Type: </label> {LLMData.type}</p>
            </div> 
            
            */}
            <div className="item">
              <p><label className="field">Organization: </label> {LLMData.organization}</p>
            </div>
            <div className="item">
              <p><label className="field">Date Created: </label> {LLMData.created_date}</p>
            </div>
            <div className="item">
              <p><label className="field">Size: </label> {LLMData.size}</p>
            </div>
          </div>
          <div className="info-box">
            <div>
              <label className="field">Modality: </label>
              <p><label className="field">In: </label>{LLMData.input_modality}</p>
              <p><label className="field">Out: </label>{LLMData.output_modality}</p>
            </div>
            <div className="item"><p><label className="field">Access: </label>{LLMData.access}</p></div>
            <div className="item"><p><label className="field">License: </label>{LLMData.license}</p></div>
          </div>
          <div className="info-box">
            <div className="item">
              <p><label className="field">Dependencies: </label> {LLMData.dependencies !== "" ? LLMData.dependencies : "None"}</p>
            </div>
          </div>
        </div>
      )}
    </main>
    </>
  );
}

export default Details;