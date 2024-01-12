class ErrorInvalidData extends Error {
    constructor (nameVar: string) {
        super(`El tipo de dato ${nameVar} es invalido`)
    }
}

class ErrorAlreadyExists extends Error {
    constructor (nameVar: string) {
        super(`El valor perteneciente a la variable ${nameVar} ya existe en la base de datos`)
    }
}

class UnknownError extends Error {
    constructor (){
        super("Ha sucedido un error desconocido, contacte con el desarrollador")
    }
}

class UnknownMethodHTTPError extends Error {
    constructor (method: string){
        super(`El metodo HTTP ${method} es desconocido, compruebe que este usando el metodo correcto`)
    }
}

export { ErrorInvalidData, ErrorAlreadyExists, UnknownError, UnknownMethodHTTPError }