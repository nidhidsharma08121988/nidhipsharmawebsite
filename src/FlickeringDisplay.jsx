import DisplayBody from "./DisplayBody";
function DisplayName() {

    return (
        <div classname="all">
            <div class="heading">
                <div className="movingBlock">
                    <div
                        style={{ backgroundColor: "white", width: "50%", height: "50%" }}
                    ></div>
                </div>
                <div className="name">NIDHI SHARMA</div>
            </div>
            <DisplayBody />
        </div>

    );

}
export default DisplayName;