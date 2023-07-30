import React, {useState} from "react";
import Costs from "./commonents/Costs/Costs";
import NewCosts from "./commonents/NewCosts/NewCosts";

const INITIAL_COSTS = [
  {
    id: 0,
    date: new Date(2023, 2, 21),
    description: "Refrogirator",
    price: 999.99
  },
  {
    id: 1,
    date: new Date(2022, 7, 11),
    description: "Loptop",
    price: 1299.99
  },
  {
    id: 2,
    date: new Date(2023, 1, 16),
    description: "Car",
    price: 41499.99
  }
]

function App() {

  const [costs, setCost] = useState(INITIAL_COSTS);

  const addCostsHandler = (costs) => {
    setCost(prevCosts => {
      return [costs, ...prevCosts];
    })
  }

  const removeAllData = () => {
    costs.description = "";
    costs.price = "";
    costs.date = "";
}
  
  return (
    <div>
      <NewCosts onAddCosts={addCostsHandler} onClick={removeAllData}/>
      
      <div>
        <Costs costs={costs}></Costs>
      </div>
    </div>
    
  );
}

export default App;
