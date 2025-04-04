import FileManager from "../components/FileManager";
import SideMenu from "../components/SideMenu";

function Manager () {
    return (
        <div className="flex">
            <SideMenu/>
            <div className="w-full" style={{ textAlign: "center", padding: "20px" }}>
            <h2 className="bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition" >Manage all documents</h2>

                <FileManager/>
            </div>

        </div>
    );
}

export default Manager;