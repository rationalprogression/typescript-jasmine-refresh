import { default as util } from "./lib/Utilities";

util.Log("started");

class Startup {
    public static main(): number {
        util.Log("main");
        return 0;
    }
}

Startup.main();

util.Log("ended");
