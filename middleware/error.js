const ErrorHandlar = require("../utils/errorhandlar");

module.exports = (err,req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Wrong mongodb Id error
    if(err.name === "CasteError"){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandlar(message, 400);
    }

    //mongoose duplicate key Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandlar(message, 400)
    }

    res.staus(err.statusCode).json({
        success: false,
        message: err.message,
    });
};