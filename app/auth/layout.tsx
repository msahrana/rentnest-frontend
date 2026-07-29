const AuthLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div>{children}</div>;
};

export default AuthLayout;
