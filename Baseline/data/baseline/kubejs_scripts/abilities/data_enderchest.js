// Script by FSang18 in the ThreeTAG Discord

NetworkEvents.dataReceived("open_enderchest", (event) => {
    const { player } = event;

    player.openInventoryGUI(player.enderChestInventory, Component.translatable("container.enderchest"));
});
