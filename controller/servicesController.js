import Service from "../models/Service.js";

export const getAllServices = async (req,res)=>{
    try {
        const services = await Service.find()
        return res.status(200).json(services)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"internal server error"})
    }
}

export const createServices = async (req,res)=>{
    console.log(req.body)
    try {
        const newService = await Service.create(req.body)
        if(newService){
        return res.status(201).json({message: `your event has been created` })
    }
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"internal server error"})
    }
}