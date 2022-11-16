<script lang="ts">
import VButton from './components/Button.vue'
import VHeader from './components/Header.vue'
import VCardItem from './components/CardItem.vue'

export default {
    components: {
        VButton,
        VCardItem,
        VHeader,
    },
    methods: {
        openLinkedIn() {
            const url = 'https://www.linkedin.com/in/netojocelino'
            window.open(url, '_blank')
        },
        openGitHub() {
            const url = 'https://github.com/netojocelino'
            window.open(url, '_blank')
        },
    },
}
</script>

<template>
    <main className="App">
        
        <v-header
            title="Jocelino Neto"
            subtitle="Fullstack developer"
        >
            <template v-slot:default>
                <v-button
                    @anchor="openLinkedIn"
                    styled="outline-transparent"
                    type="button"
                    label="LinkedIn"
                />
    
                <v-button
                    @anchor="openGitHub"
                    styled="outline-transparent"
                    type="button"
                    label="GitHub"
                />
            </template>
        </v-header>


        <section className="Main-Content">

            <div className="Descriptions">
                <div className="Description-Card">
                    <h2 className="Card-Title">Professional Contact</h2>

                    <v-card-item
                        icon="@"
                        item-key="email"
                        item-value="netoj96@live.com"
                    />
                </div>

                <div className="Description-Card">
                    <h2 className="Card-Title">Experiences</h2>

                    <v-card-item
                        details-title="Company Name"
                        details-anchor="http://githubx.com/netojocelino/?repository"
                        details-subtitle="City, State &mdash; Start Year - Final Year"
                        details-paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    />
                </div>
            </div>
            <div className="Side-Menu">
                <div className="Menu-Block">
                    <h2 className="Menu-Title">Repositories</h2>
                    <div className="Menu-Item">
                        <span className="Menu-Item-Title">Project Name</span>
                        <span className="Menu-Item-Description">last update. <a>open</a></span>
                    </div>
                </div>
                <div className="Menu-Block">
                    <h2 className="Menu-Title">Events</h2>
                    <div className="Menu-Item">
                        <span className="Menu-Item-Title">Event Name</span>
                        <span className="Menu-Item-Description">occours at. <a>open</a></span>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<style scoped>
.App {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.Main-Content {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-around;
}

.Descriptions {
    display: flex;
    flex-direction: column;

    width: max(50%, 53rem);
}

.Description-Card {
    background-color: var(--jt-main-white);

    box-shadow: 4px 4px 8px var(--jt-shadow-rgba-main-black);

    padding: 1rem 1.5rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
}

.Description-Card .Card-Title {
    font-weight: normal;
}



.Main-Content > .Side-Menu {
    display: flex;
    flex-direction: column;

    width: max(30%, 26rem);
}

.Menu-Block {
    background-color: var(--jt-main-white);

    box-shadow: 4px 4px 8px var(--jt-shadow-rgba-main-black);

    padding: 1rem 1.5rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
}

.Menu-Block .Menu-Item {
    display: flex;
    flex-direction: column;
}

.Menu-Item .Menu-Title {
    font-weight: normal;
}

.Menu-Item .Menu-Item-Title {
    font-size: 1.1rem;
}

.Menu-Item .Menu-Item-Description {
    color: var(--jt-main-gray);
}
</style>
