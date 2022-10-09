import Categories from "../components/Categories/Categories";

function Home() {
    return (
        <section className="homepage">
            <div className="container">
                <div className="homepage__inner">
                    <Categories />
                </div>
            </div>
        </section>
    )
}

export default Home;