import React, { ChangeEvent } from "react";

interface UserData {
    name? :  string,
    password? : string,
    balance? : number,
    id? : number
};

interface NormalInput {
    changeHandler : ChangeEvent<HTMLInputElement>,
    updateText?: React.Dispatch<React.SetStateAction<string>>,
    updateNumber?: React.Dispatch<React.SetStateAction<number>>,
    updateObject?: React.Dispatch<React.SetStateAction<object>>
}

export type {UserData, NormalInput};