import { BOOKING_STEP_ONE, PAYMENT } from "../constants";

export const booking=(bookingData)=>{
    return {
        type:BOOKING_STEP_ONE,
        bookingData
    }
}
export const payment=(paymentInfor)=>{
    return {
        type:PAYMENT,
        paymentInfor
    }
}