import CostItem from "./CostItem";
import './CostsList.css';

function CostsList (props) {

    let contentCosts = <h2 className="cost-list__fallback">No expenses in this year</h2>

    if(props.costs.length === 0){
        return contentCosts;
    }

    return <ul className="cost-list">
        {props.costs.map(cost => (
            <CostItem 
                key={cost.id}
                date={cost.date}
                description={cost.description}
                price={cost.price}
            />))}
    </ul>

}

export default CostsList;