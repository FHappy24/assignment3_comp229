const Education = require('../models/Education');

// CREATE
exports.createEducation = async (req, res) => {
  try {
    const newEdu = await Education.create(req.body);
    res.status(201).json(newEdu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllEducation = async (req, res) => {
  const education = await Education.find();
  res.json(education);
};

// UPDATE
exports.updateEducation = async (req, res) => {
  try {
    const edu = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(edu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Education deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
