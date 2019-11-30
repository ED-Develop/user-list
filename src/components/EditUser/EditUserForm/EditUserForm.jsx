import React from 'react';
import {Field, reduxForm} from "redux-form";

const UserForm = () => {
    return (
        <form>
            <div>
                <label>
                    First name:
                    <Field component='input'/>
                </label>
            </div><div>
                <label>
                    Last name:
                    <Field component='input'/>
                </label>
            </div>
        </form>
    )
};

export default reduxForm({form:'user'})(UserForm);