import {create} from 'zustand'

const useFormStore = create((set) => ({
    formData: {
        category_id: '',
        latitude: '',
        longitude: '',
        address: '',
        alternative_address: '',
        description: '',
        country_id: '',
        state_id: '',
        city_id: '',
        postal_code: '',
        guest_no: 0,
        bedroom_no: '',
        dinning_hall_no: '',
        place_offers: [],
        media: [],
        title: '',
        place_highlights: "peaceful",
        first_reservation: 'evelr_user',
        payment_type: '',
        rate: 0,
        service_charges: 1000,
        total: '',
        discounts: '',
        security_offer: '',
    },
    setFormData: (data) =>
        set((state) => ({formData: {...state.formData, ...data}})),
}));

export default useFormStore;
