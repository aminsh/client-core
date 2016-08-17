var express = require('express');

module.exports = function(app){
    app.get('/', function (req, res) {
        res.render('Index.html');
    });

    app.get('/acc', function(req,res){
        res.render('./acc.ejs');
    });

    var generalLedgerAccountApi = require('../routes/accountingApis/generalLedgerAccountApi');
    var subsidiaryLedgerAccountApi = require('../routes/accountingApis/subsidiaryLedgerAccountApi');
    var detailAccountApi = require('../routes/accountingApis/detailAccountApi');
    var dimensionCategoryApi = require('../routes/accountingApis/dimensionCategoryApi');
    var dimensionApi = require('../routes/accountingApis/dimensionApi');
    var journalApi = require('../routes/accountingApis/journalApi');
    var journalLineApi = require('../routes/accountingApis/journalLineApi');

    app.use('/api', generalLedgerAccountApi(app, express));
    app.use('/api', subsidiaryLedgerAccountApi(app, express));
    app.use('/api', detailAccountApi(app, express));
    app.use('/api', dimensionCategoryApi(app, express));
    app.use('/api',dimensionApi(app,express));
    app.use('/api',journalApi(app,express));
    app.use('/api',journalLineApi(app,express));
}
