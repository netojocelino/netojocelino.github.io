<script lang="ts">
export default {
    methods: {
        openLinkedIn() {
            const url = 'https://www.linkedin.com/in/netojocelino'
            console.log(url)
            window.open(url, '_blank')
        },
        openGitHub() {
            const url = 'https://github.com/netojocelino'
            console.log(url)
            window.open(url, '_blank')
        },
    },
}
</script>

<template>
    <main className="App">
        <header class="Header">
            <div>
                <h1>Jocelino Neto</h1>
                <h3>Fullstack developer</h3>
            </div>

            <button @click="openLinkedIn" className="v-button v-button-outline-transparent" type="button"
                value="LinkedIn">LinkedIn</button>

            <button @click="openGitHub" className="v-button v-button-outline-transparent" type="button"
                value="GitHub">GitHub</button>

        </header>


        <section class="Main-Content">

            <div class="Descriptions">
                <div class="Professional-Contact">
                    <h2>Professional Contact</h2>

                    <dl>
                        <dt>email</dt>
                        <dd>netoj96@live.com</dd>
                    </dl>
                </div>

                <div class="Experiences-History">
                    <h2>Experiences</h2>

                    <dl>
                        <dt>City, State &mdash; Start Year - Final Year</dt>
                        <dd>
                            <details>
                                <summary>Company Name</summary>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </details>
                        </dd>

                    </dl>
                </div>
            </div>
            <div class="Side-Menu">
                <aside>
                    <h2>Repositories</h2>
                    <dl>
                        <dt>Project Name</dt>
                        <dd>last update. <a>open</a></dd>
                    </dl>
                </aside>
                <aside>
                    <h2>Events</h2>
                    <dl>
                        <dt>Event Name</dt>
                        <dd>occours at. <a>open</a></dd>
                    </dl>
                </aside>
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

.Header {
    margin: 1.5rem 1.5rem 1rem;
    padding: 2rem 1.5rem;
    border-radius: 0.2rem;

    text-align: center;

    background-color: var(--jt-main-white);
}

.Header h1 {
    font-weight: bolder;
}


.v-button {
    min-width: 10rem;
    margin: 1rem;
    padding: .5rem 1.5rem;

    border-width: 1px;
    border-color: var(--jt-button-main-border);
    border-radius: .2rem;

    background-color: var(--jt-main-white);

    cursor: pointer;
}

.v-button:hover,
.v-button:active {
    box-shadow: 2px 2px 4px var(--jt-button-hover-border);
    background-color: var(--jt-button-hover-background-color);
}

.v-button-outline-transparent {}
</style>
