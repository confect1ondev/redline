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
            item: 'baseline:overlord_mk2',
            name: 'Overlord MK. 2',
            max_load: 100,
            palladium_power: 'baseline:overlord_mk2',
            command: (player) => {
                player.sendSystemMessage('§7[DaemonWare] §aOverlord MK. 2 OS initialized.');
            }
        },
        {
            item: 'baseline:echelon_1',
            name: 'Echelon I',
            max_load: 125,
            palladium_power: 'baseline:echelon_1',
            command: (player) => {
                player.sendSystemMessage('§7[DaemonWare] §aEchelon I OS initialized.');
            }
        },
        {
            item: 'baseline:echelon_2',
            name: 'Echelon II',
            max_load: 160,
            palladium_power: 'baseline:echelon_2',
            command: (player) => {
                player.sendSystemMessage('§7[DaemonWare] §aEchelon II OS initialized.');
            }
        },
        {
            item: 'baseline:echelon_3',
            name: 'Echelon III',
            max_load: 200,
            palladium_power: 'baseline:echelon_3',
            command: (player) => {
                player.sendSystemMessage('§7[DaemonWare] §aEchelon III OS initialized.');
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
            load_cost: 40,
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
            load_cost: 50,
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
        },
        {
            item: 'baseline:dimensional_stabilizer',
            type: 'dimensional_stabilizer',
            name: 'Dimensional Stabilizer',
            load_cost: 30,
            install_message: '§7[Installation] §aDimensional sync successful.',
            remove_message: '§7[Warning] §cDimensional link severed.',
            palladium_power: 'baseline:dimensional_stabilizer'
        },
        {
            item: 'baseline:gravity_manipulator',
            type: 'gravity_manipulator',
            name: 'Gravity Manipulator',
            load_cost: 50,
            install_message: '§7[Installation] §aGravity Manipulator calibrated.',
            remove_message: '§7[Warning] §cGravity Manipulator ejected. Recalibrating to normal gravity.',
            palladium_power: 'baseline:gravity_manipulator'
        },
        {
            item: 'baseline:gravity_manipulator_2',
            type: 'gravity_manipulator',
            name: 'Gravity Manipulator MK. 2',
            load_cost: 60,
            install_message: '§7[Installation] §aGravity Manipulator calibrated.',
            remove_message: '§7[Warning] §cGravity Manipulator ejected. Recalibrating to normal gravity.',
            palladium_power: 'baseline:gravity_manipulator_2'
        },
        {
            item: 'baseline:impact_absorbers',
            type: 'impact_absorbers',
            name: 'Impact Absorbers',
            load_cost: 60,
            install_message: '§7[Installation] §aImpact Absorbers installed.',
            remove_message: '§7[Warning] §cImpact Absorbers removed.',
            palladium_power: 'baseline:impact_absorbers'
        }
    ]
});
