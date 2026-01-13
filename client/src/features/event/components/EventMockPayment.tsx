import React from 'react'

export const EventMockPayment = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">

            {/* Header */}
            <h2 className="text-xl font-bold mb-4 text-center">
                Mock Payment
            </h2>

            {/* Booking Summary */}
            <div className="border rounded-lg p-4 mb-4 space-y-2">
                <p className="font-semibold">Booking Summary</p>

                {/* {booking.bookingType === "SEAT" ? (
                    <p className="text-sm">
                        Seats: {booking.seatCodes?.join(", ")}
                    </p>
                ) : (
                    <p className="text-sm">
                        Pass Holder: {booking.attendeeName}
                    </p>
                )} */}

                <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    {/* <span>₹{booking.totalAmount}</span> */}
                </div>
            </div>

            {/* Payment Mode */}
            <div className="mb-4">
                <p className="font-semibold mb-2">Payment Mode</p>
                <div className="flex gap-2">
                    <button className="flex-1 border rounded-lg py-2 bg-green-100 border-green-500">
                        MOCK
                    </button>
                    <button disabled className="flex-1 border rounded-lg py-2 text-gray-400">
                        UPI
                    </button>
                    <button disabled className="flex-1 border rounded-lg py-2 text-gray-400">
                        CARD
                    </button>
                </div>
            </div>

            {/* Mock Actions */}
            <div className="space-y-3">
                <button
                    // onClick={onSuccess}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                    {/* Pay ₹{booking.totalAmount} (Success) */}
                </button>

                <button
                    // onClick={onFail}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                >
                    Simulate Payment Failure
                </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
                This is a mock payment for testing only
            </p>
        </div>
    )
}
