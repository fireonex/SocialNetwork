export const RequiredField = (value: string) => {
    if (value) {
        return undefined
    } else {
        return 'field is required'
    }
}


export const MaxLengthCreator = (length: number) => (value: string) => {
    if (value.length <= length) {
        return undefined
    } else {
        return `maximum length is ${length} symbols`
    }
}

export const MinLengthCreator = (length: number) => (value: string) => {
    if (value.length >= length) {
        return undefined
    } else {
        return `minimum length is ${length} symbols`
    }
}
