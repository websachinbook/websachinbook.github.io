import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='col-0'>
            <div className='1'> <br /> <br />
                <div className='col-2'></div>
                <div className='col-3'><img src="https://inteshar.netlify.app/images/ducat.png" alt="logo" height="80vh" width="100%" />
                </div>
                <div className="col-4">
                    <ul className="nav nav-tabs mt-5">
                        <li className="/nav-item">
                            <NavLink to="./Home" className="nav-link" >Home</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="./Course" className="nav-link">Course</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="./About" className="nav-link" >About</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="./CorporateTraining" className="nav-link" >CorporateTraining</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/OnliceRegistration" className="nav-link" >OnliceRegistration</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/Certificate" className="nav-link" >Certificate</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                            <NavLink to="/Other" className="nav-link" >Other</NavLink> &nbsp;  &nbsp; &nbsp;  &nbsp;
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-5'></div>
            <div className='col-6'>
                <div className='left'>
                    <div className='col-7'></div>
                    <div className='col-8'> <h1> Our goal is to empower your career ambitions</h1> <br /><br />
                        <input type="text"
                            placeholder=' Search Your Favurite Course Today ' /> &nbsp;  &nbsp;
                        <button className='col-11'> Search</button>
                    </div>
                    <div className='col-9'></div>
                </div>
                <div className='right'> <img src="https://skysoftinfo.com/images/cb.png" alt="post" height="400vh" width="70%" /></div>

            </div>
            <div className='col-12'> <br />
                <input className='FullNmae'
                    type="text"
                    placeholder='Full Name'
                />  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Email Address' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Phone Number' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Select a Course' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <input type="text"
                    placeholder='Select a Brance' /> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <button type='submit'>Submit</button>
            </div>
            <div className='col-13'><br />
                <div className='col-14'> <h3>📼 Lorem The Essemtial Skills </h3></div>
                <div className='col-15'> <h3>🗣 Earn Certificates And Degree </h3></div>
                <div className='col-16'><h3>👤 Get Ready for The Next Career</h3></div>
                <div className='col-17'> <h3>📒 Master at Defferent Areas</h3></div>
            </div>
            <div className='col-18'>
                <div className='col-19'> <h1> Explore Top Prograams</h1></div>
                <div className='col-20'>  <button type='submit'>View all</button></div>
            </div> <br /> <br />
            <div className='col-21'>
                <div className='col-22'> <img src="https://cdn.freebiesupply.com/logos/large/2x/mis-logo-png-transparent.png" alt="logo" height="95vh" width="30%" /> MIS Traning Caourse </div>
                <div className='col-23'> <img src="https://th.bing.com/th/id/OIP.7ED5z1rjnVRoxpuxFYeYjAHaHa?rs=1&pid=ImgDetMain" alt="logo" height="95vh" width="30%" /> DIGITAL MARKETING</div>
                <div className='col-24'> <img src="https://th.bing.com/th/id/OIP.olWHU8y7ZDJB0kAAFDVX6gHaNx?rs=1&pid=ImgDetMain" alt="logo" height="95vh" width="30%" /> JAVA EXPOST</div>
                <div className='col-25'> <img src="https://th.bing.com/th/id/OIP.oUKeebab1jrC-QXIQdiU8AHaHZ?w=583&h=582&rs=1&pid=ImgDetMain" alt="logo" height="95vh" width="30%" /> .NET FULL STACK</div>
            </div> <br />
            <div className='col-26'>
                <div className='col-27'> <img src="https://th.bing.com/th/id/OIP.ZTf4Zwce0plf8hN6WJSfdwHaFh?w=750&h=560&rs=1&pid=ImgDetMain" alt="logo" height="95vh" width="30%" /> WEB DESIGNING </div>
                <div className='col-28'> <img src="https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg" alt="logo" height="95vh" width="30%" /> UI & UX</div>
                <div className='col-29'> <img src="https://www.weblineindia.com/wp-content/uploads/2016/12/mean-stack.jpg" alt="logo" height="95vh" width="30%" /> MAIN STACK</div>
                <div className='col-30'> <img src="https://th.bing.com/th/id/OIP.S4xedMViZbrvAh_OsCCP4gHaEK?rs=1&pid=ImgDetMain" alt="logo" height="95vh" width="30%" /> DATA ANALYTICS </div>
            </div> <br /> <br /> <br /> <br />
            <div className='col-31'> <h1 >OUR LEARNERS WORK AT</h1></div> <br />
            <div className='col-32'> <h3> Ducat learrners word at same of the leading and innovative organizations of </h3> </div>
            <div className='col-33'><h3> today, solving core busniess problems. </h3>
            </div>
            <div align='justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quia consectetur tempora, nesciunt iusto recusandae voluptatem dignissimos quaerat provident accusamus, quisquam soluta eligendi eos odit! Facere illum iure, doloribus voluptates reprehenderit, molestiae neque dolorem non excepturi quas repudiandae? Laborum consectetur cum nesciunt nisi. Ratione, aperiam ad illum ullam vel nemo id! Sed fuga rerum deserunt at fugit, ducimus aliquid maiores possimus, atque dicta, exercitationem quia repellendus eaque dolore quibusdam nisi quos? Pariatur, adipisci quo? Rerum, sed consequatur. Necessitatibus nemo corporis repellendus iusto officiis enim nostrum ea iure, hic quisquam! Ea maxime incidunt dolore! In quos error voluptatum debitis tempora, eos quo consequuntur quibusdam ad distinctio, accusantium eius nihil incidunt iusto, officiis totam. Quidem in officia praesentium quam optio aperiam rerum, ducimus iste libero tenetur pariatur quasi facilis velit, iure, eligendi rem exercitationem repudiandae sapiente sint tempore nobis dicta aspernatur voluptas! Id dolores quas reiciendis neque, quaerat ipsam iste ab laborum tempore expedita. Beatae quas nemo, unde, veritatis neque ducimus cumque necessitatibus dolorem omnis sit libero consequatur autem sapiente blanditiis! Porro, eveniet voluptatem ratione, excepturi dignissimos sapiente placeat, unde assumenda qui perspiciatis harum nobis pariatur natus cupiditate? Ipsam sint porro incidunt voluptatibus odit voluptate reiciendis possimus praesentium cum quia fuga consequuntur autem quis repudiandae corrupti, placeat quo. Quia dolore enim quod provident excepturi tempore eligendi et neque dolores aperiam qui iste repudiandae architecto, maxime quo fuga consequuntur quidem eum consequatur temporibus ex. Aperiam iure maiores impedit repudiandae, corporis omnis asperiores, quos hic repellendus enim pariatur sed fugiat. Saepe enim eveniet vero!</div>
        <br></br>
        <div align='justufy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis, explicabo officiis ut unde dignissimos dicta dolorum recusandae, error itaque aut alias omnis! Quis cumque beatae quos dignissimos at? Iure corrupti est totam asperiores dolorem hic ad quidem harum beatae, id obcaecati voluptate nam quisquam deserunt pariatur quas rem tempore qui fugit voluptates? Nam ipsa veniam, praesentium iure provident consectetur culpa? Esse illo aperiam nam consequatur? Doloremque qui omnis autem nulla esse. Soluta cupiditate officiis consequuntur quam, labore repellendus delectus numquam minima tempore voluptas placeat voluptatibus odit nostrum alias cumque, ratione qui. Sunt id, vel inventore quia nihil, voluptatum temporibus nesciunt error aliquid in consequatur unde amet, itaque reiciendis dolore! Praesentium ab, amet ex dolor quo, aperiam temporibus voluptatem consequuntur quae exercitationem optio maiores rerum accusantium esse? Ad delectus modi veritatis quod eveniet vel et voluptate labore doloremque! Quam consequuntur culpa iure unde rem, sit nobis autem dicta et molestias nihil ducimus veniam impedit nam ut. Facere modi, ratione iste unde labore animi in saepe harum maiores consequuntur magnam. Ratione exercitationem autem nesciunt assumenda? Nostrum atque, libero suscipit repellendus quia iusto reprehenderit ut qui incidunt placeat molestiae cupiditate consectetur asperiores. Modi sunt quis, iste, provident laboriosam ab a quaerat quo fugiat accusamus in tempore corrupti pariatur explicabo molestiae quod nihil dolor officiis assumenda quia neque. Incidunt tenetur quidem placeat cupiditate qui doloribus, quos odit, sequi fugiat, reprehenderit illo et non expedita. Reiciendis assumenda eos vitae officia error facere adipisci laudantium aut nostrum dolore doloribus provident sapiente voluptates, culpa ullam at voluptatem reprehenderit corporis non ratione veritatis molestias distinctio! Quibusdam saepe aliquid fugit libero ex natus. Quos, earum velit omnis quam repudiandae rem aliquam fugit laudantium minima quas! Similique debitis illo, officia nam quisquam facilis molestiae accusamus at voluptatum nihil, sint reprehenderit labore, molestias hic sed libero maxime dicta exercitationem recusandae?</div>
       <br></br>
        <div align='justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita cum quisquam similique eos, totam saepe illo accusamus voluptate, qui, ullam non debitis itaque ipsa obcaecati architecto quia. Optio aspernatur maiores labore alias corporis a nulla explicabo, nesciunt magni omnis quaerat veritatis quibusdam eos cum exercitationem eaque placeat fuga id animi consectetur reprehenderit delectus natus est ad. Magnam, quis iste! Recusandae ipsum reiciendis non sit ab quibusdam quasi laudantium tenetur quaerat tempora qui assumenda molestiae nisi voluptates eveniet, quod omnis fugit ducimus. Quam asperiores impedit commodi excepturi ducimus eaque atque fugit sapiente aspernatur est iste deleniti quia, rem quidem consectetur repudiandae ex odit laudantium nostrum, magnam saepe voluptatibus. Natus dignissimos illum maxime, corrupti quos rerum, ea impedit necessitatibus accusamus illo beatae ad quis ab eligendi nihil sequi. A accusamus ipsa eaque rem dolores nostrum distinctio asperiores ratione rerum eveniet, voluptatem nulla, repellat iste atque ullam tempore neque omnis ipsam accusantium? Sapiente.</div>
        </div>
    )
}

export default Header