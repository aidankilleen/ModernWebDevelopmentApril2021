module.exports = function(config) {

    config.addPassthroughCopy({'./src/styles/styles.css': 'styles/styles.css'});

    return {
        dir: {
            input: './src', 
            output: './build'
        }
    }
}