import Routes from '../models/Routes';

export const save = async (req, res) => {
    const { origin, destination, waypoints, duration, distance } = req.body;
    const data = await Routes.create({
        origin,
        destination,
        waypoints,
        duration,
        distance
      });
    return res.status(200).json(data);
};
