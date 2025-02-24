function createCyberwareUI(player) {
    initCyberwareData(player);
    const cyberware = player.persistentData.cyberware;
    const loadIcon = getLoadIcon(player);

    player.openChestGUI(`§f󏿐${loadIcon}`, 6, gui => {
        gui.playerSlots = false;

        gui.slot(4, 2, slot => {
            slot.item = cyberware.installed_os || 'redline:button_no_os';
        });

        if (cyberware.installed_os) {
            gui.slot(4, 3, slot => {
                slot.item = 'redline:button_eject';
                let isConfirming = false;
                
                slot.leftClicked = () => {
                    if (!isConfirming) {
                        slot.item = 'redline:button_eject_confirm';
                        isConfirming = true;
                    } else {
                        if (global.CyberwareConfigManager.findOSConfig(cyberware.installed_os)?.palladium_power) {
                            Utils.server.runCommandSilent(`superpower remove ${global.CyberwareConfigManager.findOSConfig(cyberware.installed_os).palladium_power} ${player.username}`);
                        }
                        
                        Object.entries(cyberware.installed_components).forEach(([type, itemId]) => {
                            const config = global.CyberwareConfigManager.findCyberwareConfig(itemId);
                            if (config?.palladium_power) {
                                Utils.server.runCommandSilent(`superpower remove ${config.palladium_power} ${player.username}`);
                            }
                            player.give(Item.of(itemId));
                        });
                        
                        player.give(Item.of(cyberware.installed_os));
                        
                        cyberware.installed_components = {};
                        cyberware.current_load = 0;
                        cyberware.installed_os = null;
                        
                        player.sendSystemMessage('§cOS and all components removed!');
                        createCyberwareUI(player);
                    }
                };
            });
        }

        let leftSideItems = 0;
        let rightSideItems = 0;
        
        Object.entries(cyberware.installed_components).forEach(([type, itemId]) => {
            const renderSide = leftSideItems < 4 
                ? { itemSlot: [1, 1 + leftSideItems], ejectSlot: [0, 1 + leftSideItems] }
                : { itemSlot: [7, 1 + rightSideItems], ejectSlot: [8, 1 + rightSideItems] };

            gui.slot(renderSide.itemSlot[0], renderSide.itemSlot[1], slot => {
                slot.item = itemId;
            });

            gui.slot(renderSide.ejectSlot[0], renderSide.ejectSlot[1], slot => {
                slot.item = 'redline:button_eject';
                let isConfirming = false;

                slot.leftClicked = () => {
                    if (!isConfirming) {
                        slot.item = 'redline:button_eject_confirm';
                        isConfirming = true;
                        gui.update();
                    } else {
                        const config = global.CyberwareConfigManager.findCyberwareConfig(itemId);
                        if (config?.palladium_power) {
                            Utils.server.runCommandSilent(`superpower remove ${config.palladium_power} ${player.username}`);
                        }
                        cyberware.current_load -= config.load_cost;
                        delete cyberware.installed_components[type];
                        player.give(Item.of(itemId));
                        player.sendSystemMessage(config.remove_message);
                        createCyberwareUI(player);
                    }
                };
            });

            leftSideItems < 4 ? leftSideItems++ : rightSideItems++;
        });
    });
}
