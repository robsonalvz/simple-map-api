import request from 'supertest';
import app from '../../src/index';

describe('Post a new route',() => {
    it("should be able to add a new route", async () => {
        const response = await request(app).post("/api/maps/routes").send({
            "origin": {
                "lat": -11.1816506,
                "long": -40.5120603
            },
            "destination": {
                "lat": -11.1816506,
                "long": -40.5120603
            },
            "waypoints": []
        })
        expect(response.status).toBe(200);
    })
}) 

describe('Verify validators working in invalid body ',() => {
    it("should be send a validator error", async () => {
        const response = await request(app).post("/api/maps/routes").send({
            "origin": {
                "long": -40.5120603
            },
            "destination": {
                "long": -40.5120603
            },
        })
        expect(response.status).toBe(400);
    })
}) 