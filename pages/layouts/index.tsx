import type { NextPage } from 'next';
import { DocHead } from '../../components/Head/Head';
import Column from '../../layouts/Column/Column';
import Container from '../../layouts/Container/Container';

const styles = {
    example: `p-4 bg-gray-300`,
};

const Home: NextPage = () => {
    return (
        <>
            <DocHead title="Layouts: Columns" />

            <Container>
                <Column cols="2" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="3" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example} md:col-span-2`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example} md:row-span-2`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="4" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
            </Container>

            <Container>
                <Column cols="1/3" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="2" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="2/3" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
            </Container>

            <Container bgColor="gray">
                <Column cols="2" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="3" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example} md:col-span-2`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example} md:row-span-2`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="4" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
            </Container>

            <Container bgColor="gray">
                <Column cols="1/3" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="2" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
                <Column cols="2/3" maxWidth="5xl">
                    <p className={`${styles.example}`}>Layouts</p>
                    <p className={`${styles.example}`}>Layouts</p>
                </Column>
            </Container>
        </>
    );
};

export default Home;
