export async function generateResponse(prompt: string):Promise<string> {


    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Generated response for: ${prompt}`)
        }, 1000)
    })
}