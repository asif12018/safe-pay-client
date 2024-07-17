import RightLayout from "../Components/RightLayout/RightLayout";
import SlidesMenu from "../Components/SlidesMenu/SlidesMenu";


const Main = () => {
    return (
        <div  className="flex ">
            {/**============    side bar start from here     =============== */}
            <div>
            <SlidesMenu></SlidesMenu>
            </div>
            {/**============    side bar end from here     =============== */}
            <div className="w-screen">
            <RightLayout></RightLayout>
            </div>
        </div>
    );
};

export default Main;