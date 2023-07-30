import './CostItem.css';
import CostsDate from './CostsDate.js';
import Card from '../UI/Card';

function CostItem(props){
    return (
        <li>
            <Card className="cost-item">
                <CostsDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{props.description}</h2>
                    <div className='cost-item__price'>${props.price}</div>
                </div>
            </Card>
        </li>
    );
}

export default CostItem;