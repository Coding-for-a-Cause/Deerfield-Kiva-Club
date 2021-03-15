import { GetStaticProps } from "next";
import fs from 'fs';
import path from 'path';

import TitleLayout from "../templates/TitleLayout";
import parseCsv from "../utils/parseCsv";
import Table from '../components/Table';


type LoansData = {
    data: Array<Array<string>>;
}

const Loans = ({ data }: LoansData) => {
    return (
        <TitleLayout title="Outstanding Loans">
            <div className="table-container">
                <Table data={ data } />
            </div>
        </TitleLayout>
    );
}

export default Loans;

export const getStaticProps: GetStaticProps = async (context) => {

    const loansPath = path.join(process.cwd(), 'data', 'loans', 'kiva_loans.csv');
    const data = parseCsv(fs.readFileSync(loansPath, 'utf-8'));

    return {
        props: {
            data
        }
    };
}