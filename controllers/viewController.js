const catchAsync = require("../utils/catchAsync");
const express = require("express");

const app = express();

exports.getAbout = catchAsync(async (req, res, next) => {
    const actualPage = "/about";
    app.render(req, res, actualPage);
});