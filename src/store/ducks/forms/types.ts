
// Action types
export enum FormTypes {
    changedNameValue = '@forms/changedNameValue',
    changedEmailValue = '@forms/changedEmailValue',
    changedTelValue = '@forms/changedTelValue'
}

// Data Types
export interface Form {
    name: string,
    email: string,
    tel: string
}

// State type
export interface FormsState {
    readonly data: Form[]
}