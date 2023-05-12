const {
  default: Feautured,
} = require("../../client/src/components/Feautured/Feautured.js");
const Hotel = require("../model/hotel.js");

//get hotels
const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

//get hotel
const getHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
//get hotel
const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

//creating hotel
const createHotel = async (req, res, next) => {
  const data = req.body;
  try {
    const newHotel = await Hotel.create(data);
    res.status(200).json(newHotel);
  } catch (error) {
    next(error);
  }
};

//updating hotel
const updateHotel = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updated = await Hotel.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

//delete hotel
const deleteHotel = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Hotel.findByIdAndDelete(id);
    res.status(200).json({ hotel: deleted, message: "successfuly deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
  countByCity,
};
