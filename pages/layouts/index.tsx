import type { NextPage } from 'next';
import { DocHead } from '../../components/Head/Head';
import Column from '../../layouts/Column/Column';

const styles = {
    example: `p-4 bg-gray-200`,
};

const Home: NextPage = () => {
    return (
        <>
            <DocHead title="Layouts: Columns" />

            <Column cols="2" maxWidth="3xl">
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
            </Column>

            <Column cols="2" maxWidth="5xl">
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
            </Column>

            <Column cols="3" maxWidth="5xl">
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
            </Column>

            <Column cols="3" maxWidth="5xl">
                <p className={`${styles.example} col-span-2`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example} row-span-3`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
                <p className={`${styles.example}`}>Layouts</p>
            </Column>
        </>
    );
};

export default Home;
