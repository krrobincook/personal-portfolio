const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 px-5 md:px-10">
            <div className="text-white-500 flex gap-2">
                <p>Built with ❤️ & React Three Fiber</p>
            </div>
            
            <div className="flex gap-3">
                <a href="https://github.com/krrobincook" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200 hover:scale-110 active:scale-95 transition-all">
                    <img src="/images/github.png" alt="github" className="w-1/2 h-1/2 object-contain brightness-0 invert" />
                </a>
                <a href="https://www.linkedin.com/in/kumarrobincook/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200 hover:scale-110 active:scale-95 transition-all">
                    <img src="/images/linkedin.png" alt="linkedin" className="w-1/2 h-1/2 object-contain" />
                </a>
            </div>

            <p className="text-white-500">© {new Date().getFullYear()} Kumar Robin Cook.</p>
        </section>
    );
};

export default Footer;