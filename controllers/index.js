const asyncErrorWrapper = require("express-async-handler");
const convertUnit = require("convert-units");

const convert = asyncErrorWrapper(async (req, res) => {
  const { value, from, to } = req.query;

  if (!value || !from || !to) {
    return res.status(400).json({ succes: false, error: "Missing parameters." });
  }

  try {
    const result = convertUnit(Number(value)).from(from).to(to);
    return res.json({ success: true, value: result });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ succes: false, error: "Invalid conversion." });
  }
});

const units = asyncErrorWrapper(async (req, res) => {
  res.json({
    length: convertUnit().possibilities('length'),
    mass: convertUnit().possibilities('mass'),
    volume: convertUnit().possibilities('volume'),
    area: convertUnit().possibilities('area'),
    temperature: convertUnit().possibilities('temperature'),
    time: convertUnit().possibilities('time'),
    digital: convertUnit().possibilities('digital'),
    partsPer: convertUnit().possibilities('partsPer'),
    speed: convertUnit().possibilities('speed'),
    pace: convertUnit().possibilities('pace'),
    pressure: convertUnit().possibilities('pressure'),
    current: convertUnit().possibilities('current'),
    voltage: convertUnit().possibilities('voltage'),
    power: convertUnit().possibilities('power'),
    reactivePower: convertUnit().possibilities('reactivePower'),
    apparentPower: convertUnit().possibilities('apparentPower'),
    energy: convertUnit().possibilities('energy'),
    reactiveEnergy: convertUnit().possibilities('reactiveEnergy'),
  });
})

module.exports = { convert, units };
