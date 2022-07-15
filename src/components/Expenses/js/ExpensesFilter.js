import React from 'react';
import classes from '../css/ExpensesFilter.module.css';

const ExpensesFilter = (props) => {


    const yearHandler = (event) => {
        props.onYearChange(event.target.value) ;
    }

    const tagHandler = (event) => {
        // console.log(event.target.value)
        props.onTagChange(event.target.value);
    }


    return (
        <div className={classes['expenses-filter']}>
            <div className={classes['expenses-filter__control']}>
                <label>{"Filter".toUpperCase()}</label>
                <select onChange={yearHandler} value={props.year}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>

                <select onChange={tagHandler} value={props.tag}>{
                        props.tagList.map((tagName) => {
                            return <option key={Math.random()}>{tagName}</option>
                        })
                }</select>
            </div>
        </div>
    );
};

export default ExpensesFilter;