// Data Types
export interface Form {
    _id: any,
    name: string,
    email: string,
    tel: string
}

// State type
export interface FormsState {
    readonly dataDB: Form[],
    name: string,
    email: string,
    tel: string
}

// ApplicationState type
export interface ApplicationState {
    forms: FormsState
}