import FormCosts from './FormCosts';
import './NewCosts.css';

function NewCosts(props) {

    const saveCostsData = (inputData) => {
        const costsData = {
            ...inputData,
        }
        props.onAddCosts(costsData);
    }



    return (
        <div className='new-cost'>
            <FormCosts onSubmitSaveData={saveCostsData}/>
        </div>
    );
}

export default NewCosts;