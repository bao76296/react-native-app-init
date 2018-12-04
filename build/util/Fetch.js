import { AjaxConfig } from '../config';
const Fetch = (url) => {
    return new Promise(resolve => {
        fetch(AjaxConfig.serverUrl + url)
            .then(response => response.json())
            .then(res => {
            resolve(res);
        });
    });
};
export default Fetch;
//# sourceMappingURL=Fetch.js.map