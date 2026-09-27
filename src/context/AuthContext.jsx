import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // null = ninguém logado
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const login = (userData) => {
        setUser(userData);
        setAuthModalOpen(false);
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthModalOpen, setAuthModalOpen }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}