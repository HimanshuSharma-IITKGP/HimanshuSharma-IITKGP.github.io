import React from 'react';
import classes from  '../css/Sorting.module.css';

const Sorting = (props) => {

    const defaults = {Date: 'N2O', Amount: 'Increasing'}

    const sortHandler = event => {
        props.onSortModeChange(event.target.value) ;
        props.onOrderChange(defaults[event.target.value]);
    }

    const orderHandler = event => {
        // console.log('order handler')
        props.onOrderChange(event.target.value) ;
    }

    return (
        <div className={classes['sorting-filter']}>
            <div className={classes['sorting-filter__control']}>
                <label>SORT BY</label>
                <select  onChange={sortHandler} value={props.sortMode}>
                    <option value='Amount'>Amount</option>
                    <option value='Date'>Date</option>
                </select>

                {props.sortMode === 'Amount' && <select onChange={orderHandler} value={props.order}>
                    <option value='Decreasing'>Decreasing</option>
                    <option value='Increasing'>Increasing</option>
                </select>}

                {props.sortMode === 'Date' && <select onChange={orderHandler} value={props.order} >
                    <option value='N2O'>Newest to Oldest</option>
                    <option value='O2N'>Oldest to Newest</option>
                </select>}
            </div>
        </div>
    );
};

export default Sorting;