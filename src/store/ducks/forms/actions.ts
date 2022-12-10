import { action } from 'typesafe-actions'
import { FormTypes, Form } from './types'

export const changedNameValue = (payload: Form[]) => action(FormTypes.changedNameValue, payload)