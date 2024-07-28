import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'
import Datastore from 'nedb'
// Custom APIs for renderer
const db = new Datastore({ filename: './test.db', autoload: true })

type res = {
  name: string
  Addr1: string
  Addr2: string
  Pincode: string
  Mobile: string
  HomePhone: string
  _id: string
}

export const api = {
  insetData: async (data): Promise<res> => {
    return new Promise((resolve, reject) => {
      db.insert(JSON.parse(data), (e, r: res) => {
        if (e) {
          reject(e)
        } else {
          resolve(r)
        }
      })
    })
  },
  findall: async (): Promise<res> => {
    return new Promise((resolve, reject) => {
      db.find({}, function (err, docs) {
        if (err) {
          reject(err)
        } else {
          resolve(docs)
        }
      })
    })
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
