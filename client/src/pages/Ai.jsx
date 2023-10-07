import React, { useState } from 'react';
import bot from '../images/bot.png'

const Ai = () => {
    const [inputContent, setInputContent] = useState('');
    const [outputContent, setOutputContent] = useState('');

    async function fetchData(content) {
        const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '0720086d43msh946ebfa085a2a8bp1297aejsncd8140a193e1',
                'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: content
                    }
                ],
                web_access: false,
                stream: false
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const botResponse = result.BOT; // Extract BOT's response
            setOutputContent(botResponse);
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        setInputContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(inputContent);
    }

    return (
        <>
            <div className='marginStyle'>
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                        <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                            <div class="featured-image mb-3 animateImg">
                                <img src={bot} class="img-fluid" width={500} />
                            </div>
                        </div>
                        <div class="col-md-6 right-box">
                            <div class="row align-items-center">
                                <div class="header-text mb-4">
                                    <h2>AI Assistant</h2>
                                    <p>You're personal ai assistant !</p>
                                </div>
                                <div class="input-group d-flex  align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input
                                            type="text"
                                            value={inputContent}
                                            onChange={handleInputChange}
                                            placeholder="Ask me Anything"
                                            class="form-control form-control-lg border-dark  fs-6"
                                        />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <div class="form-control form-control-lg border-dark fs-6">
                                            {outputContent}
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-4 ">
                                    <div class="form-outline flex-fill mb-0">
                                        <button class="btn btn-lg  text-white" type="button" onClick={handleSubmit} style={{ backgroundColor: '#3d86e8', width: '100%' }} >Generate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

export default Ai;