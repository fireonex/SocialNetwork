export const updateObjectInArray = <T extends { [key: string]: any }>(
    items: T[],
    itemId: T[keyof T],
    objPropName: keyof T,
    newObjProp: Partial<T>
): T[] => {
    return items.map(el =>
        el[objPropName] === itemId ? { ...el, ...newObjProp } : el
    );
}