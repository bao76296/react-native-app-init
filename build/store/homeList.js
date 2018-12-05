var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, runInAction } from 'mobx';
import Fetch from '../util/Fetch';
class HomeList {
    constructor() {
        this.list = [];
        this.listData = [];
    }
    getListData() {
        Fetch('/cookbook-list.json').then(res => {
            runInAction(() => {
                this.list = res.data.slice(0, 5);
                this.listData = res.data;
            });
        });
    }
}
__decorate([
    observable
], HomeList.prototype, "list", void 0);
__decorate([
    observable
], HomeList.prototype, "listData", void 0);
__decorate([
    action
], HomeList.prototype, "getListData", null);
export default new HomeList();
//# sourceMappingURL=homeList.js.map