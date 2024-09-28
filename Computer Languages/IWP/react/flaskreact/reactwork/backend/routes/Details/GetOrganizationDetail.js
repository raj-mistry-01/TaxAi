const express = require("express");
const router = express.Router();
const DetailModel = require("../../models/UserOrganizationDetail.model");
const ValidOrganizationDetail = require("../../middlewares/ValidOrganizationDetail"); // Import your middleware

// Define the route
router.post("/addUserOrganizationDetail", ValidOrganizationDetail, async (req, res) => {
    try {
        const organizationDetail = new DetailModel(req.body);
        await organizationDetail.save();

        return res.status(201).json({ message: 'User organization detail added successfully', data: organizationDetail , status : 201 });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
