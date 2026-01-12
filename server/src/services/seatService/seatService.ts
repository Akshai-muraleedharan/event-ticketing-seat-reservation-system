import mongoose from "mongoose";
import { SeatStatus } from "../../enums";
import { Seat } from "../../model/seat.model";
import { SeatLayout } from "../../model/seatLayout";
import { createSeatPayload } from "../../types";
import { AppError } from "../../utils/appError";




export class seatService {
    static async createSeat(payload: createSeatPayload) {
        // const session = await mongoose.startSession()

        try {

            // session.startTransaction()

            const findSeatLayout = await SeatLayout.findOne({ eventId: payload.eventId, _id: payload.seatLayoutId })


            if (!findSeatLayout) {
                throw new AppError("Seat layout not found", 404)
            }

            if (findSeatLayout.isPublished === true) {
                throw new AppError("Seats already create", 400)
            }

            const { rows, categories, } = findSeatLayout






            if (!rows || !categories) {
                throw new AppError("Seat rows or categories not found", 404)
            }

            const seats = [];

            for (const rowObj of rows) {
                const { name: rowName, seatCount } = rowObj;

                const category = categories.find((category) => category.rows.includes(rowName))

                if (!category) {
                    throw new AppError(`No ctategory assigned for row ${rowName}`, 400)
                }

                for (let col = 1; col <= seatCount; col++) {
                    seats.push({
                        eventId: payload.eventId,
                        seatLayoutId: payload.seatLayoutId,
                        seatCode: `${rowName}${col}`,
                        row: rowName,
                        column: col,
                        category: category.name,
                        price: category.price,
                        status: SeatStatus.AVAILABLE
                    })
                }

            }

            await Seat.insertMany(seats)

            await SeatLayout.findOneAndUpdate({ _id: payload.eventId, isPublished: false }, { isPublished: true })


            // await session.commitTransaction()

            return {}
        } catch (error) {
            // await session.abortTransaction()
            throw error
        } finally {
            // await session.endSession()
        }





    }
}