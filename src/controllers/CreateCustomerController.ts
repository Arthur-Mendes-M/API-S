import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'
import { CustomerModel } from '../models'

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {name, email} = request.body as CustomerModel

        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({name, email})

        reply.send(customer)
    }
}

export { CreateCustomerController }