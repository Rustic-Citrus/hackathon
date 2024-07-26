import data from "../../data/processed.json";
import { Navbar } from "../components/Navbar.tsx";
import "../css/Details.css";
import { useState, useEffect, MouseEvent } from "react";

const Details = ({ LLMid }: { LLMid: number }) => {  
  type LLMDataType = {
    id: number,
    name: string | null,
    url: string | null,
    organization: string | null,
    created_date: number | null,
    size: string | null,
    intended_uses: string | null,
    prohibited_uses: string | null,
    input_modality: string | null,
    output_modality: string | null,
    model_card: string | null,
    adaptation: string | null,
    output_space: string | null,
    monthly_active_users: string | null,
    user_distribution: string | null,
    terms_of_service: string | null,
    license: string | null,
    quality_control: string | null,
    monitoring: string | null,
    feedback: string | null,
    access: string | null,
    description: string | null,
    analysis: string | null,
    type: string | null,
    dependencies: string | null,
    training_emissions: string | null,
    training_time: string | null,
    training_hardware: string | null,
    specialisation: string | null
};

  const [LLMData, setLLMData] = useState<LLMDataType | undefined>();
  
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === LLMid) {
        setLLMData(data[i]);
        break;
      }
    }
  }, [LLMid]);

  function openTab(evt: React.MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent<HTMLButtonElement>, tabName: string) {
    const tabContent = document.getElementsByClassName("tabContent");
    const tabLinks = document.getElementsByClassName("tabLinks");

    for (let i = 0; i < tabContent.length; i++) {
      (tabContent[i] as HTMLElement).style.display = "none";
    }

    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    (document.getElementById(tabName)! as HTMLElement).style.display = "block";
    evt.currentTarget.className += " active";
  }


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
    <>
      <Navbar />
      <main>
        <h1>
          {LLMData && LLMData.name}
          {!LLMData && "Invalid LLM"}
        </h1>
        {LLMData && (
          <div className="tab-container">
            <div className="tab">
              <button id="defaultOpen" className="tabLinks" onClick={(event) => openTab(event, 'General')}>General</button>
              <button className="tabLinks" onClick={(event) => openTab(event, 'Uses')}>Use</button>
              <button className="tabLinks" onClick={(event) => openTab(event, 'Training')}>Training</button>
              <button className="tabLinks" onClick={(event) => openTab(event, 'Other')}>Other Details</button>
            </div>

            <div id="General" className="tabContent">
              <div className="item">
                <p><label className="field">Description: </label> {LLMData.description}</p>
              </div>
              <div className="item">
                <p><label className="field">Url: </label> <a href={LLMData.url}>{LLMData.url}</a></p>
              </div>
              <div className="item">
                <p><label className="field">Organization: </label> {LLMData.organization}</p>
              </div>
              <div className="item">
                <p><label className="field">Date Created: </label> {formatDate(LLMData.created_date)}</p>
              </div>
              <div className="item">
                <p><label className="field">Size: </label> {LLMData.size}</p>
              </div>
              <div className="item">
                <p><label className="field">Type: </label> {LLMData.type || "N/A"}</p>
              </div>
            </div>

            <div id="Uses" className="tabContent">
              <div className="item">
                <p><label className="field">Intended Uses: </label> {LLMData.intended_uses || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Prohibited Uses: </label> {LLMData.prohibited_uses || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Terms of Service: </label> <a href={LLMData.terms_of_service}>{LLMData.terms_of_service}</a></p>
              </div>
              <div className="item">
                <p><label className="field">License: </label> {LLMData.license}</p>
              </div>
              <div className="item">
                <p><label className="field">Monthly Active Users: </label> {LLMData.monthly_active_users || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">User Distribution: </label> {LLMData.user_distribution || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Input Modality: </label> {LLMData.input_modality}</p>
              </div>
              <div className="item">
                <p><label className="field">Output Modality: </label> {LLMData.output_modality}</p>
              </div>
              <div className="item">
                <p><label className="field">Model Card: </label> <a href={LLMData.model_card}>{LLMData.model_card}</a></p>
              </div>
              <div className="item">
                <p><label className="field">Adaptation: </label> {LLMData.adaptation || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Output Space: </label> {LLMData.output_space || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Dependencies: </label> {LLMData.dependencies !== "" ? LLMData.dependencies : "None"}</p>
              </div>
            </div>

            <div id="Training" className="tabContent">
              <div className="item">
                <p><label className="field">Training Emissions: </label> {LLMData.training_emissions || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Training Time: </label> {LLMData.training_time || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Training Hardware: </label> {LLMData.training_hardware || "N/A"}</p>
              </div>
            </div>

            <div id="Other" className="tabContent">
              <div className="item">
                <p><label className="field">Access: </label> {LLMData.access}</p>
              </div>
              <div className="item">
                <p><label className="field">Quality Control: </label> {LLMData.quality_control || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Monitoring: </label> {LLMData.monitoring || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Feedback: </label> <a href={LLMData.feedback}>{LLMData.feedback}</a></p>
              </div>
              <div className="item">
                <p><label className="field">Analysis: </label> {LLMData.analysis || "N/A"}</p>
              </div>
              <div className="item">
                <p><label className="field">Specialisation: </label> {LLMData.specialisation || "N/A"}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Details;