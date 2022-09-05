import { loginUser } from "../services/auth";

export const authProvider = {
    login: async ({ email, password }) => {
        return await loginUser(email, password)
    },
    register: () => Promise.resolve(),
    resetPassword: () => Promise.resolve(),
    updatePassword: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
    getUserIdentity: () => Promise.resolve(),
};