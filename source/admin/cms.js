const contentApi = require("netlify").createClient({ accessToken: process.env.ACCESS_TOKEN });

contentApi.on("login", () => {
  console.log("Logged in to Netlify CMS");
});

contentApi.on("error", (err) => {
  console.error(`Netlify CMS Error:\n${err}`);
});

contentApi.on("close", () => {
  console.log("Connection to Netlify CMS closed");
});

contentApi.on("open", () => {
  console.log("Connection to Netlify CMS opened");
});

contentApi.on("create", (event) => {
  if (event.collectionName === "product") {
    // Get the latest product entry
    contentApi.listSiteFiles({ path: "/data/products" }).then((files) => {
      const latestProduct = files
        .filter((file) => file.extension === "yml")
        .sort((a, b) => new Date(b.mtime) - new Date(a.mtime))[0];
      
      // Update the "lot" field with the last inputted number + 1
      const lot = latestProduct.data.weight + 1;
      const filePath = `/data/products/${latestProduct.name}`;
      contentApi.updateSiteFile(filePath, { ...latestProduct.data, weight: lot });
    });
  }
});

module.exports = contentApi;
