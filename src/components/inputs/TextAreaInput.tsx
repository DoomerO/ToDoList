import { FormLabel, Textarea } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface TextAreaProps {
    changeEvent? : ChangeEventHandler<HTMLTextAreaElement>,
    label? : string,
    placeholder? : string,
    value? : string,
    name? :  string
}

const TextAreaInput = ({changeEvent, label, placeholder, value, name} : TextAreaProps) => {
    return (
        <FormLabel w="100%" fontSize={{base : "18px", md : "19px"}}>
            {label}
            <Textarea fontSize="md" padding="10px" borderRadius="5px" onChange={changeEvent} placeholder={placeholder} value={value} name={name}  resize="none" size="XLarge"/>
        </FormLabel>
    )
}

export default TextAreaInput;