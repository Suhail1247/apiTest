// import bcrypt from "bcrypt";
// import Jwt from "jsonwebtoken";
// import planModel from "../models/planModel.js";

export async function fetchData(req, res) {
  console.log('connected to the erfgwdfgsd');

  try {
    const {email,name} = req.body;
    // if(!email){
    //   console.log('error api');
    //   return res.status(400).send({
    //     error: true,
    //     message: "unsuccessfull"
    //   });
    // }
    console.log(email);
  return res.status(201).send({
    error: false,
    message: "successfull"
  });
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
}


export async function addPlan(req, res) {
  try {
    const {companyName} = req.body;
    if(!companyName){
      return res.status(201).json({
        error: false,
        message: "unsuccessfull"
      });
    }
  return res.status(201).json({
    error: false,
    message: "successfull"
  });
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
}
