const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * * ',async function(){ //atualizar 1 em 1 min
        const usersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        const {stat} = app.api.stats

        const lastStat = await stat.findOne({},{},
            {sort: {'createdAt': -1 } })

        const stats = new stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: new Date()   
        })

        const changeUsers = !lastStat || stat.users !== lastStat.users
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles

        if(changeUsers || changeCategories || changeArticles){
            stats.save().then(() => console.log('[Stats] Estatisticas foram atualizadas'))
        }
    })
}