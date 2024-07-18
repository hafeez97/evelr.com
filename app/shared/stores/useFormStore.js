import create from "zustand";

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
        guest_no: '',
        bedroom_no: '',
        dinning_hall_no: '',
        place_offers:[],
        media: [],
        title: '',
        place_highlights: "",
        first_reservation: '',
        payment_type: '',
        rate: '',
        service_charges: '',
        total: '',
        discounts: '',
        security_offer: '',
    },
    setFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
}));

export default useFormStore;
