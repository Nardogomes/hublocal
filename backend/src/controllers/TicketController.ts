import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Ticket } from "../entity/Ticket";

export async function save(request: Request, response: Response) {
  const ticketRepository = getRepository(Ticket);

  const newTicket = request.body;

  const saveticket = await ticketRepository.save({
    ...newTicket,
    tec_ticket: "Francisco",
    status: "PROGRESSO",
    place: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return response.status(200).json(saveticket);
}

export async function getAll(request: Request, response: Response) {
  const ticketRepository = getRepository(Ticket);

  const allTickets = await ticketRepository.find();

  return response.status(200).json(allTickets);
}
