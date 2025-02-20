global.CYBERWARE_CONFIGS = global.CYBERWARE_CONFIGS || [];

global.CYBERWARE_CONFIGS.push({
    id: 'baseline',
    os_slots: [
        {
            item: 'baseline:overlord_mk1',
            name: 'Overlord MK. 1',
            max_load: 60,
            palladium_power: 'baseline:overlord_mk1',
            command: (player) => {
                player.sendSystemMessage('§7[DaemonWare] §aOverlord MK. 1 OS initialized.');
            }
        },
        {
            item: 'baseline:dominion_core',
            name: 'Dominion Core OS',
            max_load: 250,
            palladium_power: 'baseline:dominion_core',
            command: (player) => {
                player.sendSystemMessage('§7[DaemonWare] §aDominion Core OS initialized. All systems online.');
            }
        }
    ],
    cyberware_items: [
        {
            item: 'baseline:thermal_plating',
            type: 'thermal_plating',
            name: 'Thermal Plating',
            load_cost: 30,
            install_message: '§7[Installation] §aThermal Plating system online.',
            remove_message: '§7[Warning] §cThermal Plating system disconnected.',
            palladium_power: 'baseline:thermal_plating'
        },
        {
            item: 'baseline:plasma_palm',
            type: 'plasma_palm',
            name: 'Plasma Palm',
            load_cost: 45,
            install_message: '§7[Installation] §aPlasma Palm system calibrated.',
            remove_message: '§7[Warning] §cPlasma Palm system disconnected.',
            palladium_power: 'baseline:plasma_palm'
        },
        {
            item: 'baseline:neural_overclock',
            type: 'neural_overclock',
            name: 'Neural Overclock',
            load_cost: 25,
            install_message: '§7[Installation] §aNeural Overclock sync complete.',
            remove_message: '§7[Warning] §cNeural Overclock neural link severed.',
            palladium_power: 'baseline:neural_overclock'
        },
        {
            item: 'baseline:hydraulic_tendons',
            type: 'hydraulic_tendons',
            name: 'Hydraulic Tendons',
            load_cost: 35,
            install_message: '§7[Installation] §aHydraulic Tendons systems engaged.',
            remove_message: '§7[Warning] §cHydraulic Tendons systems offline.',
            palladium_power: 'baseline:hydraulic_tendons'
        }
    ]
});
