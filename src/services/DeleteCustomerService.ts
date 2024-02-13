import prismaClient from "../prisma";

class DeleteCustomerService {
    async execute({ customerId }: { customerId: string }) {
        if(!customerId || customerId == '') {
            throw new Error('This request need a id') 
        }

        const findCustomer = await prismaClient.custumer.findFirst({
            where: {
                id: customerId
            }
        })

        if(!findCustomer || findCustomer === null) {
            throw new Error('This id not exist') 
        }

        await prismaClient.custumer.delete({
            where: { id: customerId }
        })

        return { message: 'Was deleted!' }
    }
}

export { DeleteCustomerService }