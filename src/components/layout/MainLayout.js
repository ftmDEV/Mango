import Footer from "./footer";
import Header from "./header";
import News from "./news";


const MainLayout = (props) => {
    return (
        <>
            <News/>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
}
 
export default MainLayout;