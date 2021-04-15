module.exports = function(config) {

    config.addPassthroughCopy({'./src/styles/styles.css': 'styles/styles.css'});

    config.addFilter('makeSection', function(section) {

        return `<section class="section">
                    <h1>${ section.title}</h1>
                    <p>${ section.text }</p>
                </section>`;
    });

    return {
        dir: {
            input: './src', 
            output: './build'
        }
    }
}