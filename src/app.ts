import { default as logger } from "./lib/Logger";

logger.info("started");

class Startup {
    public static main(): number {
        logger.info("main");
        return 0;
    }
}

Startup.main();

logger.info("ended");
