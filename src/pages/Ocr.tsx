import Scanner from "../components/Scanner";
import SideMenu from "../components/SideMenu";

function OcrView () {
    return (
        <div className="flex">
            <SideMenu/>
            <div className="w-full" style={{ textAlign: "center", padding: "20px" }}>
            <h2 className="bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition" >Scan Images and Extract Text</h2>

                <Scanner/>
            </div>

        </div>
    );
}

export default OcrView;