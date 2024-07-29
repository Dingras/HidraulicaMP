const backendurl = "https://sheet.best/api/sheets/fe0afca3-c498-4299-90bd-3f4c222b48b5";

export default backendurl;

export async function GET(url, request = null) {
    let uri = "";
    if (request) {
        uri = '?' + new URLSearchParams(request).toString();
    }

    try {
        const response = await fetch(backendurl + url + uri, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}` || '',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return { error: error.message };
    }
}
