
'use server'
import prisma from "../prisma"
import { revalidatePath } from "next/cache"

export default async function updatePost(formData:FormData){
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const updatedPost = await prisma.post.update({
        where: {id},
        data: {
            name
        }
    })
    revalidatePath('/')
}