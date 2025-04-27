import { useContext } from "react"
import { FilterContext } from "../context/filter"

export const useFilter = () => {
    const context = useContext(FilterContext)

    if (context == undefined) {
        throw new Error('useFilter must be...')
    }
    return context
}