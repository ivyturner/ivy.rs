export default {
  site: {
    // site metadata
    url: "https://ivy.rs",
    title: "ivy.rs",
    description: "Ivy Turner's personal website.",
  },

  author: {
    // my details
    name: "Ivy Turner",
    pronouns: "she/her",
    social: {
      fedi: "@ivy@social.lol",
      bsky: "@ivy.rs",
    },
    email: "ivy@ivy.rs",
  },

  settings: {
    analytics: {
      // defaults, replace through env variables
      enabled: false,
      source: "none",
    },
    redirects: {
      // goes to astro config
      "/source": "https://github.com/ivyturner/ivy.rs",
    },
    dev: {
      showDrafts: true,
    },
  },
};
