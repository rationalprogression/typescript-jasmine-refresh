// Interface merging: thses 2 interfaces will be merged by the TS compiler

interface IWillBeMerged {
    title: string;
    publisher: string;
}

interface IWillBeMerged {
    name: string;
}

class Merged implements IWillBeMerged {
    public title: string;
    public publisher: string;
    public name: string;
}
