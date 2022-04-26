import React, {MouseEvent} from 'react';
import './Button.css';

type PropsButtonType = {
    name:string
    inc: number
    value: string
    setInc: (inc:number) => void
    setValue: (value: string)=> void
}

export function Button(props: PropsButtonType) {

    let onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id === 'increment') {
            props.setInc(props.inc + 1);
        } else {
            props.setInc(0);
            props.setValue('');
        }

    }
    return (
        <button
            className={props.name}
            disabled={
                props.name === 'increment' ? (props.inc >= +props.value ? true : false)
                    : props.name === 'reset' ? (props.inc <= 0 ? true : false) : true
            }
            id={props.name}
            onClick={onClickHandler}
        >{props.name}</button>

    );
}


