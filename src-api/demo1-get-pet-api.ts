import { request } from "playwright"

async function getPet() {

    const baseUrl:string="https://petstore.swagger.io/v2"
    const resource:string="/pet/10"

    const apiContext = await request.newContext()
    
    const response = await apiContext.get(baseUrl+resource)

    console.log(response.status())

    const body = await response.json()

    console.log(body)

    console.log(body.id)
    console.log(body.name)

}

getPet()