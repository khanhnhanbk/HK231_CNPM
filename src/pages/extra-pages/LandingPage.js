// material-ui
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const LandingPage = () => (
  // <>
  //   <div className="div">
      
  //     <div className="div-12">
  //       <div className="div-13">
  //         <div className="div-14">
  //           <span style={{ color: "rgba(39, 126, 210, 1)" }}>Hệ Thống In</span>
  //           <span style={{ color: "rgba(0, 0, 0, 1)" }}>
  //             Trường Đại Học Bách Khoa TP.HCM
  //           </span>
  //         </div>
  //         <div className="div-15">
  //           <img
  //             loading="lazy"
  //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d26c51a4-24d8-4d8c-9774-e2af10651240?"
  //             className="img-2"
  //             alt="img"
  //           />
  //           Bắt đầu
  //         </div>
  //       </div>
  //       <img loading="lazy" srcSet="..." className="img-3" alt="img" />
  //       <div className="div-17" />
  //     </div>
  //     <div className="div-18">
  //       <div className="div-19">
  //         <img
  //           loading="lazy"
  //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/a767bf5e-c9c9-4465-9bbc-54384b687040?"
  //           className="img-4"
  //           alt="img"
  //         />
  //         <div className="div-20">Thao tác dễ dàng</div>
  //       </div>
  //       <div className="div-21">
  //         <img
  //           loading="lazy"
  //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6314fc6e-bf42-4035-bd6e-aff3d9ca4985?"
  //           className="img-5"
  //           alt="img"
  //         />
  //         <div className="div-22">Trao đổi tiện lợi</div>
  //       </div>
  //       <div className="div-23">
  //         <img
  //           loading="lazy"
  //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7bcfb-841a-4ab7-8d84-9d2120afddb1?"
  //           className="img-6"
  //           alt="img"
  //         />
  //         <div className="div-24">Tốc độ in cao</div>
  //       </div>
  //     </div>
  //   </div>
  //   <style
  //     dangerouslySetInnerHTML={{
  //       __html:
  //         "\n  .div {\n    background-color: #fff;\n    display: flex;\n    flex-direction: column;\n  }\n  .div-2 {\n    justify-content: space-between;\n    border-bottom: 0.5px solid #666;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    background-color: #fff;\n    display: flex;\n    width: 100%;\n    gap: 20px;\n    padding: 1px 12px 1px 80px;\n  }\n  @media (max-width: 991px) {\n    .div-2 {\n      max-width: 100%;\n      flex-wrap: wrap;\n      padding-left: 20px;\n    }\n  }\n  .img {\n    aspect-ratio: 2.47;\n    object-fit: contain;\n    object-position: center;\n    width: 148px;\n    overflow: hidden;\n    max-width: 100%;\n  }\n  .div-3 {\n    align-self: center;\n    display: flex;\n    gap: 16px;\n    margin: auto 0;\n  }\n  .div-4 {\n    align-items: flex-start;\n    display: flex;\n    padding-top: 9px;\n    justify-content: space-between;\n    gap: 16px;\n  }\n  @media (max-width: 991px) {\n    .div-4 {\n      justify-content: center;\n    }\n  }\n  .div-5 {\n    justify-content: center;\n    align-items: center;\n    align-self: stretch;\n    display: flex;\n    flex-grow: 1;\n    flex-basis: 0%;\n    flex-direction: column;\n  }\n  .div-6 {\n    color: #1677ff;\n    letter-spacing: 0.4000000059604645px;\n    text-transform: uppercase;\n    white-space: nowrap;\n    font: 500 14px/24px Roboto, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-6 {\n      white-space: initial;\n    }\n  }\n  .div-7 {\n    background-color: #1677ff;\n    align-self: stretch;\n    margin-top: 7px;\n    height: 2px;\n  }\n  .div-8 {\n    color: var(--text-secondary, rgba(0, 0, 0, 0.6));\n    letter-spacing: 0.4000000059604645px;\n    text-transform: uppercase;\n    align-self: start;\n    font: 500 14px/24px Roboto, sans-serif;\n  }\n  .div-9 {\n    color: var(--text-secondary, rgba(0, 0, 0, 0.6));\n    letter-spacing: 0.4000000059604645px;\n    text-transform: uppercase;\n    align-self: start;\n    font: 500 14px/24px Roboto, sans-serif;\n  }\n  .div-10 {\n    color: var(--text-secondary, rgba(0, 0, 0, 0.6));\n    letter-spacing: 0.4000000059604645px;\n    text-transform: uppercase;\n    align-self: start;\n    white-space: nowrap;\n    font: 500 14px/24px Roboto, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-10 {\n      white-space: initial;\n    }\n  }\n  .div-11 {\n    color: #f27123;\n    text-align: center;\n    letter-spacing: 0.4000000059604645px;\n    text-transform: uppercase;\n    white-space: nowrap;\n    border-radius: 10px;\n    border: 1px solid #f27123;\n    background-color: #fff;\n    align-self: center;\n    align-items: center;\n    margin: auto 0;\n    padding: 11px 20px;\n    font: 500 12px/24px Roboto, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-11 {\n      white-space: initial;\n    }\n  }\n  .div-12 {\n    align-self: center;\n    display: flex;\n    margin-top: 59px;\n    width: 100%;\n    max-width: 1051px;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0px;\n    padding: 0 20px;\n  }\n  @media (max-width: 991px) {\n    .div-12 {\n      max-width: 100%;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-top: 40px;\n    }\n  }\n  .div-13 {\n    display: flex;\n    flex-grow: 1;\n    flex-basis: 0%;\n    flex-direction: column;\n    margin: auto 0;\n  }\n  @media (max-width: 991px) {\n    .div-13 {\n      max-width: 100%;\n    }\n  }\n  .div-14 {\n    color: #000;\n    font: 700 64px/96px Poppins, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-14 {\n      max-width: 100%;\n      font-size: 40px;\n      line-height: 66px;\n    }\n  }\n  .div-15 {\n    disply: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: #fff;\n    position: relative;\n    fill: #277ed2;\n    overflow: hidden;\n    align-self: end;\n    aspect-ratio: 3.914285714285714;\n    margin-top: 64px;\n    width: 274px;\n    max-width: 100%;\n    align-items: center;\n    padding: 23px 20px;\n    font: 800 30px/45px Poppins, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-15 {\n      margin-top: 40px;\n    }\n  }\n  .img-2 {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n  .div-16 {\n    position: relative;\n  }\n  .img-3 {\n    aspect-ratio: 1.58;\n    object-fit: contain;\n    object-position: center;\n    width: 100%;\n    overflow: hidden;\n    align-self: start;\n    margin-top: 22px;\n  }\n  .div-17 {\n    background-color: #e4ffff;\n    align-self: stretch;\n    display: flex;\n    width: 107px;\n    height: 510px;\n    flex-direction: column;\n  }\n  .div-18 {\n    align-self: center;\n    display: flex;\n    width: 100%;\n    max-width: 958px;\n    align-items: start;\n    justify-content: space-between;\n    gap: 20px;\n    margin: 59px 0 77px;\n    padding: 0 20px;\n  }\n  @media (max-width: 991px) {\n    .div-18 {\n      max-width: 100%;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin: 40px 0;\n    }\n  }\n  .div-19 {\n    justify-content: flex-end;\n    border-radius: 5px;\n    background-color: #dff;\n    display: flex;\n    margin-top: 6px;\n    gap: 12px;\n    padding: 10px 11px 10px 17px;\n  }\n  .img-4 {\n    aspect-ratio: 1;\n    object-fit: contain;\n    object-position: center;\n    width: 40px;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    max-width: 100%;\n  }\n  .div-20 {\n    color: #000;\n    align-self: center;\n    flex-grow: 1;\n    white-space: nowrap;\n    margin: auto 0;\n    font: 400 16px/24px Poppins, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-20 {\n      white-space: initial;\n    }\n  }\n  .div-21 {\n    border-radius: 5px;\n    background-color: #dff;\n    display: flex;\n    margin-top: 6px;\n    justify-content: space-between;\n    gap: 20px;\n    padding: 10px 58px 10px 17px;\n  }\n  @media (max-width: 991px) {\n    .div-21 {\n      padding-right: 20px;\n    }\n  }\n  .img-5 {\n    aspect-ratio: 1;\n    object-fit: contain;\n    object-position: center;\n    width: 40px;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    max-width: 100%;\n  }\n  .div-22 {\n    color: #000;\n    align-self: center;\n    flex-grow: 1;\n    white-space: nowrap;\n    margin: auto 0;\n    font: 400 16px/24px Poppins, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-22 {\n      white-space: initial;\n    }\n  }\n  .div-23 {\n    border-radius: 5px;\n    background-color: #dff;\n    display: flex;\n    gap: 12px;\n    padding: 10px 32px 10px 17px;\n  }\n  @media (max-width: 991px) {\n    .div-23 {\n      padding-right: 20px;\n    }\n  }\n  .img-6 {\n    aspect-ratio: 1;\n    object-fit: contain;\n    object-position: center;\n    width: 40px;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    max-width: 100%;\n  }\n  .div-24 {\n    color: #000;\n    align-self: center;\n    flex-grow: 1;\n    white-space: nowrap;\n    margin: auto 0;\n    font: 400 16px/24px Poppins, sans-serif;\n  }\n  @media (max-width: 991px) {\n    .div-24 {\n      white-space: initial;\n    }\n  }\n"
  //     }}
  //   />
  // </>
  <>
  <MainCard title="">
    
    <Grid container spacing ={2} my = "50px" mx = "7vw">
        <Grid item xs={8}>
        <Typography sx={{
          fontWeight: "900",
          fontSize: '4rem',
          color: "rgba(39, 126, 210, 1)" 
        }} >Hệ thống in</Typography> <br></br>
        <Typography sx={{
          fontWeight: "900",
          fontSize: '4rem',
          
        }} >Trường Đại học Bách Khoa Tp.HCM</Typography>
        </Grid>
        <Grid item xs={4}>
        <Box
          component="img"
          sx={{
            height: { md: 233, sm: 167, xs:123},
            width: { md: 226, sm: 170, xs:126 },
          }}
          alt="logo"
          src="https://s3-alpha-sig.figma.com/img/f984/2187/cd6c096929e59af4f3c0a47636a60ade?Expires=1701648000&Signature=dVTjGOPzm6qPMm6~Pltt5sf89VWdJwwhMbFDCYIF6Dghedn8voPeKG81vaGrMLSRr3cC21xEczFtTHG4Me-uF4cyQUV6yK4WwFowswNZo1Dgp0fSz9i3BgsNQ6uUwKuU7MJWs6kZwvfjHRs3mxC6QCbI0olFRDzx8ujHL8EhGCfb4rVH7oA2M1SWARnAj~QK9pkjjHryhYOqjHuRW2XFdWqGEW3D~oO6VRR~DfXAASPSwAvJIstBtpLbY21VJjgdQZcPENhXLdzAakjtzgutMnkttNgQuuCQfx36D7s0ATPfhvN3HidgnOplOOLfd7lAP9At5dBdONkwKDnHFsIiOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        </Grid>
    </Grid>

    <Box
            sx={{
              display: 'flex',
              // flexDirection: 'column',
              justifyContent: 'center'
            }}
    >
            <Button sx = {{
              background: '#277ED2',
              color: 'white',
              width: '150px',
              
            }} variant="contained" href="/login">
              Bắt đầu </Button>
    </Box>
    
    <Box sx={{
              
              display: 'flex',
              
              justifyContent: 'space-evenly',

            }} mt= '50px' mb = '80px'
    >
      
            <Box sx ={{
              display: 'flex',
              
              background: '#DFF',
              borderRadius: '5px',
              padding: '10px 9px 10px 17px'
                     }}
            >
              <SvgIcon sx = {{
                background: '#09B451',
                borderRadius: '50px',
                padding: '4px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.25 6.25H3.75C3.19772 6.25 2.75 6.69772 2.75 7.25V16.75C2.75 17.3023 3.19772 17.75 3.75 17.75H20.25C20.8023 17.75 21.25 17.3023 21.25 16.75V7.25C21.25 6.69772 20.8023 6.25 20.25 6.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.75 20.25V3.75C17.75 3.19772 17.3023 2.75 16.75 2.75L7.25 2.75C6.69771 2.75 6.25 3.19772 6.25 3.75L6.25 20.25C6.25 20.8023 6.69771 21.25 7.25 21.25H16.75C17.3023 21.25 17.75 20.8023 17.75 20.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.065 10.985L12.595 14.26M15.065 14.26L12.595 10.985M15.725 9.5H11.67L9.73002 14.5L8.27502 10.985" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SvgIcon>
              <Typography mx='12px'>Thao tác dễ dàng</Typography>
            </Box>

            <Box sx ={{
              display: 'flex',
              background: '#DFF',
              borderRadius: '5px',
              padding: '10px 9px 10px 17px'
                     }}
            >
              <SvgIcon sx = {{
                background: '#09B451',
                borderRadius: '50px',
                padding: '4px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 19C17.771 19 19.657 19 20.828 17.828C22 16.657 22 14.771 22 11C22 7.229 22 5.343 20.828 4.172C19.657 3 17.771 3 14 3H10C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11C2 14.771 2 16.657 3.172 17.828C3.825 18.482 4.7 18.771 6 18.898" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11V11.01M8 11V11.01M16 11V11.01M14 19C12.764 19 11.402 19.5 10.159 20.145C8.161 21.182 7.162 21.701 6.67 21.37C6.178 21.04 6.271 20.015 6.458 17.966L6.5 17.5" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </SvgIcon>
              <Typography mx='12px'>Trao đổi tiện lợi</Typography>
            </Box>

            <Box sx ={{
              display: 'flex',
              background: '#DFF',
              borderRadius: '5px',
              padding: '10px 9px 10px 17px'
                     }}
            >
              <SvgIcon sx = {{
                background: '#09B451',
                borderRadius: '50px',
                padding: '4px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_67_1579)">
                    <path d="M1.5 4.24194C2.8275 3.68694 4.731 3.08844 6.582 2.90244C8.577 2.70144 10.269 2.99694 11.25 4.03044V18.6494C9.8475 17.8544 8.07 17.7449 6.4305 17.9099C4.6605 18.0899 2.8755 18.6014 1.5 19.1264V4.24194ZM12.75 4.03044C13.731 2.99694 15.423 2.70144 17.418 2.90244C19.269 3.08844 21.1725 3.68694 22.5 4.24194V19.1264C21.123 18.6014 19.3395 18.0884 17.5695 17.9114C15.9285 17.7449 14.1525 17.8529 12.75 18.6494V4.03044ZM12 2.67444C10.5225 1.40394 8.3805 1.21494 6.4305 1.40994C4.1595 1.63944 1.8675 2.41794 0.4395 3.06744C0.308474 3.12704 0.197363 3.22307 0.119432 3.34409C0.0415 3.46511 3.98571e-05 3.606 0 3.74994L0 20.2499C3.4743e-05 20.3754 0.0315557 20.4989 0.0916756 20.6091C0.151796 20.7192 0.238593 20.8125 0.344116 20.8804C0.44964 20.9483 0.570517 20.9887 0.695675 20.9978C0.820833 21.0069 0.946271 20.9844 1.0605 20.9324C2.3835 20.3324 4.515 19.6109 6.5805 19.4024C8.694 19.1894 10.4655 19.5329 11.415 20.7179C11.4853 20.8055 11.5743 20.8762 11.6756 20.9248C11.7768 20.9734 11.8877 20.9986 12 20.9986C12.1123 20.9986 12.2232 20.9734 12.3244 20.9248C12.4257 20.8762 12.5147 20.8055 12.585 20.7179C13.5345 19.5329 15.306 19.1894 17.418 19.4024C19.485 19.6109 21.618 20.3324 22.9395 20.9324C23.0537 20.9844 23.1792 21.0069 23.3043 20.9978C23.4295 20.9887 23.5504 20.9483 23.6559 20.8804C23.7614 20.8125 23.8482 20.7192 23.9083 20.6091C23.9684 20.4989 24 20.3754 24 20.2499V3.74994C24 3.606 23.9585 3.46511 23.8806 3.34409C23.8026 3.22307 23.6915 3.12704 23.5605 3.06744C22.1325 2.41794 19.8405 1.63944 17.5695 1.40994C15.6195 1.21344 13.4775 1.40394 12 2.67444Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_67_1579">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </SvgIcon>
              <Typography mx='12px'>Tốc độ in cao</Typography>
            </Box>

    </Box>
  </MainCard>
  </>
);

export default LandingPage;
