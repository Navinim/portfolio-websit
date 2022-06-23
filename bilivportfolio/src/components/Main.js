/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Main = () => {
    return (
        <div>
            <div className="s1">
                <div className="main-container">
                    <div className="greeting-wrapper">
                        <h1>Hi, I'm Biliv Pokhrel</h1>
                    </div>
                    <div className="intro-wrapper">
                        <div className="nav-wrapper">
                            {/* Link around dots-wrapper added after tutorial video  */}
                            <a href="index.html">
                                <div className="dots-wrapper">
                                    <div id="dot-1" className="browser-dot"></div>
                                    <div id="dot-2" className="browser-dot"></div>
                                    <div id="dot-3" className="browser-dot"></div>
                                </div>
                            </a>
                            <ul id="navigation">
                                <li><a href="index.html#contact">My Gallery</a></li>

                            </ul>
                        </div>

                        <div className="left-column">
                            <img id="profile_pic" alt='profile' src={require( '../images/biliv.jpg')}/>
                            <h5 style={{ textAlign: 'center', lineHeight: 0 }}>Attitude is Everything</h5>

                            {/* <div id="theme-options-wrapper">
									<div data-mode="light" id="light-mode" className="theme-dot"></div>
									<div data-mode="blue" id="blue-mode" className="theme-dot"></div>
									<div data-mode="green" id="green-mode" className="theme-dot"></div>
									<div data-mode="purple" id="purple-mode" className="theme-dot"></div>
								</div> */}

                            {/* <p id="settings-note">*Theme settings will be saved for<br>your next vist</p>  */}
                        </div>

                        <div className="right-column">

                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner"></div>
                                    <div id="corner-tr" className="corner"></div>
                                    <h3>What I Do</h3>
                                    <p>I was a Assistant Manager at OPPO Nepal, now I enjoying to discover new places.</p>
                                    <div id="corner-br" className="corner"></div>
                                    <div id="corner-bl" className="corner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <hr />
                    <div className="about-wrapper">
                        <div className="about-me">
                            <h4>More about me</h4>

                            <p style={{ color: 'black' }}>Love myself I do. Not everything, but I love the good as well as the bad. I love my crazy
                                lifestyle, and I love my hard discipline. I love my freedom of speech and the way my eyes get
                                dark when I'm tired. I love that I have learned to trust people with my heart, even if it will
                                get broken. I am proud of everything that I am and will become.</p>

                            <hr />
                            <h4>TOP EXPERTISE</h4>
                            <p>Assistant Manager at OPPO Nepal: <a target="_blank" href="#">Download Resume</a></p>
                            <div id="skills">
                                <ul>
                                    <li>Team Leading</li>
                                    <li>Time Management</li>
                                    <li>Culinary Counsultant</li>

                                </ul>

                            </div>

                        </div>
                        <div className="social-links">
                            <img id="social_img" alt='new' src={require( '../images/follow.jpg')} />
                            <h3>Find me on Twitter & Youtube</h3>

                            <a target="_blank" href="https://www.youtube.com/channel/UCVJ_qKK-EFJsvbQJN1rcGdg" rel="noreferrer">YouTube: @Biliv
                                Pokhrel</a>
                            <br />
                            <a target="_blank" href="https://twitter.com/pokhrel_ji99" rel="noreferrer">Twitter: @pokhrel_ji99</a>
                        </div>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'center' }}>Some of my past Job</h3>
                    <div className="post-wrapper">
                        <div>
                            <div className="post">
                                <img className="thumbnail" alt='new' src={require( '../images/dash.jpg')} />
                                <div className="post-preview">
                                    <h6 className="post-title">Assistant Manager</h6>
                                    <p className="post-intro">Supervises and manages employees. Day-to-day, this might include
                                        organizing the team schedule, authorizing vacations, handling staff queries and taking
                                        disciplinary action.</p>
                                    {/* <a href="post.html">Read More</a> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                                <img className="thumbnail" alt='new' src={require( '../images/interns.jpg')} />
                                <div className="post-preview">
                                    <h6 className="post-title">Intership In China</h6>
                                    <p className="post-intro">The only way to do great work is to love what you do. If you haven’t
                                        found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know
                                        when you find it.
                                    </p>
                                    {/* <a href="post.html">Read More</a>  */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post">
                            <img className="thumbnail" alt='new' src={require( '../images/growth.jpg')} />
                                <div className="post-preview">
                                    <h6 className="post-title">Travelling</h6>
                                    <p className="post-intro">Leadership is creating an environment in which people want to be part
                                        of the organization.Leadership creates an environment that makes people want to, rather
                                        than have to, do.</p>
                                    <a href="post.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'center' }}>YouTube Videos</h3>
                    <div className="video-wrapper">
                        <div>
                            <iframe width="100%" height="345" title='new1' src="https://www.youtube.com/embed/F-7Vt5nTfDM"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="345" title='new1' src="https://www.youtube.com/embed/sf_HZ1o1_-M"></iframe>
                        </div>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'center' }}>Get In Touch</h3>
                    <div className="col">
                        <form id="contact-form">
                            <label>Name</label>
                            <input className="input-field" type="text" name="name" />
                            <label>Subject</label>
                            <input className="input-field" type="text" name="subject" />
                            <label>Email</label>
                            <input className="input-field" type="text" name="email" />
                            <label>Message</label>
                            <textarea className="input-field" name="message"></textarea>
                            <button id="submit-btn" type="submit" value="Send">Send</button>
                        </form>
                    </div>
                    <hr />
                    <div className="footer">
                        <p>Copyright &copy; Biliv Pokhrel 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main