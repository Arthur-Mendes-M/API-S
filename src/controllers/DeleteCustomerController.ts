import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { customerId } = request.query as {customerId: string}

        const deleteCustomerService = new DeleteCustomerService() 
        const deletedCustomer = deleteCustomerService.execute({customerId})

        reply.send(deletedCustomer)
    }
}

export { DeleteCustomerController }