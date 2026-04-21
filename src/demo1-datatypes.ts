let a:number = 10
let b:boolean = true
let c:string = "hello"

console.log(typeof b)
console.log(a+a)


let d:number[]=[1,5,7]

console.log("Array: " + d[1])

let g:[number,string][]=[[1,"peter"],[2,"king"],[4,"kin"]]

console.log(g[0]?.[1])


let h:any=[1,3,9]
h="hello"
h=10
console.log(typeof h)
console.log(h)

//should be casted before printing
let i:unknown = "hello"

console.log((i as string).length)


let sample: number | string | Array<string>

sample = "hello"

//object declaration

let empDetails:{
    id:number,
    name: string,
    isWorking : boolean
}

empDetails = {id:1,name:"Hari", isWorking: true}

console.log(empDetails.id)


//custom type(our own data type)
type pdfType={
    file1: string
}

let temp:pdfType

temp = {file1:"pdfFile1.pdf"}
console.log(typeof temp)
console.log(temp.file1)


