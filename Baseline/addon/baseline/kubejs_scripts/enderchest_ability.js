// Script by FSang18 in the ThreeTAG Discord

StartupEvents.registry("palladium:abilities", event => {    
    
    event.create("baseline:enderchest")
    // Preset icon, can also be changed individually in the power json
        .icon(palladium.createItemIcon('minecraft:ender_chest'))
    // Documentation description
        .documentationDescription('Ability to create a GUI for opening / closing an ender chest.')
    // Adding a configurable property for the condition that can be changed in the power json
    
    
    .tick((entity, entry, holder, enabled) => {
    
        if (enabled) {
            Client.player.sendData("open_enderchest", {})
            };
        });
    });