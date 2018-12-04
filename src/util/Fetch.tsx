
import { AjaxConfig } from '../config'

const Fetch = (url : any)  => {
    return new Promise <any> ( resolve => {
        fetch(AjaxConfig.serverUrl + url)
        .then( response => response.json())
        .then( res=> {
            resolve(res)
        })
    })
}
export default Fetch