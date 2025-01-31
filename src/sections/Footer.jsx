const Footer = () => {
    return(
        <section className="c-space pt-7 pb-3 border-black-300 border-t flex justify-between items-center flex-wrap gap-5">
            <div className="flex text-white-500 gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="github.com/MerrillAchigan">
                        <img src="/assets/github.svg" alt='github' className="w-1/2 h-1/2"/>
                    </a>
                    
                </div>
                <div className="social-icon">
                    <a href="">
                        <img src="/assets/twitter.svg" alt='twitter' className="w-1/2 h-1/2"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="">
                        <img src="/assets/instagram.svg" alt='instagram' className="w-1/2 h-1/2"/>
                    </a>
                </div>
            </div>
            <p className="text-white-500">©️ 2025 Juicee. All rights reserved</p>
        </section>
    )
}

export default Footer