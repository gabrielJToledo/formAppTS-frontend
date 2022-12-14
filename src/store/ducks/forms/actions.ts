import { action } from 'typesafe-actions'
import { FormTypes} from './types'
import { Form } from '../../../domain/reduxInterface'

export const changedNameValue = (payload: Form) => action(FormTypes.changedNameValue, payload)
export const changedEmailValue = (payload: Form) => action(FormTypes.changedEmailValue, payload)
export const changedTelValue = (payload: Form) => action(FormTypes.changedTelValue, payload)
export const updateDataDB = (payload: Form[]) => action(FormTypes.updateDataDB, payload)