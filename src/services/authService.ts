const authService = {
    login: () => new Promise<{ status: boolean }>((resolve) =>
        setTimeout(() => resolve({ status: true }), 500)
    )
}

export default authService;

  