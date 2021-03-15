/**
 * A function that takes in a CSV (comma-separated values file) and outputs a 
 * 2D-array representing the data in the CSV file.
 * @param csv the csv data
 * @param valueDelim the delimiter separating values in a data record (row) of values.
 * @param recordDelim the delimiter separating data records (rows) of values.
 * @returns An array of arrays of strings where each array is a row and each string is a value.
 */
const parseCsv = (csv: string, valueDelim: string = ",", recordDelim: string = "\n"): Array<Array<string>> => {
    const rows = csv.split(recordDelim); // split each row
    let arr = [];

    for (let r of rows) {
        const values = r.split(valueDelim); // split each value
        arr[arr.length] = values;
    }

    return arr;
}

export default parseCsv;