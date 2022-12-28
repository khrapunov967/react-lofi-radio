import { rootLayoutProps } from "../types/props";

const RootLayout: React.FC<rootLayoutProps> = ({children}) => {
    return (
        <section>
            {children}
        </section>
    );
};

export default RootLayout;