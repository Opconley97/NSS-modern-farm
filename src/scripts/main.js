import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { plantSeed } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan();
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

let fieldArray = usePlants()

plantSeed(yearlyPlan)

let harvestedField = harvestPlants(fieldArray)

console.log(yearlyPlan)

console.log(harvestedField)

console.log(fieldArray)
const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = catalog(harvestedField)

