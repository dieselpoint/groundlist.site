module.exports = {
  title: "Groundlist software for political campaigns",
  description:
    "Groundlist is a fast, free SaaS for running Republican and conservative political campaigns",

  dest: "../docs", // root of the main groundlist project

  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/images/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/images/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/safari-pinned-tab.svg",
        color: "#5bbad5"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#ffc40d" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ]
};
