import React, { useEffect } from 'react';
import '../styles/counter.css';

const Counter = () => {
    useEffect(() => {
        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current === end) {
                        clearInterval(timer);
                    }
                }, step);
        }

        counter("count1", 0, 100, 1000);
        counter("count2", 100, 50, 1000);
        counter("count3", 0, 500, 3000);
        counter("count4", 0, 200, 1000);
    }, []);

    return (
        <div>
            <section id="counter">
                <section className="counter-section">
                    <div className="container">
                        <div className="row text-center text-white">
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    <span id="count1"></span>+
                                </h2>
                                <p>Doctors</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    <span id="count2"></span>+
                                </h2>
                                <p>Happy Patients</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    <span id="count4"></span>+
                                </h2>
                                <p>Clinic</p>
                            </div>
                            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                                <h2>
                                    <span id="count3"></span>+
                                </h2>
                                <p>Medicine</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Counter;
