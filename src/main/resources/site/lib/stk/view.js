var thymeleaf = require('/lib/xp/thymeleaf');

exports.view = {};

// Render Thymeleaf view
exports.view.render = function(view, params) {
    return {
        body: thymeleaf.render({
            view: view,
            model: params
        })
    };
};