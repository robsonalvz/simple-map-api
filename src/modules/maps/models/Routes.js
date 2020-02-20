const mongoose = require('mongoose');

const RoutesSchema = new mongoose.Schema({
    origin: {
        lat: String,
        long: String,
    },
    destination: {
        lat: String,
        long: String,
    },
    waypoints: [
        {
            lat: String,
            long: String,
        },
    ],
    duration: {
        text: String,
        value: Number
    },
    distance: {
        text: String,
        value: Number
    }
},{
    timestamps:true,
});
const Routes = mongoose.model('Routes',RoutesSchema);

export default Routes;