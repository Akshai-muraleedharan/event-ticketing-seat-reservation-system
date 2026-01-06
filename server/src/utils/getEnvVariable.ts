import dotenv from "dotenv";
dotenv.config()


export const getEnvVariable = (key: string,): string | undefined => {

    const value = process.env[key];

    if (!value) {
        console.error(`Environment variable ${key} is not defined`)
    }

    return value;

}