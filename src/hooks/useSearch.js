import { useContext } from "react"
import { SearchContext } from "../context/search"

export const useSearch = () => {
    const context = useContext(SearchContext)

    if (context == undefined) {
        throw new Error('useCart must be...')
    }
    return context
}