import * as React from 'react';
import style from '../styles/Privacy.module.css';

import { useTranslation } from 'react-i18next';

function Privacy() {

    const { t } = useTranslation();

    return (
        <section className={`${style.layout}`}>

            <div className={`${style.inner} d-flex align-items-center `}>
                <div className='container min-vh-100 my-5'>
                    <h2 className='text-center fw-bolder text-capitalize my-5'>{t("privacy")}</h2>
                    <div className="row mt-5">
                        <div className="col-md-12" >
                            <div className={`${style.item}`}>
                                <ol>
                                    <li><span className='fw-bold'>INTRODUCTION</span>
                                        <p>This Privacy Policy explains how Alrowadit collects, uses, stores, discloses and otherwise processes the personal data we collect about individuals who use and interact with our websites and apps that display or link to this Privacy Policy, register for an account and use our Services, visit our branded social media pages, register for, attend or take part in our events, webinars, or contests, or otherwise interact with us in person and/or by email, text message, instant messaging, telephonically, and by other electronic means.</p>
                                    </li>
                                    <li><span className='fw-bold'>Information Received From Third Parties</span>
                                        <p>
                                            We may combine personal data we receive from you with personal data we obtain from other sources, such as:
                                        </p>
                                        <ul>
                                            <li>Our authorized resellers or distributors, for example, if you purchase access to the Services through one of these partners. The personal data we may receive includes business contact information, including mailing addresses, job titles, email addresses, and phone numbers. </li>
                                            <li>Other third parties, such as email campaigns, marketing partners, publicly-available sources and data providers. The personal data we may receive includes company information, location information, demographic information, and business contact information, including mailing addresses, job titles, email addresses, and phone numbers. We may use this information to enhance the information that we already maintain about you and to improve the accuracy of our records, in addition to other purposes described in this Privacy Policy.</li>

                                        </ul>
                                    </li>
                                    <li> <span className='fw-bold'>Information Collected Automatically</span>
                                        <p>Like many other commercial websites, we use certain technologies, such as tools for collecting usage data, cookies, web beacons, pixels, and similar technologies, to automatically collect information that may contain personal data as you navigate our websites or use our Services or interact with communications we send to you, subject to your consent.</p>
                                        <ul>
                                            <li><span className='fw-bold'>Device and Usage Data.</span>
                                                <p>When users come to our websites, we may track, collect, and aggregate information indicating, among other things, which pages of our websites were visited, the order in which they were visited, when they were visited, and which hyperlinks were clicked. We also collect information from the URLs from which you linked to our websites. Collecting such information may involve logging the IP address, operating system and browser software used by each user of the websites. We may be able to determine from an IP address a user’s Internet Service Provider and the geographic location of his or her point of connectivity.</p>
                                            </li>
                                            <li><span className='fw-bold'>Third-Party Widgets.</span>
                                                <p>Some of our Services contain widgets and social media features, such as the Facebook or LinkedIn button. You are the only person who decides if you would like to press this button and share your personal data with the respective third-party operators of widgets or social media. These widgets and features collect your IP address, the information about the page you are visiting during your use of the Services and may set a cookie to enable the feature to function properly. Widgets and social media features are either hosted by a third party or hosted directly within our Services. Your interactions with these features are governed by the privacy policy of the company providing it and we recommend that you read them prior to sharing your data with such third parties.</p>
                                                <h5 className='text-decoration-underline'>Mailbox integration</h5>
                                                <p>Mailbox integration means an integration of Alrowadit tools with Gmail and/or Microsoft (Outlook, Exchange Online, Office365) accounts (jointly and individually referred to as “Mailbox account”) via API. Some of our tools may ask your permission to integrate your Mailbox account with.</p>
                                                <p>In order to enhance your removal requests or outreach emails experience for your productivity and monitoring purposes you can grant us access to your Mailbox account via API only if you voluntarily decide to give us the permission to integrate our tools with your mail account and to choose which email account you would like to connect with our tools.</p>
                                                <p>With this integration:</p>
                                                <ul>
                                                    <li>you will be able to compose, send, read and process outreach email via a tool’s interface;</li>
                                                    <li>you will be able to send removal requests regarding backlink(s) which looks unnatural or harmful via a tool’s interface;</li>
                                                    <li>we will provide you with the information related to your emails sent via tool’s interface. We will show you if your emails were received, opened, if there are any replies to your emails. We will demonstrate your replies to your email via our tool interface.</li>
                                                </ul>
                                                <p>After the integration we will be able to store in our database in the encrypted way the following information related only to outreach emails sent by you via tool interface:</p>
                                                <ul>
                                                <li>Initial email’s subject and body text;</li>
                                                    <li>Replies email’s subject and body text;</li>
                                                    <li>API token;</li>
                                                    <li>Thread and message ids;</li>
                                                    <li>Recipient(s) and sender of emails;</li>
                                                    <li>Metadata: time/day of email sending, delivering, opening, replying, email status.</li>
                                                </ul>
                                                <p>Notwithstanding anything herein to the contrary, we will use the data received via Mailbox integration only to provide you with the features mentioned above in order to enhance your email experience for productivity purposes and for monitoring purposes. We may also transfer data received via Mailbox integration as necessary to comply with applicable law or as a part of a merger, acquisition, or sale of assets with notice to users. All other transfers or sales of the user data received via Mailbox integration are prohibited.</p>
                                                <p>We will not use the data received via Mailbox integration for any other purposes except providing you with services inside of our tools, specifically we will not use the data received via Mailbox integration for any advertising purposes, including retargeting, personalized or internet-based advertising.</p>
                                                <p>All the data received via Mailbox integration will be processed only at the software level.</p>
                                                <p> We will allow a person to read the data received via Mailbox integration only if:</p>
                                                <ul> 
                                                    <li>You first give us affirmative agreement for specific messages;</li>
                                                    <li>It is necessary for security purposes (such as investigating a bug or abuse);</li>
                                                    <li>It is necessary to comply with applicable law; or</li>
                                                    <li>Our use is limited to internal operations and the data received via Mailbox integration (including derivations) have been aggregated and truly anonymized.</li>
                                                </ul>

                                                <p>You can revoke your permission and access to your Mailbox account at any time by clicking the “bin” icon next to the mailbox mention inside the tool. You can delete all your previous emails available due to the integration by deleting the project in the tool during the revocation process, or sending us the relevant request. As soon as you revoke the access, we will remove your Mailbox token which allowed us to carry out the functions mentioned above and stop monitoring your emails immediately.</p>
                                                <p>For the purposes of this clause the data received via Mailbox integration means the raw data, aggregated data, anonymized data or derived data.</p>
                                                <p>In a case of any conflict between the terms of this clause and terms of the Privacy Policy, the provisions of this clause regarding the data received via Mailbox integration shall prevail.</p>
                                            
                                            </li>
                                            <li><span className='fw-bold'>Cookies and Similar Technologies.</span>
                                                <ul>
                                                    <li>
                                                        <span className='fw-bold'>Google Analytics.</span>
                                                        The Services use Google Analytics, a web analytics service of Google Ireland Limited (Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland). The use includes the &quot;Universal Analytics&quot; operating mode. This facilitates the assignment of data, sessions and interactions across several devices to a pseudonymous user ID and thus the analysis of a user&apos;s activities across devices.
                                                    </li>
                                                    <li>
                                                        <span className='fw-bold'>API YouTube.</span>
                                                        Alrowadit uses YouTube API Services. If you are using our Services, by agreeing to our Privacy Policy you hereby also certify that you have read and agree to YouTube’s General Terms of Service In addition to normal procedure for deleting stored data, you can revoke access to your data via the Google security settings page at  </li>
                                                    <li>
                                                        <span className='fw-bold'>Google Maps API.</span>
                                                        Alrowadit uses Google Maps API Services. If you are using our Services, by agreeing to our Privacy Policy you hereby also certify that you have read and agree to Google Maps/Google Earth Additional Terms of Service  </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                </ol>

                                <h5>International Transfers of Personal Data</h5>
                                <p>Alrowadit Inc. is based in the United States and other members of our group are based in countries outside the EEA or the UK (please read the Affiliates section above for more information). If you are accessing our websites and the Services from the EEA, the UK or other regions with laws governing data collection and use, please note that in connection with our business and for administrative, management and legal purposes, we may transfer your personal data from the country where you reside to Alrowadit Inc. in the United States and to other members of our group in the jurisdictions in which our affiliates are established and to our service providers in the United States. These countries may have data protection laws less stringent than or otherwise different from the laws in effect in the country in which you are located. Where we transfer your personal data as described above, we will take steps to ensure that your personal data receives adequate security protection where it is processed and your rights continue to be protected pursuant to the applicable data protection law, including through the use of Standard Contractual Clauses approved by the European Commission. In some cases, transfers of your personal data to us is necessary to perform the agreement we have entered into, or are about to enter into, with you. If you would like to receive more information on the safeguards that we implement as described above, please contact us as indicated below.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Privacy;