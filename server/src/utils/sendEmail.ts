import nodemailer from "nodemailer"
import { MailOptions } from "../interfaces/index"
import { getEnvVariable } from "./getEnvVariable"


export const sendMail = async (options: MailOptions) => {
    try {
        const { to, subject, text, html } = options

        const gmailPassword = getEnvVariable("NODE_GMAIL_PASS")
        const senderGmail = getEnvVariable("NODE_GMAIL_SENDER")


        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: senderGmail,
                pass: gmailPassword
            },
            tls: {
                rejectUnauthorized: true
            }
        })

        const info = await transport.sendMail({
            from: `EventFlow <${senderGmail}>`,
            to,
            subject,
            text,
            html
        })
        return info
    } catch (error) {
        console.log(error);

    }
}