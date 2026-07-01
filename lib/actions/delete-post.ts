
'use server'
import prisma from "../prisma"
import { revalidatePath } from "next/cache"

export default async function deletePost(formData: FormData){
    const id = formData.get('id') as string
    const deletedPost = await prisma.post.delete({
        where: {id},
    
    })
    revalidatePath('/')
}