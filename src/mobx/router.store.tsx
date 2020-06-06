import { action } from "mobx";
import { RouterStore } from "mobx-react-router";

export default class NewRouterStore extends RouterStore {
    @action setHistory = (path: string) => {
        this.history.push(path);
    }
}

const router = new NewRouterStore();
export { router };
