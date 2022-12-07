<script lang="ts">
import VButton from "./components/VButton.vue";
import VHeader from "./components/VHeader.vue";
import VCardItem from "./components/CardItem.vue";
import VSideMenu from "./components/SideMenu.vue";

import api from "./services/api";

export default {
  components: {
    VButton,
    VCardItem,
    VHeader,
    VSideMenu,
  },
  created() {
    this.loadData();
  },
  data() {
    const repoitems: any[] = [];

    const header = {
      role: "",
      status: "",
      title: "",
    };

    const contacts: any[] = [];
    const experiences: any[] = [];

    return {
      contacts,
      experiences,
      header,
      repoitems,
    };
  },
  methods: {
    openLinkedIn() {
      const url = "https://www.linkedin.com/in/netojocelino";
      window.open(url, "_blank");
    },
    openGitHub() {
      const url = "https://github.com/netojocelino";
      window.open(url, "_blank");
    },
    openDevTo() {
      const url = "https://dev.to/netojocelino";
      window.open(url, "_blank");
    },
    async loadData() {
      const data = await api.about();

      this.header = data.header;
      this.contacts = data.contacts;
      this.experiences = data.experiences;
      this.repoitems = data.repoitems;
    },

    experienceDetails(experience: {
      location: String;
      startAt: String;
      ends: String;
    }) {
      const startedAt = new Date(
        experience.startAt.toString()
      ).getUTCFullYear();
      const endedAt = new Date(experience.ends.toString()).getUTCFullYear();

      return `${experience.location} — ${startedAt} - ${endedAt}`;
    },
  },
};
</script>

<template>
  <main className="App">
    <v-header :title="header.title" :subtitle="header.role">
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

        <v-button
          @anchor="openDevTo"
          styled="outline-transparent"
          type="button"
          label="DevTo"
        />
      </template>
    </v-header>

    <section className="Main-Content">
      <div className="Descriptions">
        <div className="Description-Card">
          <h2 className="Card-Title">Professional Contact</h2>

          <v-card-item
            v-for="(contact, index) in contacts"
            :key="index"
            :icon="contact.icon"
            :item-key="contact.key"
            :item-value="contact.value"
          />
        </div>

        <div className="Description-Card">
          <h2 className="Card-Title">Experiences</h2>

          <v-card-item
            v-for="(company, index) in experiences"
            :key="index"
            :detailsTitle="`${company.role} @ ${company.name}`"
            :detailsAnchor="company.link"
            :detailsSubtitle="company.workForLong"
            :detailsParagraph="company.details"
          />
        </div>
      </div>
      <div className="Side-Menu">
        <v-side-menu title="Repository" :items="repoitems" />
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

@media (max-width: 1310px) {
  .Main-Content {
    flex-direction: column;
    align-items: stretch;
    align-self: center;
    width: max(96%, 53rem);
  }

  .Main-Content > .Side-Menu,
  .Descriptions {
    width: 100%;
  }
}
</style>
