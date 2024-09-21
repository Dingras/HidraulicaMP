import { GET } from './httpr'

export async function GetCategories(request = null) {
    const resp = await GET('categories/', request)
    return resp
}