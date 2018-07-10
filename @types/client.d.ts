import http = require('http')
/**
  types inspired with
  
 * https://github.com/coreos/etcd@HEAD/-/blob/client/keys.go
 */

interface EtcdKeysAPI {
    create(key: string, value: string): http.Response
    createInOrder(dir: string, value: string, opts: CreateInOrderOptions): http.Response
    delete(key: string, opts: EtcdDeleteOptions): http.Response
    get(key: string, opts: EtcdGetOptions): http.Response
    set(key: string, value: string, opts: EtcdSetOptions): http.Response
    update(key: string, value: string): http.Response
    watcher(key: string, opts: EtcdWatcherOptions): Watcher
}

interface  CreateInOrderOptions {

}

interface EtcdDeleteOptions {
	drevValue: string
    PrevIndex: number
	decursive: boolean
	dir: boolean
}

interface EtcdGetOptions {
    recursive: boolean
    sort: boolean
    quorum: boolean
}

interface EtcdSetOptions {
    // ms
    ttl: number

    Refresh: boolean

    prevValue: string
    prevIndex: number

    // prevExist: bool
}

interface EtcdWatcherOptions {

}

interface Watcher {
    
}

// Member is a client machine
interface Member {
	InGroup: boolean
	IP:      string
	Name:    string
	CPU:     number
}

interface EtcdMasterType {
	members: Member[]
	keysApi: EtcdKeysAPI
}

interface EtcdWorkerType {
    name: string
    ip: string
    keysApi: EtcdKeysAPI
}

interface WorkerInfo {
    name: string
    ip: string
    cpu: number
}

interface EtcdClientConfig {
    endPoints: string[]
    transport: any
}