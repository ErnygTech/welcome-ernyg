import Footer from "@/components/footer";
import LegalNavbar from "@/components/legal-navbar";
import React from "react";

export default function TermsPage() {
  return (
    <>
      <LegalNavbar />
      <div className="min-h-screen bg-black text-white">
        <div className="about-section bg-black text-white flex flex-col gap-6 justify-center items-center py-10 sm:py-20 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center font-mont">
            Terms and Conditions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center font-mont">
            Updated on{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="prose prose-invert prose-lg w-full font-mont">
            <section className="mb-8">
              <p className="mb-4">
                Welcome to Ernyg. These terms and conditions outline the rules
                and regulations for the use of Ernyg&apos;s website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Acceptance of Terms
              </h2>
              <p>
                By accessing this website, we assume you accept these terms and
                conditions. If you do not agree to these terms, feel free to
                stay away.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Use of the Website
              </h2>
              <h3 className="text-xl font-medium mb-3 font-mont">License</h3>
              <p className="mb-4">
                Unless otherwise stated, Ernyg and/or its licensors own the
                intellectual property rights for all material on Ernyg. All
                intellectual property rights are reserved.
              </p>
              <p className="mb-4">
                You may access this from Ernyg for your own personal use
                subjected to restrictions set in these terms and conditions.
              </p>
              <p className="mb-4">
                Ernyg allows you to access and use the Website for referrals,
                informational and non-commercial purposes.
              </p>
              <p className="font-medium mb-2">You must not:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Copy or republish material from Ernyg</li>
                <li>Sell, rent, or sub-license material from Ernyg</li>
                <li>Reproduce, duplicate or copy material from Ernyg</li>
                <li>Redistribute content from Ernyg</li>
              </ul>
              <p>This Agreement shall begin on the date hereof.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Prohibited Activities
              </h2>
              <p>You agree not to engage in any of the following activities:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Attempting to gain unauthorised access to the Website or its
                  servers
                </li>
                <li>Using the Website for any illegal or unethical purposes</li>
                <li>Transmitting harmful code or malware</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Copyright and Trademarks
              </h2>
              <p className="mb-4">
                <strong>Copyright:</strong> All content on the Website,
                including text, graphics, logos, and software, is the property
                of Ernyg and is protected by copyright laws.
              </p>
              <p className="mb-4">
                <strong>Trademarks:</strong> Any trademarks or logos used on the
                Website are the property of Ernyg or their respective
                clients/owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Privacy Policy
              </h2>
              <p className="mb-4">
                Your use of the Website is also governed by our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Links to Third-Party Websites
              </h2>
              <p className="mb-4">
                The Website may contain links to third-party websites of clients
                or other service providers. Ernyg is not responsible for the
                content or practices of these websites. You are responsible for
                any incurring risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                The Website is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, including, but
                not limited to, the implied warranties of merchantability,
                fitness for a particular purpose, or non-infringement. Ernyg
                does not guarantee the accuracy, completeness, or reliability of
                any information on the Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                In no event shall Ernyg be liable for any direct, indirect,
                special, incidental, or consequential damages arising out of or
                in connection with your use or inability to use the Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Changes to Terms and Conditions
              </h2>
              <p className="mb-4">
                Ernyg reserves the right to modify these Terms and Conditions at
                any time. It is your responsibility to check for updates
                periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at:
              </p>
              <ul className="list-none pl-6">
                <li>Email: contact@ernyg.com</li>
                <li>Phone: +91 6305159274</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">Cookies</h2>
              <p className="mb-4">
                The website uses cookies to help personalize your online
                experience. By accessing Ernyg, you will be asked to provide
                your consent for the use of cookies. You can choose to accept
                all cookies, reject non-essential cookies, or manage your
                preferences.
              </p>
              <p className="mb-4">
                A cookie is a text file that is placed on your hard disk by a
                web page server. Cookies cannot be used to run programs or
                deliver viruses to your computer. Cookies are uniquely assigned
                to you and can only be read by a web server in the domain that
                issued the cookie to you.
              </p>
              <p className="mb-4">We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Necessary Cookies:</strong> These cookies are
                  essential for the website to function properly. They enable
                  basic functions like page navigation and access to secure
                  areas of the website. The website cannot function properly
                  without these cookies.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us
                  understand how visitors interact with our website by
                  collecting and reporting information anonymously. This helps
                  us improve our website&apos;s structure and content.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies are used to
                  track visitors across websites. They are used to display ads
                  that are relevant and engaging for individual users.
                </li>
              </ul>
              <p className="mb-4">
                You have the ability to accept or decline optional cookies.
                There are some required cookies that are necessary for the
                operation of our website. These cookies do not require your
                consent as they always work. Please keep in mind that by
                accepting required cookies, you also accept third-party cookies,
                which might be used via third-party provided services if you use
                such services on our website, for example, a video display
                window provided by third parties and integrated into our
                website.
              </p>
              <p className="mb-4">
                You can modify your cookie preferences at any time by clicking
                on the &ldquo;Cookie Settings&rdquo; button in the cookie
                banner. You can also delete cookies that have already been set
                in your browser settings.
              </p>
              <p className="mb-4">
                Please note that if you disable cookies, some features of this
                website may not function properly. For more information about
                how we use cookies and your choices regarding cookies, please
                visit our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Hyperlinking to our Content
              </h2>
              <p className="mb-4">
                The following organizations may link to our Website without
                prior written approval:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>
                  Online directory distributors may link to our Website in the
                  same manner as they hyperlink to the Websites of other listed
                  businesses
                </li>
                <li>
                  System-wide Accredited Businesses except soliciting non-profit
                  organizations, charity shopping malls, and charity fundraising
                  groups which may not hyperlink to our Web site
                </li>
              </ul>

              <p className="mb-4">
                These organizations may link to our home page, to publications,
                or to other Website information so long as the link:
              </p>
              <p className="mb-4">
                (a) is not in any way deceptive;
                <br />
                (b) does not falsely imply sponsorship, endorsement, or approval
                of the linking party and its products and/or services;
                <br />
                (c) fits within the context of the linking party&apos;s site.
              </p>

              <p className="mb-4">
                We may consider and approve other link requests from the
                following types of organizations:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Commonly-known consumer and/or business information sources
                </li>
                <li>Dot.com community sites</li>
                <li>Associations or other groups representing charities</li>
                <li>Online directory distributors</li>
                <li>Internet portals</li>
                <li>Accounting, law, and consulting firms</li>
                <li>Educational institutions and trade associations</li>
              </ul>

              <p className="mb-4">
                We will approve link requests from these organizations if we
                decide that:
              </p>
              <p className="mb-4">
                (a) the link would not make us look unfavorably to ourselves or
                to our accredited businesses;
                <br />
                (b) the organization does not have any negative records with us;
                <br />
                (c) the benefit to us from the visibility of the hyperlink
                compensates the absence of Ernyg; and
                <br />
                (d) the link is in the context of general resource information.
              </p>

              <p className="mb-4">
                These organizations may link to our home page so long as the
                link:
              </p>
              <p className="mb-4">
                (a) is not in any way deceptive;
                <br />
                (b) does not falsely imply sponsorship, endorsement, or approval
                of the linking party and its products or services;
                <br />
                (c) fits within the context of the linking party&apos;s site.
              </p>

              <p className="mb-4">
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to Ernyg. Please include your name, your
                organization name, contact information as well as the URL of
                your site, a list of any URLs from which you intend to link to
                our Website, and a list of the URLs on our site to which you
                would like to link. Wait 1-2 weeks for a response.
              </p>

              <p className="mb-4">
                Approved organizations may hyperlink to our Website as follows:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>By use of our corporate name; or</li>
                <li>
                  By use of the uniform resource locator being linked to; or
                </li>
                <li>
                  Using any other description of our Website being linked to
                  that makes sense within the context and format of content on
                  the linking party&apos;s site.
                </li>
              </ul>

              <p className="mb-4">
                No use of Ernyg&apos;s logo or other artwork will be allowed for
                linking absent a trademark license agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Content Liability
              </h2>
              <p className="mb-4">
                We shall not be held responsible for any content that appears on
                your Website. You agree to protect and defend us against all
                claims that are raised on your Website. No link(s) should appear
                on any Website that may be interpreted as libelous, obscene, or
                criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Reservation of Rights
              </h2>
              <p className="mb-4">
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amend these terms and conditions and its linking
                policy at any time. By continuously linking to our Website, you
                agree to be bound to and follow these linking terms and
                conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Removal of links from our website
              </h2>
              <p className="mb-4">
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us at any moment. We
                will consider requests to remove links, but we are not obligated
                to or so or to respond to you directly.
              </p>
              <p className="mb-4">
                We do not ensure that the information on this website is
                correct. We do not warrant its completeness or accuracy, nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-mont">
                Disclaimer
              </h2>
              <p className="mb-4">
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties, and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Limit or exclude our or your liability for death or personal
                  injury
                </li>
                <li>
                  Limit or exclude our or your liability for fraud or fraudulent
                  misrepresentation
                </li>
                <li>
                  Limit any of our or your liabilities in any way that is not
                  permitted under applicable law
                </li>
                <li>
                  Exclude any of our or your liabilities that may not be
                  excluded under applicable law
                </li>
              </ul>

              <p className="mb-4">
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer:
              </p>
              <p className="mb-4">
                (a) are subject to the preceding paragraph; and
                <br />
                (b) govern all liabilities arising under the disclaimer,
                including liabilities arising in contract, in tort, and for
                breach of statutory duty.
              </p>

              <p className="mb-4">
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
