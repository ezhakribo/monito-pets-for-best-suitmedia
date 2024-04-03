import "./scss/abstract/variables.scss"
import "./scss/abstract/typography.scss"
import "./scss/base/reset.scss"
import "./scss/base/base.scss"
import "./scss/components/buttons.scss"
import "./scss/components/header.scss"
import "./scss/components/navbar.scss"
import "./scss/components/section.scss"
import "./scss/components/footer.scss"
import "./scss/utilities/container.scss"
import webLogo from './images/logo.png'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import girlMidBanner from './images/girl-mid-banner.png'
import gift from './images/gift.png'
import prod1 from './images/prod1.png'
import prod2 from './images/prod2.png'
import prod3 from './images/prod3.png'
import prod4 from './images/prod4.png'
import prod5 from './images/prod5.png'
import prod6 from './images/prod6.png'
import prod7 from './images/prod7.png'
import prod8 from './images/prod8.png'
import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'
import logo4 from './images/logo4.png'
import logo5 from './images/logo5.png'
import logo6 from './images/logo6.png'
import logo7 from './images/logo7.png'
import pawBanner from './images/paw-bottom-banner.png'
import pawTittle from './images/paw-title.png'
import info1 from './images/info1.png'
import info2 from './images/info2.png'
import info3 from './images/info3.png'

function App() {

  return (
    <>
    <header className="header">
      <nav className="nav">
        <div className="container nav_container">
          <div className="nav_left">
            <a href="#" className="nav_logo">
              <img src={webLogo} alt="" />
            </a>
            <ul className="nav_list">
              <li className="nav_item"><a href="" className="nav_link">Home</a></li>
              <li className="nav_item"><a href="" className="nav_link">Category</a></li>
              <li className="nav_item"><a href="" className="nav_link">About</a></li>
              <li className="nav_item"><a href="" className="nav_link">Contact</a></li>
            </ul>
          </div>
          <div className="nav_right">
            <a href="" className="btn btn_bg">Join the Community</a>
            </div>
        </div>
      </nav>
      <div className="container header_wrapper_container">
        <div className="header_wrapper">
          <h1 className="header_main_title">One More Friend Thousand more fun!</h1>
          <p className="header_p">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
          <div className="header_btns">
            <a href="$" className="btn btn_outlined">Video Intro</a>
            <a href="$" className="btn btn_bg">Explore Now</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="section">
        <div className="container">
          <div className="section_header">
            <div className="section_header_left">
              <p className="section_header_p">What&apos;s new ?</p>
              <h2 className="section_header_h2">Take a look at some of our pets</h2>
            </div>
            <div className="section_header_right">
              <a href="" className="btn btn_outlined">View more &#62;</a>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <img src={img1} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO231 - Pomeranian White</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Male</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">6.900.000 VND</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={img2} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO502 - Poodle Tiny Yellow</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Female</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">3.900.000 VND</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={img3} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO102 - Poodle Tiny Sepia</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Male</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">4.000.000 VND</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={img4} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO512 - Alaskan Malamute Grey</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Male</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">8.900.000 VND</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={img5} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO231 - Pembroke Corgi Cream</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Male</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">7.900.000 VND</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={img6} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO502 - Pembroke Corgi Tricolor</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Female</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">9.000.000 VND</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={img7} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO231 - Pomeranian White</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Female</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">6.500.000 VND</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={img8} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">MO512 - Poodle Tiny Dairy Cow</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Gene: Male</div>
                    <div className="card_body_details_age">Age: 02 months</div>
                  </div>
                  <p className="card_body_price">5.000.000 VND</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="banner">
            <div className="banner_wrapper">
              <img src={girlMidBanner} alt="" className="banner_img" />
              <div className="banner_content">
                <h1 className="banner_title">One More Friend Thousand more fun!</h1>
                <p className="banner_p">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                <div className="banner_btns">
                  <a href="$" className="btn btn_outlined">View Intro</a>
                  <a href="$" className="btn btn_bg">Explore Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section_product">
        <div className="container">
          <div className="section_header">
            <div className="section_header_left">
              <p className="section_header_p">Hard to choose right products for your pets?</p>
              <h2 className="section_header_h2">Our Products</h2>
            </div>
            <div className="section_header_right">
              <a href="" className="btn btn_outlined">View more  &#62;</a>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <img src={prod1} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">Reflex Plus Adult Cat Food Salmon</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Dog Food</div>
                    <div className="card_body_details_age">Size: 385gm</div>
                  </div>
                  <p className="card_body_price">140.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free Toy & Free Shaker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={prod2} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">Reflex Plus Adult Cat Food Salmon</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Cat Food</div>
                    <div className="card_body_details_age">Size: 1.5kg</div>
                  </div>
                  <p className="card_body_price">165.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free Toy & Free Shaker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={prod3} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">Cat scratching ball toy kitten sisal rope ball</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Toy</div>
                    <div className="card_body_details_age"></div>
                  </div>
                  <p className="card_body_price">1.100.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free Cat Food</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={prod4} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">Cute Pet Cat Warm Nest</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Toy</div>
                    <div className="card_body_details_age"></div>
                  </div>
                  <p className="card_body_price">410.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free toy & Free shaker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={prod5} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">NaturVet Dogs - Omega-Gold Plus Salmon Oil</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Dog Food</div>
                    <div className="card_body_details_age">Size: 385gm</div>
                  </div>
                  <p className="card_body_price">350.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free Toy & Free Shaker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={prod6} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">Costumes Fashion Pet Clother Cowboy Rider</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Costume</div>
                    <div className="card_body_details_age">Size: 1.5kg</div>
                  </div>
                  <p className="card_body_price">500.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free Toy & Free Shaker</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={prod7} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">Costumes Chicken Drumsti ck Headband</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Costume</div>
                    <div className="card_body_details_age"></div>
                  </div>
                  <p className="card_body_price">400.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free Cat Food</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={prod8} alt="" />
                <div className="card-body">
                  <h3 className="card_body_title">Plush Pet Toy</h3>
                  <div className="card_body_details">
                    <div className="card_body_details_gender">Product: Toy</div>
                    <div className="card_body_details_age"></div>
                  </div>
                  <p className="card_body_price">250.000 VND</p>
                  <div className="card_body_gift">
                    <img src={gift} alt="" className="card_body_gift_icon" />
                    <p className="card_body_gift_p">Free Food & Shaker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section_logo">
        <div className="container">
          <div className="section_header">
            <div className="section_header_left">
              <p className="section_header_p">Proud to be a part of</p>
              <h2 className="section_header_h2">Pets Sellers</h2>
            </div>
            <div className="section_header_right">
              <a href="" className="btn btn_outlined">View all our sellers &#62;</a>
            </div>
          </div>
          <div className="logos_container">
            <img src={logo1} alt="" className="logos_logo" />
            <img src={logo2} alt="" className="logos_logo" />
            <img src={logo3} alt="" className="logos_logo" />
            <img src={logo4} alt="" className="logos_logo" />
            <img src={logo5} alt="" className="logos_logo" />
            <img src={logo6} alt="" className="logos_logo" />
            <img src={logo7} alt="" className="logos_logo" />
          </div>
        </div>
      </section>
      <section className="section section_banner_2">
        <div className="container">
          <div className="banner_2">
            <div className="banner_2_wrapper">
              <div className="banner_2_content">
                <h1 className="banner_2_title">Adoption
                  <img src={pawTittle} alt="" className="banner_2_title_icon" />
                </h1>
                <h2 className="banner_2_subtitle">We Need Help. So Do They.</h2>
                <p className="banner_2_p">Adopt a pet and give it a home, it will be love you back unconditionally.</p>
                <div className="banner_2_btns">
                  <a href="$" className="btn btn_2_bg">Explore Now</a>
                  <a href="$" className="btn btn_2_outlined">View Intro</a>
                </div>
              </div>
              <img src={pawBanner} alt="" className="banner_2_img" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section_knowledge">
        <div className="container">
          <div className="section_header">
            <div className="section_header_left">
              <p className="section_header_p">You already know ?</p>
              <h2 className="section_header_h2">Useful Pet Knowledge</h2>
            </div>
            <div className="section_header_right">
              <a href="" className="btn btn_outlined">View more &#62;</a>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <img src={info1} alt="" />
                <div className="card-body">
                  <p className="card_body_category">Pet knowledge</p>
                  <h3 className="card_body_title">Dog Diet You Need To Know</h3>
                  <div className="card_body_text">Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.</div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={info2} alt="" />
                <div className="card-body">
                  <p className="card_body_category">Pet knowledge</p>
                  <h3 className="card_body_title">What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
                  <div className="card_body_text">The Pomeranian, also known as the Pomeranian, is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img src={info3} alt="" />
                <div className="card-body">
                  <p className="card_body_category">Pet knowledge</p>
                  <h3 className="card_body_title">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h3>
                  <div className="card_body_text">Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_top">
          <h2 className="footer_top_heading">Register now so you don&apos;t miss our programs</h2>
          <form action="#" className="footer_top_form">
            <input type="email" className="footer_top_form_input" placeholder="Enter your Email"/>
            <button className="footer_top_form_btn btn">Subscribe Now</button>
          </form>
        </div>
        <div className="footer_middle">
          <div className="footer_middle_menu">
            <nav className="nav">
              <div className="container nav_container">
                <div className="nav_left social_media">
                  <ul className="nav_list">
                    <li className="nav_item"><a href="" className="nav_link">Home</a></li>
                    <li className="nav_item"><a href="" className="nav_link">Category</a></li>
                    <li className="nav_item"><a href="" className="nav_link">About</a></li>
                    <li className="nav_item"><a href="" className="nav_link">Contact</a></li>
                  </ul>
                </div>
                <div className="nav_right social_media">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#00171F"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_4202_282)">
                    <path d="M7.55016 21.7502C16.6045 21.7502 21.5583 14.2469 21.5583 7.74211C21.5583 7.53117 21.5536 7.31554 21.5442 7.1046C22.5079 6.40771 23.3395 5.5445 24 4.55554C23.1025 4.95484 22.1496 5.21563 21.1739 5.32898C22.2013 4.71315 22.9705 3.74572 23.3391 2.60601C22.3726 3.1788 21.3156 3.58286 20.2134 3.80085C19.4708 3.01181 18.489 2.48936 17.4197 2.3143C16.3504 2.13923 15.2532 2.32129 14.2977 2.83234C13.3423 3.34339 12.5818 4.15495 12.1338 5.14156C11.6859 6.12816 11.5754 7.23486 11.8195 8.29054C9.86249 8.19233 7.94794 7.68395 6.19998 6.79834C4.45203 5.91274 2.90969 4.66968 1.67297 3.14976C1.0444 4.23349 0.852057 5.51589 1.13503 6.73634C1.418 7.95678 2.15506 9.02369 3.19641 9.72023C2.41463 9.69541 1.64998 9.48492 0.965625 9.10617V9.1671C0.964925 10.3044 1.3581 11.4068 2.07831 12.287C2.79852 13.1672 3.80132 13.7708 4.91625 13.9952C4.19206 14.1934 3.43198 14.2222 2.69484 14.0796C3.00945 15.0577 3.62157 15.9131 4.44577 16.5266C5.26997 17.14 6.26512 17.4808 7.29234 17.5015C5.54842 18.8714 3.39417 19.6144 1.17656 19.6109C0.783287 19.6103 0.390399 19.5861 0 19.5387C2.25286 20.984 4.87353 21.7516 7.55016 21.7502Z" fill="#00171F"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4202_282">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_4202_284)">
                    <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#00171F"/>
                    <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#00171F"/>
                    <path d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z" fill="#00171F"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4202_284">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23.7609 7.1998C23.7609 7.1998 23.5266 5.54512 22.8047 4.81855C21.8906 3.8623 20.8688 3.85762 20.4 3.80137C17.0438 3.55762 12.0047 3.55762 12.0047 3.55762H11.9953C11.9953 3.55762 6.95625 3.55762 3.6 3.80137C3.13125 3.85762 2.10938 3.8623 1.19531 4.81855C0.473438 5.54512 0.24375 7.1998 0.24375 7.1998C0.24375 7.1998 0 9.14512 0 11.0857V12.9045C0 14.8451 0.239062 16.7904 0.239062 16.7904C0.239062 16.7904 0.473437 18.4451 1.19062 19.1717C2.10469 20.1279 3.30469 20.0951 3.83906 20.1982C5.76094 20.3811 12 20.4373 12 20.4373C12 20.4373 17.0438 20.4279 20.4 20.1889C20.8688 20.1326 21.8906 20.1279 22.8047 19.1717C23.5266 18.4451 23.7609 16.7904 23.7609 16.7904C23.7609 16.7904 24 14.8498 24 12.9045V11.0857C24 9.14512 23.7609 7.1998 23.7609 7.1998ZM9.52031 15.1123V8.36699L16.0031 11.7514L9.52031 15.1123Z" fill="#00171F"/>
                  </svg>
                </div>
              </div>
            </nav>
          </div>
          <div className="footer_middle_social"></div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_copyright">© 2022 Monito. All rights reserved.</div>
          <img src={webLogo} alt="" className="footer_bottom_logo" />
          <ul className="footer_bottom_list">
            <li className="footer_bottom_item">
              <a href="" className="footer_bottom_link">Terms of Service</a>
            </li>
            <li className="footer_bottom_item">
              <a href="" className="footer_bottom_link">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
