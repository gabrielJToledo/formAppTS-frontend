import { action } from 'typesafe-actions'
import { FormTypes} from './types'
import { Form } from '../../../domain/reduxInterface'

export const changedNameValue = (payload: Form[]) => action(FormTypes.changedNameValue, payload)