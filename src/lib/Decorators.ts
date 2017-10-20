import { default as utils} from "./Utilities";

export default class Decorators {
    public deprecated(t: any, p: string, d: PropertyDescriptor) {
        utils.Log("This method will be removed soon");
    }
}
