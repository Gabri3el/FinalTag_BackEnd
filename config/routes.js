const admin = require('./admin')

module.exports = app =>{
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.delete)
    
    app.route('/categories')
        .get(app.api.category.get)
        .post(admin(app.api.category.save))

    app.route('/categories/tree')
        .get(app.api.category.getTree)
    
    // rotas especificas devem ficar em cima; 
    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))

    app.route('/articles')
        .get(app.api.article.get)
        .post(admin(app.api.article.save))

    app.route('/articles/:id')
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))
    app.route('/categories/:id/articles')
        .get(app.api.article.getByCategory)

  
}