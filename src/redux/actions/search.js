import { UPDATE_SEARCH } from '../contants'
export function updateSearch(search) {
    return {
        type: UPDATE_SEARCH,
        search
    }
}