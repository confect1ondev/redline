// Utility functions to help with Redline.

/**
 * init cyberware structures as needed
 * @param {Internal.PlayerJS} player - The player object to initialize cyberware for
 */
function initCyberwareData(player) {
    if (!player.persistentData.cyberware) {
        player.persistentData.cyberware = {
            current_load: 0,
            installed_os: null,
            installed_components: {}
        };
    }
}

/**
 * Find the corresponding GUI for the current cyberware load
 * @param {Internal.PlayerJS} player - The player being checked
 * @returns {string} Unicode character (with a custom font) to show the players load
 */
function getLoadIcon(player) {
    const { cyberware } = player.persistentData;
    const maxLoad = global.CyberwareConfigManager.getMaxLoad(player);
    
    // Return empty string if no max load is defined
    if (maxLoad === 0) return '';

    const percentage = (cyberware.current_load / maxLoad) * 100;
    if (percentage === 0) return '';
    if (percentage <= 14.28) return '';
    if (percentage <= 28.57) return '';
    if (percentage <= 42.85) return '';
    if (percentage <= 57.14) return '';
    if (percentage <= 71.42) return '';
    if (percentage <= 85.71) return '';
    return '';
}