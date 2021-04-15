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

        } else if (section.type == "imageWithText") {

            let list = section.list.map(item=>`<li>${item}</li>`).join("");

            return `<section class="section" id="${section.id}">
                    <div class="container">
                        <div class="row">
                            <div class="col"><h2>${section.title}</h2></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <ul>
                                ${list}
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <img src="${section.image}" width="400">
                            </div>
                        </div>
                    </div>
                </section>`;
        
        }else {
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