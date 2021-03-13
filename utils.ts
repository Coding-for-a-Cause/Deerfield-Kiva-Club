export const serializeFrontmatter = (frontmatter: { [key: string]: any }) => {
    let output = {};
    for(const [key, value] of Object.entries(frontmatter)) {
        if(value instanceof Date) {
            output[key] = `${value.getUTCMonth() + 1}/${value.getUTCDate()}/${value.getUTCFullYear()}`
        } else {
            output[key] = value;
        }
    }
    return output;
};
