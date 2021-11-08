const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Express middleware
router.use(express.urlencoded({ extended: false }));
router.use(express.json());


// router.use(require('./departmentRoutes'));
router.use(require('./roleRoutes'));
// router.use(require('./employeeRoutes'));


// `SELECT candidates.*, parties.name 
//     AS party_name 
//     FROM candidates 
//     LEFT JOIN parties 
//     ON candidates.party_id = parties.id 
//     WHERE candidates.id = ?`;


module.exports = router;