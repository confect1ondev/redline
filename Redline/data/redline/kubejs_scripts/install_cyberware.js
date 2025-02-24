// Handles installing OS's and component items
ItemEvents.rightClicked((event) => {
    const player = event.player;
    
    initCyberwareData(player);

    const osConfig = global.CyberwareConfigManager.findOSConfig(event.item.id);
    if (osConfig) {
        handleOSInstallation(player, event, osConfig);
        return;
    }

    const cyberwareConfig = global.CyberwareConfigManager.findCyberwareConfig(event.item.id);
    if (cyberwareConfig) {
        handleCyberComponentInstallation(player, event, cyberwareConfig);
        return;
    }

    if (event.item.id == "redline:butcher") { 
        createCyberwareUI(player);
    }
});

function handleOSInstallation(player, event, osConfig) {
    const cyberware = player.persistentData.cyberware;
    
    if (cyberware.installed_os) {
        player.sendSystemMessage('§cOS already installed!');
        return;
    }

    osConfig.command(player);
    cyberware.installed_os = osConfig.item;
    
    if (osConfig.palladium_power) {
        Utils.server.runCommandSilent(`superpower add ${osConfig.palladium_power} ${player.username}`);
    }
    
    event.item.count--;
}

function handleCyberComponentInstallation(player, event, cyberwareConfig) {
    const cyberware = player.persistentData.cyberware;
    
    if (!cyberware.installed_os) {
        player.sendSystemMessage('§cYou must install an OS first!');
        return;
    }

    if (cyberware.installed_components[cyberwareConfig.type]) {
        player.sendSystemMessage('§cA component of this type is already installed!');
        return;
    }

    const maxLoad = global.CyberwareConfigManager.getMaxLoad(player);
    
    if (cyberware.current_load + cyberwareConfig.load_cost <= maxLoad) {
        cyberware.current_load += cyberwareConfig.load_cost;
        cyberware.installed_components[cyberwareConfig.type] = cyberwareConfig.item;
        
        if (cyberwareConfig.palladium_power) {
            Utils.server.runCommandSilent(`superpower add ${cyberwareConfig.palladium_power} ${player.username}`);
        }
        
        player.sendSystemMessage(
            cyberwareConfig.install_message + 
            ' Load: ' + cyberware.current_load + '/' + maxLoad
        );
        
        event.item.count--;
    } else {
        player.sendSystemMessage('§cCannot install! Exceeds load capacity.');
    }
}