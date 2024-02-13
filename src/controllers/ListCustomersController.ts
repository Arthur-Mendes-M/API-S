import { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const customerService = new ListCustomersService()
        const customersList = await customerService.execute()

        reply.send(customersList)
    }
}

export { ListCustomersController }