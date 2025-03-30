import { BooleanInput, NormalInput, NormalTextArea } from "./interfaces";

const handleChange = ({changeHandler, updateObject, updateNumber, updateText} : NormalInput) => {
    if(updateObject) updateObject(prev => ({...prev, [changeHandler.target.name] : changeHandler.target.value}));
    if(updateNumber) updateNumber(parseFloat(changeHandler.target.value));
    if(updateText) updateText(changeHandler.target.value);
};

const handleChangeBoolean = ({changeHandler, updateObject, updateNumber, updateValue, validValue} : BooleanInput) => {
    if(updateObject) updateObject(prev => ({...prev, [changeHandler.target.name] : (changeHandler.target.value == validValue) ? true : false}));
    if(updateNumber) updateNumber((changeHandler.target.value == validValue) ? 1 : 0);
    if(updateValue) updateValue((changeHandler.target.value == validValue) ? true : false);
};

const handleChangeTextArea = ({changeHandler, updateObject, updateNumber, updateText} : NormalTextArea) => {
    if(updateObject) updateObject(prev => ({...prev, [changeHandler.target.name] : changeHandler.target.value}));
    if(updateNumber) updateNumber(parseFloat(changeHandler.target.value));
    if(updateText) updateText(changeHandler.target.value);
};

export {handleChange, handleChangeTextArea, handleChangeBoolean};