import DisplayBody from "./DisplayBody";
function DisplayName() {

    return (
        <div classname="all">
            <div className="projectList">
                <div className="projName">
                    <a href="https://codepen.io/nidhidsharma08121988/full/RwRzLNO" target="_blank">
                        Pomodoro Timer
					</a>
                </div>
                <div className="projName">
                    <a href="https://codepen.io/nidhidsharma08121988/full/eYzPYzr" target="_blank">
                        Drum Machine
					</a>
                </div>
                <div className="projName">
                    <a href="https://codepen.io/nidhidsharma08121988/full/zYBMxbv" target="_blank">
                        Javascript Calculator
                    </a>
                </div>
                <div className="projName">
                    <a href="https://codepen.io/nidhidsharma08121988/full/vYLErZm" target="_blank">
                        CAGR Calculator
					</a>
                </div>
            </div>
            <div class="heading">
                <div className="name"> NIDHI </div>
                <div className="movingBlock">
                    <div
                        style={{ backgroundColor: "white", width: "50%", height: "50%" }}
                    ></div>
                </div>
                <div className="name"> SHARMA </div>
            </div>
            <div className="body"></div>
        </div>
    );


}
export default DisplayName;