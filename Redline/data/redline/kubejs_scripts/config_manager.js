// Cyberware Configuration Management

const CyberwareConfigManager = {
    /**
     * Get the max cyberware load for a player
     * @param {Object} player - The player object
     * @returns {number} max cyberware load
     */
    getMaxLoad(player) {
        const { cyberware } = player.persistentData;
        
        if (!cyberware || !cyberware.installed_os) {
            return 0;
        }
        
        const osConfig = this.findOSConfig(cyberware.installed_os);
        return osConfig ? osConfig.max_load : 0;
    },

    /**
     * Get all available OS slots from configurations
     * @returns {Array} List of OS slots
     */
    getAllOSSlots() {
        return global.CYBERWARE_CONFIGS.reduce((slots, config) => {
            return config.os_slots ? slots.concat(config.os_slots) : slots;
        }, []);
    },

    /**
     * Get all cyberware items from all configurations
     * @returns {Array} List of cyberware items
     */
    getAllCyberwareItems() {
        return global.CYBERWARE_CONFIGS.reduce((items, config) => {
            return config.cyberware_items ? items.concat(config.cyberware_items) : items;
        }, []);
    },

    /**
     * Find OS configuration by item ID
     * @param {string} itemId
     * @returns {Object|undefined} OS cfg
     */
    findOSConfig(itemId) {
        return this.getAllOSSlots().find(os => os.item === itemId);
    },

    /**
     * Find cyberware configuration by item ID
     * @param {string} itemId
     * @returns {Object|undefined} Cyberware cfg
     */
    findCyberwareConfig(itemId) {
        return this.getAllCyberwareItems().find(c => c.item === itemId);
    }
};

// Ensure global access to the configuration manager
global.CYBERWARE_CONFIGS = global.CYBERWARE_CONFIGS || [];
global.CyberwareConfigManager = CyberwareConfigManager;
