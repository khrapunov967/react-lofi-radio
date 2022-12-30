import { RootLayoutProps } from "../types/props";

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <section>
            {children}
        </section>
    );
};

export default RootLayout;