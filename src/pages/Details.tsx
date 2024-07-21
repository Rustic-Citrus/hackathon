import data from "../../data/processed.json";
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
    <div>
      {LLMData && LLMData.name}
    </div>
  );
}

export default Details;