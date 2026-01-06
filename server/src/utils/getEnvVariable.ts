import dotenv from "dotenv";
dotenv.config()


export const getEnvVariable = (envVariable: string): string | undefined => {
    const value = process.env[envVariable]

    if (!value) {
        console.error(`Error enviorment variable ${envVariable} is not defined`)
    }
    return value
}