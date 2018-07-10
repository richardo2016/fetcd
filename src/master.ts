import { EtcdKeysAPI, Member, EtcdClientConfig, EtcdMasterType } from "../@types/client";

import http = require('http')
import os = require('os')

import Class_KeysAPI = require('./keysApi')

export = class EtcdMaster implements EtcdMasterType {
    members: Member[];

    keysApi: Class_KeysAPI
    
    constructor () {
    }
}

// function NewMaster(endpoints: string[]): Master {
// 	const cfg: EtcdClientConfig = {
// 		Endpoints:               endpoints,
// 		Transport:               {}/* DefaultTransport */,
// 		HeaderTimeoutPerRequest: time.Second,
// 	}

// 	etcdClient, err = client.New(cfg)
// 	if err != nil {
// 		log.Fatal("Error: cannot connec to etcd:", err)
// 	}

// 	master: Master = {
// 		members: make(map[string]*Member),
// 		EtcdKeysAPI: client.NewKeysAPI(etcdClient),
// 	}
// 	go master.WatchWorkers()
// 	return master
// }

// function (m Master) AddWorker(info WorkerInfo) {
// 	member: Member = {
// 		InGroup: true,
// 		IP:      info.IP,
// 		Name:    info.Name,
// 		CPU:     info.CPU,
// 	}
// 	m.members[member.Name] = member
// }

// function (m Master) UpdateWorker(info WorkerInfo) {
// 	member = m.members[info.Name]
// 	member.InGroup = true
// }

// function NodeToWorkerInfo(node client.Node) WorkerInfo {
// 	log.Println(node.Value)
// 	info: WorkerInfo = {}
// 	err = json.Unmarshal([]byte(node.Value), info)
// 	if err != nil {
// 		log.Print(err)
// 	}
// 	return info
// }

// function (m Master) WatchWorkers() {
// 	api = m.EtcdKeysAPI
// 	watcher = api.Watcher("workers/: client", .EtcdWatcherOptions{
// 		Recursive: true,
// 	})
// 	for {
// 		res, err = watcher.Next(context.Background())
// 		if err != nil {
// 			log.Println("Error watch workers:", err)
// 			break
// 		}
// 		if res.Action == "expire" {
// 			info = NodeToWorkerInfo(res.PrevNode)
// 			log.Println("Expire worker ", info.Name)
// 			member, ok = m.members[info.Name]
// 			if ok {
// 				member.InGroup = false
// 			}
// 		} else if res.Action == "set" {
// 			info = NodeToWorkerInfo(res.Node)
// 			if _, ok = m.members[info.Name]; ok {
// 				log.Println("Update worker ", info.Name)
// 				m.UpdateWorker(info)
// 			} else {
// 				log.Println("Add worker ", info.Name)
// 				m.AddWorker(info)
// 			}
// 		} else if res.Action == "delete" {
// 			info = NodeToWorkerInfo(res.Node)
// 			log.Println("Delete worker ", info.Name)
// 			delete(m.members, info.Name)
// 		}
// 	}
// }