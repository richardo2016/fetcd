import { WorkerInfo, EtcdWorkerType } from '../@types/client';

import http = require('http')
import os = require('os')

import Class_KeysAPI = require('./keysApi')
import EtcdClient = require('./client')

export = class EtcdWorker implements EtcdWorkerType {
    _info: WorkerInfo

    name: string

    ip: string

    cpu: number

    keysApi: Class_KeysAPI
    
    constructor () {
        
    }
}