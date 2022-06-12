import Section from "shared/components/Section";

import styles from './homePage.module.css'

const HomePage = ()=> {
    return (
        <Section  title="HomePage" >
            <div className={styles.container}>
                Hello
            </div>
        </Section>
    )
}

export default HomePage;