import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Location } from "../entity/Location";

export async function save(request: Request, response: Response) {
  const locationRepository = getRepository(Location);

  const { cep, logradouro, bairro, localidade, uf } = request.body.address;

  const address = JSON.stringify({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  const saveLocation = await locationRepository.save({
    address,
    name: request.body.name,
  });

  return response.status(200).json(saveLocation);
}

export async function getAll(request: Request, response: Response) {
  const locationRepository = getRepository(Location);

  const allLocation = await locationRepository.find();

  return response.json(allLocation);
}
