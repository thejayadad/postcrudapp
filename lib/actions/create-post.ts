
'use server'
import prisma from "../prisma"
import { revalidatePath } from "next/cache"

export default async function createPost(formData: FormData){
    const name = formData.get('name') as string
    const post = await prisma.post.create({
        data: {
            name,
        }
        
    })   
    revalidatePath("/")
}