export enum BookingStatus {
    HELD = "held",
    CONFIRMED = "confirmed",
    CANCELLED = "cancelled"
}

export enum BookingType {
    TICKET = "ticket",
    PASS = "pass"
}

export enum PaymentMode {
    PENDING = "pending",
    MOCK = "mock",
    UPI = "upi",
    CARD = "card"
}

export enum PaymentStatus {
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed"
}