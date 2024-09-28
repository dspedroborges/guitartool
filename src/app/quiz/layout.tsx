export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen bg-gray-950 bg-opacity-80 bg-blend-multiply py-16 bg-[url('/guitar.jpg')] bg-center bg-cover">
            {children}
        </main>
    );
}