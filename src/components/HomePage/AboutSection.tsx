export const AboutSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-12 lg:my-16 relative items-center" id="about-section">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">ABOUT ME</span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>

            <div className="flex-col">
                <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Who I am?</p>
                <p className="text-gray-200 text-sm lg:text-lg">My name is HENRIQUE SIQUEIRA. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.</p>
            </div>

            <div className="profile_img"></div>
        </section>
    )
}