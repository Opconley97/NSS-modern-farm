import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const harvestPlants = (plantsArray) => {
    let seedArray = [];
    //let cornArray = [];
    /*for (const corns of plantsArray) {
        if (corns.type === "Corn") {
            cornArray.push(createCorn())
        }
    }*/

//Dividing cornArray.length by two to have the right amount of corns to push
//let test = cornArray.length / 2

    for (const plants of plantsArray) {
        if (plants.type === "Asparagus") {
            for (var x = 0; x <`${plants.output}`; x++) {
            seedArray.push(createAsparagus())
            }
        } else if (plants.type === "Corn") {
            //for (var x = 0; x < (test); x++) {
                    seedArray.push({
                        type: "Corn",
                        height: 180,
                        output: 6
                    },
                    {
                        type: "Corn",
                        height: 180,
                        output: 6
                    },
                    {
                        type: "Corn",
                        height: 180,
                        output: 6
                    })
            //}

        } else if (plants.type === "Potato") {
            for (var x = 0; x < `${plants.output}`; x++) {
                seedArray.push(createPotato())
            }
            
        } else if (plants.type === "Soybean") {
            for (var x = 0; x < `${plants.output}`; x++) {
                seedArray.push(createSoybean())
            }

        } else if (plants.type === "Sunflower") {
            for (var x = 0; x < `${plants.output}`; x++) {
                seedArray.push(createSunflower())
            }

        } else if (plants.type === "Wheat") {
            for (var x = 0; x < `${plants.output}`; x++) {
                seedArray.push(createWheat())
            }
        }
    }
    return seedArray
}