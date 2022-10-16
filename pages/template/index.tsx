import type { NextPage } from 'next';
import { DocHead } from '../../components/Head/Head';
import Column from '../../layouts/Column/Column';
import Container from '../../layouts/Container/Container';
import TopNav from '../../components/Navigation/TopNav/TopNav';
// import TopStacked from '../../components/Navigation/TopStacked/TopStacked';

const styles = {
    example: `p-4 bg-gray-100`,
};

const Home: NextPage = () => {
    return (
        <>
            <DocHead title="Layouts: Columns" />

            <TopNav />

            <Container>
                <Column cols="4">
                    <p className={`${styles.example}`}>Layout 1</p>
                    <p className={`${styles.example} md:col-span-2`}>
                        Layout 2
                    </p>
                    <p className={`${styles.example}`}>Layout 3</p>
                    <p className={`${styles.example}`}>Layout 4</p>
                    <p
                        className={`${styles.example} md:row-span-3 md:col-span-3`}
                    >
                        Layout 5
                    </p>
                    <p className={`${styles.example}`}>Layout 6</p>
                    <p className={`${styles.example}`}>Layout 7</p>
                    <p
                        className={`${styles.example} md:row-span-2 md:col-span-2`}
                    >
                        Layout 8
                    </p>
                    <p className={`${styles.example}`}>Layout 9</p>
                    <p className={`${styles.example}`}>Layout 10</p>
                    <p className={`${styles.example}`}>Layout 11</p>
                    <p className={`${styles.example}`}>Layout 12</p>
                </Column>
            </Container>
        </>
    );
};

export default Home;
