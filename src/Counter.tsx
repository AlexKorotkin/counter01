import React, {ChangeEvent, useState} from 'react';
import './Counter.css';
import {Button} from "./Button";

export function Counter() {

    let [value,setValue]= useState('');
    let [inc,setInc]= useState(0);
    let [error,setError]= useState(false);

    let onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=> {
        if(Number.isInteger(+e.currentTarget.value)){
            setValue(e.currentTarget.value);
            setError(false);
        }else setError(true);
    }
  return (
    <div className="Wrapper">
        <div className={`ScoreBoard ${inc >= +value && inc !== 0 ? 'red' : ''}`}>{inc}</div>
        <div className={'Wrapper-button'}>
            <Button name = {'increment'} setInc ={setInc} inc = {inc} setValue = {setValue} value = {value} />
            <Button  name = {'reset'} setInc ={setInc} inc = {inc} setValue = {setValue} value = {value}/>
        </div>
        <input
            className={error? 'input-error': ''}
            type="text"
            value={value}
            onChange={onChangeHandler}
            placeholder={'введите число...'}
        />
        {error && <div className={'error'}>Введите числовое значение</div>}
    </div>
  );
}


