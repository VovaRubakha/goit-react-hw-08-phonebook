import Section from "shared/components/Section";

import styles from './homePage.module.css'

const HomePage = ()=> {
    return (
        <Section  title="HomePage" >
            <div className={styles.container}>
                <img src="https://www.iconpacks.net/icons/1/free-phone-book-icon-1112-thumb.png" alt="Phonebook" />

                <h1 className={styles.title}>Can't remember any phone number, This phonebook can help you. Enjoy! </h1>
            </div>
        </Section>
    )
}

export default HomePage;