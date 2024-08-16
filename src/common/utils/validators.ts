export type FieldValidatorType = (value: string) => string | undefined


export const RequiredField = (value: string) => {
    if (value) {
        return undefined
    } else {
        return 'field is required'
    }
}

export const MaxLengthCreator = (length: number) => (value: string) => {
    if (value && value.length <= length) {
        return undefined
    } else {
        return `maximum length is ${length} symbols`
    }
}

export const MinLengthCreator = (length: number) => (value: string) => {
    if (value && value.length >= length) {
        return undefined
    } else {
        return `minimum length is ${length} symbols`
    }
}


export const UrlValidator = (value: string) => {
    const urlPattern = /^(https?:\/\/)?([\w\-])+(\.[\w\-]+)+(\.[a-z]{2,6})?(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    if (value && !urlPattern.test(value)) {
        return 'Invalid URL';
    } else {
        return undefined;
    }
}

