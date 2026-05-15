const colds = [

]

const hots = [

]

ServerEvents.tags('item', event => {
    colds.forEach(cold => event.add('toughasnails:cooling_armor', cold))
    hots.forEach(hot => event.add('toughasnails:heating_armor', hot))
})
