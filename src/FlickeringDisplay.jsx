function DisplayName() {
    const source = "nidhi.jpg";
    const sub = <p> A Mom | A Cook | A Dancer | A Writer | Front-end Developer</p>;

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
                <div className="image">
                    <img className="imgNidhi" src={source} alt="Nidhi Sharma" />
                </div>

                <div className="headSubHead">
                    <div className="allName">
                        <div className="name"> NIDHI </div>
                        <div className="name"> SHARMA </div>
                    </div>

                    <div className="sub">{sub}</div>
                </div>
            </div>

        </div>
    );


}
export default DisplayName;