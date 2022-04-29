import { Request, Response } from "express";
import { getRepository } from "typeorm"
import { Location } from "../entity/Location"

export async function save(request: Request, response: Response) {
  const locationRepository = getRepository(Location);

  const saveLocation = await locationRepository.save(request.body);

  return response.status(200).json(saveLocation); 
}

export async function getAll(request: Request, response: Response) {
  const locationRepository = getRepository(Location);

  const allLocation = await locationRepository.find();

  return response.json(allLocation);
}
