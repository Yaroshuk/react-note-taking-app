import { SET_ACTIVE_FILTER } from "./constants"

export const filterActions = {
  setActiveFilter(filter) {
    return {
      type: SET_ACTIVE_FILTER,
      payload: filter
    }
  }
}