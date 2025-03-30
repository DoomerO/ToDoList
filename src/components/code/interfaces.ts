import React, { ChangeEvent } from "react";

interface taskData {
    id: number,
    title : string,
    description : string,
    date : string,
    status : boolean
}

interface NormalInput {
    changeHandler : ChangeEvent<HTMLInputElement>,
    updateText?: React.Dispatch<React.SetStateAction<string>>,
    updateNumber?: React.Dispatch<React.SetStateAction<number>>,
    updateObject?: React.Dispatch<React.SetStateAction<taskData>>
}

interface BooleanInput {
    changeHandler : ChangeEvent<HTMLInputElement>,
    updateValue?: React.Dispatch<React.SetStateAction<boolean>>,
    updateNumber?: React.Dispatch<React.SetStateAction<number>>,
    updateObject?: React.Dispatch<React.SetStateAction<taskData>>,
    validValue? : string
}

interface NormalTextArea {
    changeHandler : ChangeEvent<HTMLTextAreaElement>,
    updateText?: React.Dispatch<React.SetStateAction<string>>,
    updateNumber?: React.Dispatch<React.SetStateAction<number>>,
    updateObject?: React.Dispatch<React.SetStateAction<taskData>>
}

export type {taskData, NormalInput, NormalTextArea, BooleanInput};