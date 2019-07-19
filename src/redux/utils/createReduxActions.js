import { createAction } from 'redux-actions'

export function createActionTypes(prefix) {
  return [
    `${prefix}Request`,
    `${prefix}RequestFail`,
    `${prefix}RequestSuccess`,
  ]
}

export function createActionTypesExtend(prefix) {
  return [
    `${prefix}`,
    `${prefix}Added`,
    `${prefix}Removed`,
  ]
}

export function createReduxActions(prefix) {
  return [
    createAction(`${prefix}`),
    createAction(`${prefix}Fail`),
    createAction(`${prefix}Success`),
  ]
}

export function createReduxActionsExtend(prefix) {
  return [
    createAction(`${prefix}`),
    createAction(`${prefix}Added`),
    createAction(`${prefix}Removed`),
  ]
}
