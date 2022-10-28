import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeed = (yearsPlan) => {
    for (const rows of yearsPlan) {
        for (const plants of rows) {
           if (plants === "Asparagus") {
            addPlant(createAsparagus())
           } else if (plants === "Corn") {
            let corn = createCorn()
            for (const corns of corn) {
                addPlant(corns)
            }
           } else if (plants === "Potato") {
            addPlant(createPotato())
           } else if (plants === "Soybean") {
            addPlant(createSoybean())
           } else if (plants === "Sunflower") {
            addPlant(createSunflower())
           } else if (plants === "Wheat") {
            addPlant(createWheat())
           }
        }
    }
    return yearsPlan
}
