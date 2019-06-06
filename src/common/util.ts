
/**
 * 生成一个用不重复的ID
 */
export const genNonDuplicateID = (randomLength: number) => {
    let idStr = Date.now().toString(36);
    idStr += Math.random().toString(36).substr(3, randomLength);
    return idStr;
}
