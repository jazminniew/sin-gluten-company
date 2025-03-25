import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <a href="https://www.instagram.com/singlutencompany?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="socialContainer containerOne">
          <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@sin.gluten.compan?is_from_webapp=1&sender_device=pc" className="socialContainer containerTwo">
          <svg className="socialSvg tiktokSvg largeIcon" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>Tiktok</title>
            <g id="Icon/Social/tiktok-white" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" id="Fill-1" fill="#FFFFFF" />
            </g>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61566532809356" className="socialContainer containerThree">
          <div>
            <svg className="socialSvg tiktokSvg largeIcon" width="44px" height="44px" viewBox="0 0 45 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>Facebook</title>
              <g id="Icon/Social/facebook-black" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <path d="M30.0793333,40 L30.0793333,27.608 L34.239,27.608 L34.8616667,22.7783333 L30.0793333,22.7783333 L30.0793333,19.695 C30.0793333,18.2966667 30.4676667,17.344 32.4726667,17.344 L35.0303333,17.3426667 L35.0303333,13.0233333 C34.5876667,12.9646667 33.0696667,12.833 31.3036667,12.833 C27.6163333,12.833 25.0923333,15.0836667 25.0923333,19.2166667 L25.0923333,22.7783333 L20.922,22.7783333 L20.922,27.608 L25.0923333,27.608 L25.0923333,40 L30.0793333,40 Z M9.766,40 C8.79033333,40 8,39.209 8,38.234 L8,9.766 C8,8.79033333 8.79033333,8 9.766,8 L38.2336667,8 C39.209,8 40,8.79033333 40,9.766 L40,38.234 C40,39.209 39.209,40 38.2336667,40 L9.766,40 Z" id="Shape" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
    background: none
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  }

  /* for all social containers*/
  .socialContainer {
  width: 40px;
  height: 40px;
  border-radius: 250px;
background-color: rgba(237, 237, 237, 0.36); /* 50% de transparencia */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;

  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: 0.3s;
  }
  /* Tiktok*/
  .containerTwo:hover {
    background-color: #25F4EE;
    transition-duration: 0.3s;
  }
  /* Facebook*/
  .containerThree:hover {
    background-color: #1877f2;
    transition-duration: 0.3s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: green;
    transition-duration: 0.3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 19px;
  }
  .largeIcon {
    width: 27px; /* Ancho específico solo para el icono de TikTok */
  }
  .socialSvg path {
    fill: rgb(134, 134, 134);
  }

.socialContainer:hover .socialSvg path {
  fill: #ffffff !important;
}





  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }`;

export default Card;
