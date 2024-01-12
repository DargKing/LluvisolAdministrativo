import { NextApiRequest, NextApiResponse } from "next";
import database from "@/lib/prisma"
import { Item } from "@/app/interfaces/Data-types";
import { ErrorAlreadyExists, ErrorInvalidData, UnknownError, UnknownMethodHTTPError } from "@/tools/Errores"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        database.item.findMany().then((itemsFinded) => {
            return res.status(200).json(itemsFinded)
        })
            .catch((err) => {
                return res.status(500).json(new UnknownError())
            })
        return;
    }

    if (req.method == "POST") {

    }

    if (req.method == "PATCH") {
        const { tipo, cantidad, id } = req.body
        let completado = false

        if (tipo == "ENTRADA") {
            database.item.update({
                where: {
                    id
                },
                data: {
                    cantidadActual: {
                        increment: cantidad
                    },
                    entradas: {
                        create: [
                            {
                                cantidad
                            }
                        ]
                    }
                }
            }).then((data) => {
                res.status(200).json(data)
            }).catch((err) => {
                console.log(err)
                return err
            })

            completado = true
        }

        if (tipo == "SALIDA") {

            completado = true
        }

        if (completado) {
            return;
        }
    }

    if (req.method == "PUT") {
        const { codigo, descripcion, cantidadInicial }: Item = req.body
        if (codigo.length == 0) {
            const err = new ErrorInvalidData("Codigo")
            res.status(400).json(err.message)
            return;
        }

        if (descripcion.length == 0) {
            const err = new ErrorInvalidData("Descripcion")
            res.status(400).json(err.message)
            return;
        }

        if (typeof (cantidadInicial) == "string" || isNaN(cantidadInicial)) {
            const err = new ErrorInvalidData("Cantidad Inicial")
            res.status(400).json(err.message)
            return;
        }

        database.item.create({
            data: {
                codigo,
                descripcion,
                cantidadInicial,
                cantidadActual: cantidadInicial
            }
        }).then((itemCreated) => {
            res.status(201).json(itemCreated)
        }).catch((err) => {
            if (err instanceof PrismaClientKnownRequestError) {
                const err = new ErrorAlreadyExists("Codigo")
                res.status(409).json(err.message)
                return
            }

            console.log(err)

            const e = new UnknownError()
            res.status(400).json(e.message)
        })
        return;
    }

    if (req.method == "DELETE") {
        const { id }: { id: number } = JSON.parse(req.body)

        if (typeof id != "number") {
            res.status(400).json(new ErrorInvalidData("id"))
        }

        database.item.delete({
            where: {
                id
            }
        }).then((respuesta) => {
            console.log(respuesta)

            res.status(200).json({ ok: true })
        }).catch((err) => {
            console.log(err)

            res.status(500).json(new UnknownError())
        })

        return;
    }

    res.status(405).send((new UnknownMethodHTTPError(req.method ?? "???")).message)
}