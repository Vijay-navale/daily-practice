require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://www.example.com")
    .save("./public/sitemap.xml");
}

generateSitemap();
// require('babel-register');

// const router = require('./router').default;
// const Sitemap = require('react-router-sitemap').default;
// (
// 	new Sitemap(router)
// 		.build('http://my-site.ru')
// 		.save('./sitemap.xml')
// );
