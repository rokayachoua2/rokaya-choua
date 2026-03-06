export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container foot">
                <span>© <span id="year">{currentYear}</span> Rokaya Choua — Portfolio</span>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}
