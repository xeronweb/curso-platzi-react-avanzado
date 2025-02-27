import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoreValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item != null ? JSON.parse(item) : initialValue;
        } catch (error) {
            return false;
        }
    })

    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setStoreValue(value)
        } catch (error) {
            console.error(error)
        }
    }

    return [storedValue, setLocalStorage];

}