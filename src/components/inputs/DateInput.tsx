import { FormLabel, Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface TextInputProps {
    changeEvent? : ChangeEventHandler<HTMLInputElement>,
    label? : string,
    placeholder? : string,
    value? : string,
    name? :  string
}

const DateInput = ({changeEvent, label, placeholder, value, name} : TextInputProps) => {
    return (
        <FormLabel w="100%" fontSize={{base : "18px", md : "19px"}}>
            {label}
            <Input type="date" onChange={changeEvent} placeholder={placeholder} value={value} name={name}/>
        </FormLabel>
    )
}

export default DateInput;