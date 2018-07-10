import { EtcdKeysAPI, CreateInOrderOptions, EtcdDeleteOptions, EtcdGetOptions, EtcdSetOptions, EtcdWatcherOptions } from "../@types/client";
import * as http from "http";

export = class Class_KeysAPI implements EtcdKeysAPI {
    _serverBase: string = 'http://localhost:2379';
    
    constructor () {
        this._serverBase = 'http://localhost:2379'
    }

    create (key: string, value: string) {
        return new http.Response()
    }

    createInOrder (dir: string, value: string, opts: CreateInOrderOptions) {
        return new http.Response()
    }
    
    delete (key: string, opts: EtcdDeleteOptions) {
        return new http.Response
    }
    
    get (key: string, opts: EtcdGetOptions) {
        return new http.Response
    }

    set (key: string, value: string, opts: EtcdSetOptions) {
        const res = http.post(`${this._serverBase}/workers/${key}`)
        return res
    }

    update (key: string, value: string) {
        return new http.Response
    }
    
    watcher (key: string, opts: EtcdWatcherOptions) {
        return  {}
    }
}