import React from 'react';

function AboutMe() {
    return (
        <div class="container">
            <h1 style={{textAlign:'center', marginTop:50}}>About Me</h1>
            <div style={{marginTop:30}} class="row justify-content-md-center">
                <div class="col-sm-10 col-md-8">
                    <p>
                        I am a wife, mom, business owner and pet lover. I love learning to use new software applications and I am a self taught advanced user of Microsoft Word, Powerpoint, Excel, Quickbooks, Quicken, Canva, WordPress and more. I have always been interested in technology and have worked as a Business Analyst at Electonic Data Systems and a Consultant at Gartner, Inc.
                    </p>
                    <p>
                        In 2019, I launched a startup (<a href="https:cheqrpay.com">CHEQRPAY</a>) providing online fundraising services to nonprofit organizations. Our solution modernizes online giving with responsive donation pages, mobile wallet technology and QR Codes. With CheqrPay, donors can give online or in-person in as little as 25 seconds! As the founder and CEO of this growing company, I am excited to complete this coding bootcamp to better understand and lead the CheqrPay development team.
                    </p>
                </div>
                <div class="col-sm-10 col-md-2">
                    <img className="img-fluid" src='/assets/images/Headshot.jpg' />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;