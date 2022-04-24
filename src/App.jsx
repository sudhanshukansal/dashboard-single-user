import React from 'react';
import './'
function App() {
    const back2 = "< Back";
    return (
        <>
            <div className='dash'>
                <div className='nav'>
                    <div className='quarter'> </div>

                    <button className='profilePic' placeholder='Profile Pic Upload'>
                        Profile Pic <br />Upload
                        <br />
                        +

                    </button>


                </div>
                <div className="mobile_info">
                    <div className="mobile_profile">

                    </div>
                    <input type="text" />
                    <input className='paragraph' type="text" />
                    <button id='mobile_button'>letgo</button>
                    
                </div>

                <div className='info'>
                    <input className='skills' placeholder=" + Add Skills" />

                    <input className='bio' placeholder='Add Bio' title='ADD' />

                    <button className='confirm'>Confirm</button>

                    <a className='back'> {back2} </a>
                    <div className='dot_side'> </div>
                    <div className='quarter_side'></div>



                </div>
                <div className='bottom'>
                    <div className='success'>
                        <div className='check'></div>
                        <p className='p1'>
                            Success!
                        </p>
                        <p className='p2'> Your account has been created</p>
                    </div>
                    <button className='explore'>Start exploring</button>
                    <div className='big_top' ></div>

                    <div className='big_down' ></div>
                    <div className='c1'></div>
                    <div className='c2'></div>
                    <div className='c3'></div>

                </div>
            </div>
        </>
    );

}
export default App;