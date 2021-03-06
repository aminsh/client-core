var guidService = require('../../utility/guidService');
var Enumerable = require('linq');
var generalLedgerAccounts = require('./accountsData').generalLedgerAccounts;

function generalLedgerAccountApi(app, express) {
    var apiRouter = express.Router();

    apiRouter.route('/general-ledger-accounts')
        .get(function (req, res) {
            res.json({data: generalLedgerAccounts});
        })
        .post(function (req, res) {
            var cmd = req.body;

            console.log(cmd);

            generalLedgerAccounts.push(cmd);

            console.log(cmd);

            res.json({
                validationResult: {isValid: true},
                returnValue: {id: guidService.newGuid()}
            });
        });

    apiRouter.route('/general-ledger-accounts/:id')
        .get(function (req, res) {
            var gla = Enumerable.from(generalLedgerAccounts)
                .first(function (item) {
                    return item.id == req.params.id
                });

            res.json(gla);
        })
        .put(function (req, res) {
            var cmd = req.body;
            console.log(cmd);

            var gla = Enumerable.from(generalLedgerAccounts)
                .first(function(item){return item.id = req.params.id;});

            gla.code = cmd.code;
            gla.title = cmd.title;
            gla.postingType=cmd.postingType;
            gla.balanceType = cmd.balanceType;
            gla.description = cmd.description;

            res.json({
                validationResult: {isValid: true}
            });
        });

    apiRouter.route('/general-ledger-accounts/:id/activate')
        .put(function(req, res){
            var da = Enumerable.from(detailAccounts)
                .first(function (item) {
                    return item.id == req.params.id
                });

            da.isActive = true;

            res.json({
                validationResult: {isValid: true}
            });
        });

    apiRouter.route('/general-ledger-accounts/:id/deactivate')
        .put(function(req, res){
            var da = Enumerable.from(detailAccounts)
                .first(function (item) {
                    return item.id == req.params.id
                });

            da.isActive = false;

            res.json({
                validationResult: {isValid: true}
            });
        });

    return apiRouter;
}

module.exports = generalLedgerAccountApi;