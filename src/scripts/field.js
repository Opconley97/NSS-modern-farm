let plantField = [];

export const addPlant = (seedObj) => {
    plantField.push(seedObj)
}

export const usePlants = () => {
    return plantField
}