module.exports = function(config) {

    config.addPassthroughCopy({'./src/styles/styles.css': 'styles/styles.css'});
    config.addPassthroughCopy({'./src/images/': 'images'});

    config.addFilter('makeSection', function(section) {

        if (section.type == "hero") {
            return `<section class="section" 
                        id="${section.id}" 
                        style="background-image:url(${section.image});background-size:contain;">
                <h1>${ section.title}</h1>
                <p>${ section.text }</p>
            </section>`;

        } else {
            return `<section class="section" id="${section.id}">
                <h1>${ section.title}</h1>
                <p>${ section.text }</p>
            </section>`;

        }
    });

    return {
        dir: {
            input: './src', 
            output: './build'
        }
    }
}