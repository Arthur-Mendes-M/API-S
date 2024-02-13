import prismaClient from "../prisma"

class ListCustomersService {
    async execute() {
        const customersList = await prismaClient.custumer.findMany()

        return customersList
    }
}

export { ListCustomersService }