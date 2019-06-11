const GameObject = require('./gameobject');

class ControllableObject extends GameObject {
    constructor(id, scene, pixelX, pixelY, key) {
        super(id, scene, pixelX, pixelY, key);


    }
}

module.exports = ControllableObject;
