
const express = require('express')
const router = express.Router()
const ethCache = require('./eth_cache')

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

router.put('/livingRoom', async (req, res, next) => {
    await ethCache.set('setsetMessageLivingRoomAirConditioner_S', req.body.airConditioner.on ? 'on' : 'off')
    await ethCache.set('setsetMessageLivingRoomAirConditioner_T', req.body.airConditioner.temperature)
    await ethCache.set('getMessagekitchen_Microwave_Oven', req.body.microwaveOven.on ? 'on' : 'off')
    await ethCache.set('setMessagekitchen_Rice_cooker', req.body.riceCooker.on ? 'on' : 'off')
    await ethCache.set('setMessagekitchen_Lampblack_machine', req.body.lampblackMachine.on ? 'on' : 'off')

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
    await ethCache.set('setMessagekitchen_light', req.light.on ? 'on': 'off')
    await ethCache.set('setMessagekitchen_Microwave_Oven', req.microwaveOven.on ? 'on': 'off')
    await ethCache.set('setMessagekitchen_Rice_cooker', req.riceCooker.on ? 'on': 'off')
    await ethCache.set('setMessagekitchen_Lampblack_machine', req.lampblackMachine.on ? 'on': 'off')
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
    await ethCache.set('setMessageroom1_Air_conditioner_S', req.airConditioner.on ? 'on': 'off')
    await ethCache.set('setMessageroom1_Air_conditioner_S', req.airConditioner.temperature)
    await ethCache.set('setMessageroom1_light', req.light.on ? 'on': 'off')
    await ethCache.set('setMessageroom1_Bedside_lamp', req.besideLamp.on ? 'on': 'off')
    await ethCache.set('setMessageroom1_TV', req.tv.on ? 'on': 'off')
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
    await ethCache.set('setMessageroom2_Air_conditioner_S', req.airConditioner.on ? 'on': 'off')
    await ethCache.set('setMessageroom2_Air_conditioner_S', req.airConditioner.temperature)
    await ethCache.set('setMessageroom2_light', req.light.on ? 'on': 'off')
    await ethCache.set('setMessageroom2_Bedside_lamp', req.besideLamp.on ? 'on': 'off')
    await ethCache.set('setMessageroom2_TV', req.tv.on ? 'on': 'off')
    return res.json({
        code: '0',
        msg: '',
        info: null
    })

})


router.get('/restRoom', async (req, res) => {
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

router.put('/restRoom', async (req, res) => {
    await ethCache.set('setMessagerestroom_light', req.light.on ? 'on': 'off')
    await ethCache.set('setMessagerestroom_Heater', req.heater.on ? 'on' : 'off')
    await ethCache.set('setMessagerestroom_Heating', req.heating.on ? 'on': 'off')
    return res.json({
        code: '0',
        msg: '',
        info: null
    })
})

module.exports = router