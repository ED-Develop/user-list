import React from 'react';
import style from './Forms.module.css';
import 'react-widgets/dist/css/react-widgets.css';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import SelectList from 'react-widgets/lib/SelectList'

Moment.locale('en');
momentLocalizer(Moment);

export const RenderDateTimePicker = ({input: {onChange, value}, meta, showTime, placeholder}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? style.errorPicker : ''}>
            {hasError && <div className={style.description}>{meta.error}</div>}
            <DateTimePicker containerClassName={style.picker} onChange={onChange} format="YYYY-MM-DD" time={showTime}
                            value={!value ? null : new Date(value)} placeholder={placeholder}/>
        </div>

    );
};

export const RenderSelectList = ({input, meta, data}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? style.error : ''}>
            {hasError && <div className={style.description}>{meta.error}</div>}
            <SelectList {...input} onBlur={() => input.onBlur()} data={data}/>
        </div>

    );
};

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? style.error : ''}>
            {hasError && <div className={style.description}>{meta.error}</div>}
            <input  {...props} {...input}/>
        </div>
    )
};

export const Textarea = ({input, meta, castomClassName, ...props}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? style.error : ''}>
            {hasError && <div className={`${style.description} ${style.textarea}`}>{meta.error}</div>}
            <textarea  {...props} {...input}/>
        </div>
    )
};
