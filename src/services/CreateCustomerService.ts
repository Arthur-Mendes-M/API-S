import { CustomerModel } from "../models";
import prismaClient from "../prisma";

class CreateCustomerService {
    async execute({name, email}: CustomerModel) {
        if(!name || !email) {
            throw new Error('Name and email are required to save on Database!')
        }

        const customer = await prismaClient.custumer.create({data: {
            name,
            email,
            status: true
        }})

        return customer
    }
}

export {CreateCustomerService}