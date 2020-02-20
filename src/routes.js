import mapsRoutes from './modules/maps/routes/RouteRoutes';
import express from 'express';

let router = express.Router();

router.use('/api/maps', mapsRoutes);


export default router;
