import fs from 'fs';
import path from 'path';


const cwd = process.cwd();
const pubdir = path.join(cwd, 'public');


/**
 * Searches for a file an ambiguous extension and returns the path to the file including the file extension.
 * @param fp path of the file with no extension.
 * @returns The path of the file with the extension.  If a matching file cannot be found, <b>fp</b> is returned
 */
const getPublicFilePath = (fp: string): string => {
    const split = fp.split('/');
    const fileName = split[split.length - 1];
    const dirOfFile = fp.substr(0, fp.lastIndexOf('/'));
    const filesList = fs.readdirSync(path.join(pubdir, dirOfFile));

    for (let fn of filesList) {
        if (fn.substr(0, fn.lastIndexOf('.')) === fileName) {
            return path.join(dirOfFile, fn);
        }
    }

    return fp;
}

export default getPublicFilePath;