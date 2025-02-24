// Script by apmaster3 in the ThreeTAG Discord

StartupEvents.registry('palladium:condition_serializer', (event) => {
    event.create('baseline:ground_distance')
        .addProperty("min", "integer", 0, "The minimum value")
        .addProperty("max", "integer", 10, "The maximum value")
        .test((entity, properties) => {
            const min = properties.get("min");
            const max = properties.get("max");

            let distance = checkDistance(entity);
            let hitBlock = distance >= min && distance <= max

            return hitBlock;

        });

});

function checkDistance(entity) {
    let world = entity.level
    let blockPos = entity.blockPosition();
    let distance = 0
    let x = blockPos.getX();
    let y = blockPos.getY();
    let z = blockPos.getZ();

    for(let i = y - 1; i > -64; i--) {
        let block = world.getBlock(x, i, z);
        if(block.id !== "minecraft:air") {
            return distance
        }
        distance ++
    }
    return -65

}