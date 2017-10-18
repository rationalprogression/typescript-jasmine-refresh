import * as util from './lib/utilities';

util.log("started");

class Startup {
    public static main(): number {
        util.log("main");
        return 0;
    }
}

Startup.main();

util.log("ended");