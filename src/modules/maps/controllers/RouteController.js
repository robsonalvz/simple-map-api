import Routes from '../models/Routes';

export const save = async (req, res) => {
    const { origin, destination, waypoints } = req.body;
    const data = await Routes.create({
        origin,
        destination,
        waypoints,
      });
    return res.status(200).json(data);
};
