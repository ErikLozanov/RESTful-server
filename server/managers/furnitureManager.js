const Furniture = require('../models/Furniture');

exports.getAll = async (qs) => {
    let query = await Furniture.find();
    console.log(qs.where);


    const result = await Furniture.find();

    return result;
}

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.update = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId);
