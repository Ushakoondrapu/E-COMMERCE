export const getRole = () => {
    return localStorage.getItem("role");
}

export const isAdmin = () => {
    return localStorage.getItem("role") === "ADMIN";
}