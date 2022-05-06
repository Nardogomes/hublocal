import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Responsible } from "../entity/Responsible";

export async function save(request: Request, response: Response) {
  const responsibleRepository = getRepository(Responsible);

  const { cep, logradouro, bairro, numero, localidade, uf } =
    request.body.address;

  const address = JSON.stringify({
    cep,
    logradouro,
    bairro,
    numero,
    localidade,
    uf,
  });

  const saveResponsible = await responsibleRepository.save({
    address,
    name: request.body.name,
    contact: request.body.contact,
  });

  return response.status(200).json(saveResponsible);
}

export async function getAll(request: Request, response: Response) {
  const responsibleRepository = getRepository(Responsible);

  const allResponsible = await responsibleRepository.find();

  return response.json(allResponsible);
}
