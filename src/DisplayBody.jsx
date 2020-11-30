
function DisplayBody() {

    const about = (
        <>
            <p>
                This is the most difficult question for me to answer in any interview
                because I don't think anyone can know oneself completely. Truly speaking, I
                have outperformed at things I thought I would really suck at!! For example,
                I never cooked in my life and I thought I would be the worst cook ever, if
                and when I did cook, but once I got myself into it I actually was better
                than I expected myself to be, so much so, that I have my own food blog! The
                thing I learnt through this is never to say 'No' to learning and
                experimenting.
			</p>
            <p>
                {" "}
				I did my bachelors in IT field but when given an opportunity to learn
				finance during MBA, I took that chance and did fine. Later I got an
				opportunity to work as a freelance HR professional, which I did with
				complete honesty. I did that for 3 months.
			</p>
            <p>
                {" "}
				I firmly believe that your hard work, dedication and consistent effort
				always pays. I am a person who likes to do her job better than she did
				yesterday. I like to evolve by means of constant learning, changing my ways
				when its required (and even my field !!), and by being frank about what 'I
				don't know'. Every human has the capacity to be great. Its our own
				inhibitions that stops our growth. The only thing I want to achieve is to
				grow to the fullest of my capacity.
			</p>
        </>
    );
    const credits = (
        <>
            <p>
                This is the first react website that I have deployed. Its' my first
                experience with react. It was quite a journey - designing website, learning
                react and finally deploying my website.
			</p>
            <p>
                {" "}
				Journeys are always very crucial part of whatever you want to achieve, I
				would say they are even more important than the goal itself, because journey
				is the place where actual growth happens.
			</p>{" "}
            <p>
                Journeys are blissful if you have a special someone besides you, in my case,
                it was my husband, Pankaj Sharma - he not even guided me when I was lost but
                also acted like a cheerleader for me. He was the reason I could take this
                brave step and meet my passion of designing and creating beautiful
                applications - again! It would be impossible for me to deliver without him
                being on my side and telling me that I could do this.
			</p>
            <p>
                I would also like to thank my parents, D.D. Sharma and Meeta Sharma, who
                taught me by example that nothing is impossible if you are ready to give
                everything to your goal. Without them, of course besides me being not born,
                I wouldn't even have the courage to learn, unlearn, re-learn.
			</p>
            <p>
                Another person in my life whom I want to thank is my sister - Priyanka
                Shakdwipee - who has been a constant support - all my life. Confidence,
                leadership, kindness, love and warmth are things I grasped from her.
			</p>
            <p>
                The other person I want to thank is my daughter, Pahi Sharma(5 years old in
                2020). She was very understanding of my need to work! She never bothered me
                when I made it clear that I needed to focus - which is really a big thing
                for her age. She was an inspiration because I wanted her to teach by example
                that there is no age to start learning, and we can learn and grow every
                moment of our lives.
			</p>
            <p>
                The other thing, yes, its a thing, I would like to thank is the Internet -
                which made accessing material and learning very easy. Gone are the days when
                we had to sit for hours in library learning things. This is really powerful.
                Because now as I code and encounter errors that I don't understand, I can
                just Google it!! Its' a bliss to learn with information at our finger tips.
			</p>
            <p>Thank You.</p>
        </>
    );

    return (
        <div className="body">

            <div className="details">
                <div className="withLogo">

                    <h2 className="subHead">About Me</h2>

                </div>
                <div className="about">{about}</div>

                <div className="withLogo">


                    <h2 className="subHead">Credits</h2>

                </div>
                <div className="credit">{credits}</div>
            </div>
        </div>
    );
}
export default DisplayBody;