import React, {useState} from "react";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import './Costs.css';
import CostsList from "./CostsList";
import CostDiagram from "./CostDiagram";

function Costs(props){

    const [selectedYear, setYear] = useState('2021');
    

    const yearChangeHandler = (year) => {
        setYear(year);
    }

    const filteredDate = props.costs.filter(year => year.date.getFullYear().toString() === selectedYear);
    
    return (
        <div>
            <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            <CostDiagram costs={filteredDate}/>
            <CostsList costs={filteredDate}/>
            </Card>
        </div>
    );
}

export default Costs;