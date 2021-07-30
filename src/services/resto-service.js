export default class RestoService {
    constructor() {
        this.apiBase = 'http://localhost:3000'
    }
    getRecource = async(url)=> {
        const res = await fetch(`${this.apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }
    getMenuItems = async()=> {
        return await this.getRecource('/menu/');
    }
}