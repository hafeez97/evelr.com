import create from 'zustand';

const useModalStore = create((set) => ({
    isSignInOpen: false,
    isSignUpOpen: false,
    openSignInModal: () => set({ isSignInOpen: true }),
    closeSignInModal: () => set({ isSignInOpen: false }),
    openSignUpModal: () => set({ isSignUpOpen: true }),
    closeSignUpModal: () => set({ isSignUpOpen: false }),
}));

export default useModalStore;
