type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props : AppShellProps) => {
    const { children } = props;
    return (
        <div>
            <main>
                {children}
                <h1>Hello World</h1>
            </main>
        </div>
    )
}

export default AppShell