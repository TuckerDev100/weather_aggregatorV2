const chai = require('chai');
const sinon = require('sinon');
const axios = require('axios');
const axiosMock = require('axios-mock-adapter'); // Import axios-mock-adapter
const { expect } = chai;
const locationController = require('../../controllers/locationController');
const geoCodeHappyPath = require('../Mocks/geoCodeHappyPath.json');

//NOTE I would have liked to get all of these tests up and running, but ran out of time. Think of this like an interface to be implemnted

chai.should();

chai.should();

describe('getHourlyData', () => {
  let axiosMockInstance;

  beforeEach(() => {

    axiosMockInstance = new axiosMock(axios);
  });

  afterEach(() => {

    axiosMockInstance.restore();
  });

  it('should return hourly weather data for a valid gridId and coordinates', async () => {
    // Mocked gridId and coordinates
    const gridId = 'yourMockedGridId';
    const intCoords = { lat: 123, lng: 456 };

    // Mock the response data for the hourly request
    const mockedHourlyData = {
      properties: {
        periods: [
          { startTime: '2023-10-24T00:00:00-04:00', temperature: 65 },
          { startTime: '2023-10-24T01:00:00-04:00', temperature: 63 },
          // Add more data as needed
        ],
      },
    };


    axiosMockInstance
      .onGet(`https://api.weather.gov/gridpoints/${gridId}/${intCoords.lat},${intCoords.lng}/forecast/hourly`)
      .reply(200, mockedHourlyData);

    // Call the getHourlyData function
    const result = await locationController.getHourlyData(gridId, intCoords);

    // Assertions
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({
      '2023-10-24': [65, 63], 
    });
  });

  it('should return a 400 error in the event of a bad request', async () => {

  });

  it('should return a 404 error in the event of a resource not being found', async () => {

  });

  it('should return a 500 error in the event the service going down', async () => {

  });


});

describe('getStationId', () => {

});

describe('getLocation', () => {

});