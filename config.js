// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Seigneur",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Gloire à toi,",
  greetingAfternoon: "Gloire à toi,",
  greetingEvening: "Louange à toi,",
  greetingNight: "Louange à toi,",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "ec41eb608a44c4268c76abeb21861a4c", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "fr", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "45.134170",
  defaultLongitude: "1.114610",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.protonmail.com/",
    },
    {
      id: "3",
      name: "LeBoncoin",
      icon: "circle-dollar-sign",
      link: "https://www.leboncoin.fr/",
    },
    {
      id: "4",
      name: "Twitter",
      icon: "twitter",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "glasses",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://www.youtube.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "palette",
      id: "1",
      links: [
        {
          name: "TPdb",
          link: "https://theposterdb.com/user/ikonok",
        },
        {
          name: "TheMoviedb",
          link: "https://www.themoviedb.org/",
        },
        {
          name: "Pinterest",
          link: "https://fr.pinterest.com/",
        },
        {
          name: "Deviantart",
          link: "https://www.deviantart.com/yggdr4zill",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Vinted",
          link: "https://www.vinted.fr/",
        },
        {
          name: "Yggtorrent",
          link: "https://www.ygg.re/auth/login",
        },
        {
          name: "MyHeritage",
          link: "https://www.myheritage.fr/",
        },
        {
          name: "Geneanet",
          link: "https://www.geneanet.org/",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com",
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila",
        },
      ],
    },
  ],
};
