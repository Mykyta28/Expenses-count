import React, {useState} from 'react';
import './FormCosts.css';

function FormCosts(props){

    const [nameInput, setNameInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [showForm, setForm] = useState(false);
    // const[userInput, setUserInput] = useState({
    //     name: '',
    //     price: '',
    //     date: ''
    // })

    const  nameHandler = (e) => {
        setNameInput(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     name: e.taret.value
        // })

        // setUserInput((previosState) => {
        //     return {
        //         ...previosState,
        //         name: e.taret.value
        //     }
        // })
    } 

    const  priceHandler = (e) => {
        setPriceInput(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     price: e.taret.value
        // })

        // setUserInput((previosState) => {
        //     return {
        //         ...previosState,
        //         price: e.taret.value
        //     }
        // })
    } 

    const  dateHandler = (e) => {
        setDateInput(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     date: e.taret.value
        // })

        // setUserInput((previosState) => {
        //     return {
        //         ...previosState,
        //         date: e.taret.value
        //     }
        // })
    } 

    const submitBtnHendler = (e) => {
        e.preventDefault();

        const costsData = {
            description: nameInput,
            price: priceInput,
            date: new Date(dateInput)
        }

        props.onSubmitSaveData(costsData);
        setNameInput('');
        setPriceInput('');
        setDateInput('');

        setForm(false);
    }

    const formShowHideHendler = () => {
        setForm(!showForm);
    }

    return (
        <div>
            {showForm ? (
                <form onSubmit={submitBtnHendler}> 
                    <div className='new-cost__controls'>
                        <div className='new-cost__control'>
                            <label>Name</label>
                            <input type='text' value={nameInput} onChange={nameHandler}/>
                        </div>
                        <div className='new-cost__control'>
                            <label>Price</label>
                            <input type='number' step={0.1} value={priceInput} onChange={priceHandler}/>
                        </div>
                        <div className='new-cost__control'>
                            <label>Date</label>
                            <input type='date' min={"2020-01-01"} step={"2023-12-31"} value={dateInput} onChange={dateHandler}/>
                        </div>
                        <div className={showForm ? 'new-cost__actions' : 'new-cost__actions'}>
                            <button>Add Cost</button>
                            <button>Delete</button>
                            <button onClick={formShowHideHendler}>Cancel</button>
                        </div>
                    </div>
                </form>
            ) : <button onClick={formShowHideHendler}>Add New Cost</button>}
        </div>
    );
}

export default FormCosts;