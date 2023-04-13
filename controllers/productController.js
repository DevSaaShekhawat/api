const Product = require("../models/productModel");
const ErrorHandlar = require("../utils/errorhandlar");
const catchAsyncErrors = require("../middleware/catchAsyncError")



//Create Product -- Admin
exports.createProduct = catchAsyncErrors(
    async(req, res, next) => {
        req.body.user = req.user.id;

        const product = await Product.create(req.body);

        res.status(200).json({
            success: true,
            product
        });
    }
);

