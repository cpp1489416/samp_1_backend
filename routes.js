
const express = require('express')
const router = express.Router()
const ethCache = require('./eth_cache')

router.get('/eth', (req, res) => {
    return res.json({
        code: '0',
        msg: '',
        info: {
            url: ethCache.url,
            token: ethCache.token
        }
    })
})

router.put('/eth', (req, res) => {
    ethCache.regenerateContract(req.body.url, req.body.token)
    return res.json({
        code: '0',
        msg: '',
        info: null
    })
})

router.get('/livingRoom', async (req, res, next) => {
    return res.json({
        code: '0',
        msg: '',
        info: {
            airConditioner: {
                on: await ethCache.get('getMessageLivingRoomAirConditioner_S') === 'on',
                temperature: await ethCache.get('getMessageLivingRoomAirConditioner_T')
            },
            tv: {
                on: await ethCache.get('getMessageLivingRoomTV') === 'on'
            },
            light: {
                on: await ethCache.get('getMessageliving_room_light') === 'on'
            }
        }
    })
})

router.put('/livingRoom', async (req, res, next) => {
    await ethCache.set('setMessageLivingRoomAirConditioner_S', req.body.airConditioner.on ? 'on' : 'off')
    await ethCache.set('setMessageLivingRoomAirConditioner_T', req.body.airConditioner.temperature)
    await ethCache.set('setMessageLivingRoomTV', req.body.tv.on ? 'on' : 'off')
    await ethCache.set('setMessageliving_room_light', req.body.light.on ? 'on' : 'off')
    return res.json({
        code: '0',
        msg: '',
        info: null
    })
})

router.get('/kitchen', async (req, res, next) => {
    return res.json({
        code: '0',
        msg: '',
        info: {
            light: {
                on: await ethCache.get('getMessagekitchen_light') === 'on'
            },
            microwaveOven: {
                on: await ethCache.get('getMessagekitchen_Microwave_Oven') === 'on'
            },
            riceCooker: {
                on: await ethCache.get('getMessagekitchen_Rice_cooker') === 'on'
            },
            lampblackMachine: {
                on: await ethCache.get('getMessagekitchen_Lampblack_machine') === 'on'
            }
        }
    })
})

router.put('/kitchen', async(req, res) => {
    await ethCache.set('setMessagekitchen_light', req.body.light.on ? 'on': 'off')
    await ethCache.set('setMessagekitchen_Microwave_Oven', req.body.microwaveOven.on ? 'on': 'off')
    await ethCache.set('setMessagekitchen_Rice_cooker', req.body.riceCooker.on ? 'on': 'off')
    await ethCache.set('setMessagekitchen_Lampblack_machine', req.body.lampblackMachine.on ? 'on': 'off')
    return res.json({
        code: '0',
        msg: '',
        info: null
    })
})

router.get('/room1', async (req, res) => {
    return res.json({
        code: '0',
        msg: '',
        info: {
            airConditioner: {
                on: await ethCache.get('getMessageroom1_Air_conditioner_S') === 'on',
                temperature: await ethCache.get('getMessageroom1_Air_conditioner_T')
            },
            light: {
                on: await ethCache.get('getMessageroom1_light') === 'on'
            },
            besideLamp: {
                on: await ethCache.get('getMessageroom1_Bedside_lamp') === 'on'
            },
            tv: {
                on: await ethCache.get('getMessageroom1_TV') === 'on'
            }
        }
    })
})

router.put('/room1', async (req, res) => {
    await ethCache.set('setMessageroom1AirConditioner_S', req.body.airConditioner.on ? 'on': 'off')
    await ethCache.set('setMessageroom1AirConditioner_T', req.body.airConditioner.temperature)
    await ethCache.set('setMessageroom1_ligth', req.body.light.on ? 'on': 'off')
    await ethCache.set('setMessageroom1_Bedside_lamp', req.body.besideLamp.on ? 'on': 'off')
    await ethCache.set('setMessageroom1_TV', req.body.tv.on ? 'on': 'off')
    return res.json({
        code: '0',
        msg: '',
        info: null
    })

})

router.get('/room2', async (req, res) => {
    return res.json({
        code: '0',
        msg: '',
        info: {
            airConditioner: {
                on: await ethCache.get('getMessageroom2_Air_conditioner_S') === 'on',
                temperature: await ethCache.get('getMessageroom2_Air_conditioner_T')
            },
            light: {
                on: await ethCache.get('getMessageroom2_light') === 'on'
            },
            besideLamp: {
                on: await ethCache.get('getMessageroom2_Bedside_lamp') === 'on'
            },
            tv: {
                on: await ethCache.get('getMessageroom2_TV') === 'on'
            }
        }
    })
})

router.put('/room2', async (req, res) => {
    await ethCache.set('setMessageroom2AirConditioner_S', req.body.airConditioner.on ? 'on': 'off')
    await ethCache.set('setMessageroom2AirConditioner_T', req.body.airConditioner.temperature)
    await ethCache.set('setMessageroom2_light', req.body.light.on ? 'on': 'off')
    await ethCache.set('setMessageroom2_Bedside_lamp', req.body.besideLamp.on ? 'on': 'off')
    await ethCache.set('setMessageroom2_TV', req.body.tv.on ? 'on': 'off')
    return res.json({
        code: '0',
        msg: '',
        info: null
    })

})


router.get('/restroom', async (req, res) => {
    return res.json({
        code: '0',
        msg: '',
        info: {
            light: {
                on: await ethCache.get('getMessagerestroom_light') === 'on',
            },
            heater: {
                on: await ethCache.get('getMessagerestroom_Heater') === 'on'
            },
            heating: {
                on: await ethCache.get('getMessagerestroom_Heating') === 'on'
            }
        }
    })
})

router.put('/restroom', async (req, res) => {
    await ethCache.set('setMessagerestroom_light', req.body.light.on ? 'on': 'off')
    await ethCache.set('setMessagerestroom_Heater', req.body.heater.on ? 'on' : 'off')
    await ethCache.set('setMessagerestroom_Heating', req.body.heating.on ? 'on': 'off')
    return res.json({
        code: '0',
        msg: '',
        info: null
    })
})

module.exports = router