const contentApi = require("netlify").createClient({ accessToken: process.env.l6aquQgPu8npxVmQoiZpSSfiY416PupNB4hr8iS7RtM });

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

contentApi.on("create", handleProductUpdate);
contentApi.on("update", handleProductUpdate);

async function handleProductUpdate(event) {
  if (event.collectionName === "product") {
    try {
      const products = await contentApi.listSiteFiles({ path: "/data/products" });
      const latestProduct = products
        .filter((file) => file.extension === "yml")
        .sort((a, b) => a.data.weight - b.data.weight)
        .pop();

      const lot = latestProduct.data.weight + 1;
      const filePath = `/data/products/${latestProduct.name}`;
      await contentApi.updateSiteFile(filePath, { ...latestProduct.data, weight: lot });
    } catch (error) {
      console.error(`Error updating product: ${error.message}`);
    }
  }
}

module.exports = contentApi;
