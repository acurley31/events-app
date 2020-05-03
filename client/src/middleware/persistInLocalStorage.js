// Middleware to persist state in localStorage
export const STORAGE_KEY = '607d7777-febd-4c2c-92e5-451edf4bbd73'

const persistInLocalStorage = (store) => (next) => (action) => {
    const result = next(action)
    const state = store.getState()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    return result
}

export default persistInLocalStorage;
