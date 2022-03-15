import { spawn } from "@decentraland/PortableExperiences"
import * as EthereumController from "@decentraland/EthereumController"
import { toHex } from "eth-connect"
import * as crypto from '@dcl/crypto-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { Request } from 'express'
import * as dcl from 'decentraland-crypto-middleware'
import { NPC } from '@dcl/npc-scene-utils'
import { Dialog } from '@dcl/npc-scene-utils'
import * as utils from '@dcl/ecs-scene-utils'


const store = new Entity()
store.addComponent(new GLTFShape("models/moio.glb"))
store.addComponent(
    new Transform({
        position: new Vector3(16, 0, 16)
    })
)
engine.addEntity(store)

const alice = new Entity()
alice.addComponent(new GLTFShape("models/vrum.glb"))
alice.addComponent(
    new Transform({
        position: new Vector3(16, 0, 16)
    })
)

let StartRot = Quaternion.Euler(0, 0, 1)   ///aqui que mora o problema
let EndRot = Quaternion.Euler(0, 0, 359) ///aqui

alice.addComponent(new utils.RotateTransformComponent(StartRot, EndRot, 10)) ///aqui também


engine.addEntity(alice)
