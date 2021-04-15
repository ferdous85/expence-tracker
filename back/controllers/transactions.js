const Transaction = require('../models/Transaction')

// @dec Get all transactions
// @route GET /api/v1/transactions
// @access public

exports.getTransactions = async (req, res, next)=>{
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            sucess: true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            err: 'server error'
        })
    }
}

// @dec Add transactions
// @route POST /api/v1/transactions
// @access public

exports.addTransactions =  async (req, res, next)=>{
    try {
    const {text, amount} = req.body
    const transaction = await Transaction.create(req.body)
    return res.status(201).json({
        sucess: true,
        data: transaction
    })
    } catch (err) {
        if(err.name==="ValidationError"){
                const messages = Object.values(err.errors).map(val=>val.message)
                return res.status(400).json({
                    sucess: false, 
                    err: messages
                })
        } else{
            return res.status(500).json({
                sucess: false,
                err: 'server error'
            })
        }
    }
}


// @dec Delete transactions
// @route DELETE /api/v1/transactions
// @access public

exports.deleteTransactions = async (req, res, next)=>{
   try {
    const transaction = await Transaction.findById(req.params.id)
    if(!transaction) {
        return res.status(404).json({
            sucess: false,
            err: 'No Transaction Found'
        })
    }

    await transaction.remove()

    return res.status(200).json({
        sucess: true,
        data: {}
    })

   } catch (err) {
    return res.status(500).json({
        sucess: false,
        err: 'server error'
    })
   }

}