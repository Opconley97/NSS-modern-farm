export const catalog = (harvestedField) => {
    let HTMLString = ""
    for (const harvest of harvestedField) {
        HTMLString += `<section class="plant">${harvest.type}</section>`
    }
    return HTMLString
}