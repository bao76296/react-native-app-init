import {
    observable,
    action
} from 'mobx'

class Navigation {
    @observable navigator : object = null

    @action setNavigation (navigator : any){
        this.navigator = navigator
    }
}

export default new Navigation();