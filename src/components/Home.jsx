import { useState } from "react";
import pic from "../assets/logo.png"
import audio from "../assets/audio.png";
import presentation from "../assets/presentation.png";
import data from "../assets/data.png";
import research from "../assets/research.png";
import graphic from "../assets/graphic.png";
import translation from "../assets/translation.png";
import "./home.css";

const Home = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage('Email is required.');
            setSuccessMessage('');
            return;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setErrorMessage('Invalid email format.');
            setSuccessMessage('');
            setEmail("");
            return;
        }

        if (email.endsWith('@ez.works')) {
            setErrorMessage('Email ending with @ez.works is not allowed.');
            setSuccessMessage('');
            setEmail('');
            return;
        }

        try {
            const response = await fetch('http://3.228.97.110:9000/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                setSuccessMessage('Form Submitted');
                setErrorMessage('');
                setEmail('');
            } else {
                const data = await response.json();
                setErrorMessage(data.error);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error submitting the form.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="outerdiv" >
            <div className="inner1"  >
                <img style={{ width: "317px" }} src={pic} alt="logo" />
                <h4 style={{ color: "#112949", fontSize: "30px" }}>A Suite Of Business Support Services</h4>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet inventore itaque quas sint enim? Deserunt ad quis cumque impedit saepe magnam.</p>
                <div className="topdiv">
                    <input style={{ padding: "10px 20px 10px 10px", width: "60%", borderRadius: "5px", border: "1px solid #ABABAB" }} type="email" placeholder={errorMessage || successMessage || "Email Address"} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button style={{ marginLeft: "15px", backgroundColor: "#EA7B2C", border: "1px solid #EA7B2C", borderRadius: "8px", color: "white", padding: "10px" }} onClick={handleSubmit}>Contact Me</button>
                </div>

                {/* <div className="error">{errorMessage}</div>
        <div className="success">{successMessage}</div> */}
            </div>
            <div className="inner2" >
                <div className="griddiv" >
                    <div style={{ backgroundColor: "#112949", color: "#FFFFFF", paddingLeft: "30px", paddingRight: "30px", borderRadius: "8px", paddingBottom: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "38px", height: "38px", marginRight: "20px" }} src={presentation} alt="" />
                            <h5 style={{ color: "#3CC3F2" }}>Presentation <br /> Design</h5>
                        </div>

                        <p style={{ marginTop: "-5px" }}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                    </div>
                    <div style={{ backgroundColor: "#112949", color: "#FFFFFF", paddingLeft: "30px", paddingRight: "30px", borderRadius: "8px", paddingBottom: "10px" }}>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "38px", height: "38px", marginRight: "20px" }} src={audio} alt="" />
                            <h5 style={{ color: "#3CC3F2" }}>Audio-Visual <br /> Production</h5>
                        </div>

                        <p style={{ marginTop: "-5px" }}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                    </div>
                    <div style={{ backgroundColor: "#112949", color: "#FFFFFF", paddingLeft: "30px", paddingRight: "30px", borderRadius: "8px", paddingBottom: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "38px", height: "38px", marginRight: "20px" }} src={translation} alt="" />
                            <h5 style={{ color: "#3CC3F2" }}>Translation <br /> Services</h5>
                        </div>

                        <p style={{ marginTop: "-5px" }}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                    </div>
                    <div style={{ backgroundColor: "#112949", color: "#FFFFFF", paddingLeft: "30px", paddingRight: "30px", borderRadius: "8px", paddingBottom: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "38px", height: "38px", marginRight: "20px" }} src={graphic} alt="" />
                            <h5 style={{ color: "#3CC3F2" }}>Graphic <br /> Design</h5>
                        </div>

                        <p style={{ marginTop: "-5px" }}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                    </div>
                    <div style={{ backgroundColor: "#112949", color: "#FFFFFF", paddingLeft: "30px", paddingRight: "30px", borderRadius: "8px", paddingBottom: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "38px", height: "38px", marginRight: "20px" }} src={research} alt="" />
                            <h5 style={{ color: "#3CC3F2" }}>Research & <br /> Analytics</h5>
                        </div>

                        <p style={{ marginTop: "-5px" }}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                    </div>
                    <div style={{ backgroundColor: "#112949", color: "#FFFFFF", paddingLeft: "30px", paddingRight: "30px", borderRadius: "8px", paddingBottom: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "38px", height: "38px", marginRight: "20px" }} src={data} alt="" />
                            <h5 style={{ color: "#3CC3F2" }}>Data <br /> Processing</h5>
                        </div>

                        <p style={{ marginTop: "-5px" }}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export { Home }
