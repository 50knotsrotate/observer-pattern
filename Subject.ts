export interface Subject { 
    notifyObservers: Function;
    getState: Function;
    setState: Function;
    attach: Function;
    remove: Function;
};