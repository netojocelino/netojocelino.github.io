type ItemMenuType = {
    title: String,
    description: String,
    anchorTo: String,
    anchorTitle: String,
}

function isItemMenuType (value: any) : value is ItemMenuType {
    if (value.title === undefined || typeof value.title !== 'string') {
        return false
    }
    if (value.description === undefined || typeof value.description !== 'string') {
        return false
    }
    if (value.anchorTo === undefined || typeof value.anchorTo !== 'string') {
        return false
    }
    if (value.anchorTo === undefined || typeof value.anchorTo !== 'string') {
        return false
    }
    return true
}



export type { ItemMenuType }
export { isItemMenuType }
