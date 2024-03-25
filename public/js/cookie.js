if (typeof window !== 'undefined') {
    // Este código será executado apenas no navegador
    const cookieOptions = {
        sameSite: 'none',
        secure: true
    };
    
    document.cookie = `cookieName=cookieValue; ${Object.entries(cookieOptions).map(([key, value]) => `${key}=${value}`).join('; ')}`;
}
