import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => { // initialValues does not listen for changes
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value})); // we return a new reference for the state
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};