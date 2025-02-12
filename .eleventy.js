module.exports = function (eleventyConfig) {
    eleventyConfig.addGlobalData("layout", "main");
    eleventyConfig.addPassthroughCopy("basics");
    eleventyConfig.addPassthroughCopy("downloads");
    eleventyConfig.addPassthroughCopy("images");
}