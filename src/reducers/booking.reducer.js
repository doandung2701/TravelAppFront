import { BOOKING_STEP_ONE, PAYMENT, CLEAR } from "../constants";

const initialState = {
    totalPeople: 0,
    priceTag: 0,
    fromDate: '',
    toDate: '',
    nameOnCard: '',
    cardNumber: '',
    securityCode: '',
    tourId:0

}
export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_STEP_ONE:
        console.log(action);
            return {
                ...state, totalPeople: action.bookingData.totalPeople, priceTag: action.bookingData.priceTag, fromDate: action.bookingData.fromDate
                , toDate: action.bookingData.toDate,tourId:action.bookingData.tourId
            }
        case PAYMENT:
            return { ...state, nameOnCard: action.paymentInfor.nameOnCard, cardNumber: action.paymentInfor.cardNumber, securityCode: action.paymentInfor.securityCode }
        case CLEAR:
            return {
                ...state, totalPeople: 0,
                priceTag: 0,
                fromDate: '',
                toDate: '',
                nameOnCard: '',
                cardNumber: '',
                securityCode: ''
            }
        default:
            return state;
    }
}