import { observable, action, runInAction } from 'mobx'
import Fetch from '../util/Fetch'

class HomeList {
    @observable list : Array<any> = [];
    @observable listData : Array<any> = [];

    @action getListData () {
        Fetch('/cookbook-list.json').then( res => {
            runInAction(() => {
                this.list = res.data.slice(0,5);
                this.listData = res.data
            })
        })
    }
} 

export default new HomeList()