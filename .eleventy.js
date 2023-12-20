module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/css');
    //eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/fonts');
    
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site",
        }

    };
};

// npx @11ty/eleventy
// npx @11ty/eleventy --serve

// npm i --save sass
// npm i --save-dev npm-run-all