import { default as logger} from "./Logger";

export default class Decorators {
    public deprecated(t: any, p: string, d: PropertyDescriptor) {
        logger.info("This method will be removed soon");
        logger.info(t);
        logger.info(p);
        logger.info(d);
    }
}
