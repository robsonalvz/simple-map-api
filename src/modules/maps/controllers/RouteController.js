import BusinessException from '../../../exceptions/BusinessException';
import Routes from '../models/Routes';

export const save = async (req, res) => {
    const { origin, destination, waypoints } = req.body;
    const data = await Routes.create({
        origin,
        destination,
        description,
        waypoints,
      });
    return res.status(200).json(data);
};
