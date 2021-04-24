var mongoose = require('mongoose');
require('moment/locale/id');

var villasSchema = new mongoose.Schema({
    name: { type: String, required: true },
    area: { type: String, required: true },
    price: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    bedroom: { type: Number, required: true },
    minCapacity: { type: Number, required: true },
    maxCapacity: { type: Number, required: true },
    about: { type: String, required: true },
    location: { type: String, required: true },
    placeOfInterest: [{ type: Object, required: true }],
    overview: [{ type: Object, required: true }],
    rooms: [{ type: Object, required: true }],
    specialOffers: [{ type: String, required: true }],
    gallery: [{ type: String, required: true }],
},{ collection: 'villas' });

module.exports = mongoose.model('villas', villasSchema);