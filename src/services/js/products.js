import { GET } from './httpr'

export async function GetCategories(request = null) {
    return GET('',request)
}