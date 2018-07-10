import http = require('http')
import { EtcdClientConfig } from '../@types/client';

export = class EtcdClient {
    _endPoints: string[]

    constructor (cfg: EtcdClientConfig) {
        this._endPoints = cfg.endPoints
    }
    
    health () {

    }
}