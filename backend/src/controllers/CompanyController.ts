import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Company } from "../entity/Company";

export async function save(request: Request, response: Response) {
  const companyRepository = getRepository(Company);

  const savedCompany = await companyRepository.save(request.body);

  return response.status(200).json(savedCompany);
}

export async function getAll(request: Request, response: Response) {
  const companyRepository = getRepository(Company);

  const allCompanies = await companyRepository.find();
  
  return response.json(allCompanies);
}
