import { NormalInput } from "./interfaces";

const handleChange = ({changeHandler, updateObject, updateNumber, updateText} : NormalInput) => {
    if(updateObject) updateObject(prev => ({...prev, [changeHandler.target.name] : changeHandler.target.value}));
    if(updateNumber) updateNumber(parseFloat(changeHandler.target.value));
    if(updateText) updateText(changeHandler.target.value);
};

export {handleChange};