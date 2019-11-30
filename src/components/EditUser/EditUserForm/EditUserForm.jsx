import React from 'react';
import style from './EditUserForm.module.css';
import {Field, reduxForm} from "redux-form";
import {Input, RenderDateTimePicker, RenderSelectList, Textarea} from "../../common/Forms/Form";
import {maxLength, required} from "../../../utils/validators";

const maxLength256 = maxLength(256);
const maxLength1024 = maxLength(1024);

const EditUserForm = ({handleSubmit, id}) => {
    return (
        <form onSubmit={handleSubmit} className={style.editForm}>
            <div className={style.inputBlock}>
                <label>First name:</label>
                <Field component={Input} validate={[required, maxLength256]} name='first_name'/>
            </div>
            <div className={style.inputBlock}>
                <label>Last name:</label>
                <Field component={Input} validate={[required, maxLength256]} name='last_name'/>
            </div>
            <div>
                <label>Date of Birth: </label>
                <div className={style.widget}>
                    <Field component={RenderDateTimePicker} validate={[required]} showTime={false}
                           name='birth_date' placeholder={'YYYY-MM-DD'}/>
                </div>
            </div>
            <div>
                <label>Gender: </label>
                <div className={`${style.widget} ${style.select}`}>
                    <Field component={RenderSelectList} validate={[required]} data={['male', 'female']} name='gender'/>
                </div>
            </div>
            <div className={style.inputBlock}>
                <label>Profession:</label>
                <Field component={Input} validate={[required, maxLength256]} name='job'/>
            </div>
            <div>
                <label>Biography:</label>
                <Field component={Textarea} validate={[required, maxLength1024]} name='biography'/>
            </div>
            <div className={style.checkbox}>
                <label>
                    <Field component='input' type='checkbox' name='is_active'/>
                    User is active
                </label>
            </div>
            <div className={style.btn}>
                {id ? <button>Save</button> : <button>Add user</button>}
            </div>
        </form>
    )
};

export default reduxForm({form: 'editUser'})(EditUserForm);