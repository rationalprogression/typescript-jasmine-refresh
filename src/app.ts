import { default as util } from "./lib/Utilities";

util.log("started");

class Startup {
    public static main(): number {
        util.log("main");
        return 0;
    }
}

Startup.main();

util.log("ended");
