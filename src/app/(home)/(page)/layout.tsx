
const PrimaryLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
        {/* <CollapseProvider> */}
            {/* <PageLayout> */}
                    {children}
            {/* </PageLayout> */}
        {/* </CollapseProvider> */}
        </>
    );
};

export default PrimaryLayout;