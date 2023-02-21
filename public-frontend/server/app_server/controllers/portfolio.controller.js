const { firebase } = require("../services");
const portfolioCollectionName = "portfolio";

function createPortfolio(req, res, next) {
    firebase.firestore.collection(portfolioCollectionName).add(req.body)
        .then(portfolio => res.status(201).json({
            status: 'success',
            data: portfolio,
        }))
        .catch(next);
}

function updatePortfolio(req, res, next){
    firebase.firestore.collection(portfolioCollectionName).doc(req.params.id).set(req.body)
        .then(portfolio => res.status(201).json({
            status: 'success'
        }))
        .catch(
            e=> next(e)
        );
}

function getAllPortfolio(req, res, next) {
    firebase.firestore.collection(portfolioCollectionName).get()
        .then(querySnapshot => {
            let portfolios = [];
            querySnapshot.forEach((portfolio) => {
                portfolios.push({...portfolio.data(), id: portfolio.id});
            });
            res.status(200).json({
                status: 'success',
                data: portfolios,
            })
        })
        .catch(next);
}

function getPortfolio(req, res, next) {
    firebase.firestore.collection(portfolioCollectionName).doc(req.params.id).get()
        .then(portfolio => {
            if (portfolio.exists)
                res.status(200).json({
                    status: 'success',
                    data: {...portfolio.data(), id: portfolio.id},
                })
            else
                res.status(404).json({
                    status: 'fail',
                    message: 'Portfolio not found',
                })
        })
        .catch(next);
}

module.exports = {
    createPortfolio,
    updatePortfolio,
    getAllPortfolio,
    getPortfolio,
};
