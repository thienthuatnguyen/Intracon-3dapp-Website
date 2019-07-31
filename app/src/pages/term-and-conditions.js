/* eslint-disable max-len */
/* eslint-disable font-family-no-missing-generic-family-keyword */
import styled from 'styled-components'
import SideMenu from '../components/Layout/SideMenu'
import BackButton from '../components/Layout/BackButton'
import withUserAuth from '../hocs/withAuth'
import BackGroundContent from '../components/UI/BackGroundContent'

const TermAndConditionsPage = () =>
  (
    <React.Fragment>
      <BackButton type='backHome' />
      <SideMenu staticValue='term' />
      <Wrapper>
        <div className='content'>
          <p>
            You may be able to link to third party websites and see third party ads (collectively, Third Party Sites) from the
            Software or otherwise while using the Service. Links provided via the Software or the Service to third-party
            websites are provided as a convenience to you. In some cases, if you use these links, you may be taken out of the
            Software to a new browser window. Third Party Sites are not controlled by us, we are not obligated to review such
            Third Party Sites, and we are not responsible for the materials on or the availability, services or products of any
            such Third Party Sites, or any additional links on those sites. Thus, by linking to such Third Party Sites, HP does
            not endorse or make any representations about such third-party websites, any information, software, products,
            services, or materials found there or any results that may be obtained from using them.
          </p>

          <p>
            If you decide to access any of the third-party websites linked to from the Software or the Service, you do this
            entirely at your own risk and, when applicable, will be subject to those third-party websites’ privacy policies and
            other terms of service. The HP Online Privacy Statement is not in effect at Third Party Sites and we are not
            responsible for any use of your information by Third Party Sites. We recommend that you read all applicable policies
            of such Third Party Sites before submitting any personally identifying information. It is your responsibility to
            comply with the appropriate terms of service of the Third Party Sites as well as with any other applicable laws
            related to the use of such Third Party Sites. In no event will we be liable, directly or indirectly, to anyone for
            any loss or damage arising from or occasioned by the creation or use of Third Party Sites or the materials accessed
            through Third Party Sites. We reserve the right to add or remove, without notice, any Third Party Sites.
          </p>

          <p className='title'>
            GENERAL PROHIBITED ACTS:
          </p>
          <p>
            You may not abuse the Service or this Software. Examples of abusive actions include but are not limited to the following:
          </p>
          <ul>
            <li>Using the Service to act as or replicate a web host;</li>
            <li>
              Using information collected from any Service subscriber or any other area of the Software, Site or Service for any purpose;
            </li>
            <li>
              Forging any TCP-IP packet header or any part of the header information in an e-mail, online community or online
              forum, or a news group posting, or otherwise putting information in the header designed to mislead recipients as
              to the origin of the message;
              &nbsp;
            </li>
            <li>
              Engaging in any of the foregoing activities by using the services of another provider, by channeling such
              activities through the Software or Service or a re-mailer, or through any feature of the Software, Site or
              Service, or using the Site or Service as a mail drop for responses, or otherwise using the services of another
              provider for the purpose of facilitating the foregoing activities; and
              &nbsp;
            </li>
            <li>
              Using any robot, spider, manual or automated process, script or service to access, monitor, or copy subscriber content or information.
              &nbsp;
            </li>
          </ul>
          <p className='title'>
            OTHERS&#x27; CONTENT:
          </p>
          <p>
            By using the Software and the Service, you may be exposed to words, pictures, videos and other content that you
            consider offensive. You take sole responsibility for such exposure, and HP is not liable for such exposure.
          </p>
          <p className='title'>
            OTHER AGREEMENTS:
          </p>
          <p>
            HP may provide products (such as hardware or software) or services under the terms of a separate agreement between
            you and HP (each, an &#x22;Other Agreement&#x22;). HP&#x27;s obligations with respect to any product or service that it makes
            available to you under any Other Agreement shall be governed solely by the Other Agreement under which such product
            or service is provided and these TOS shall not be construed to alter the terms of such Other Agreements. In
            addition, HP may designate a third party to provide products or services in connection with the Service or the
            Software, which may be subject to the terms of separate agreements between you and such third parties.
          </p>
          <p>
            MODIFICATIONS, SUSPENSION OR DISCONTINUATION OF THE SERVICE:
            &nbsp;
            <br />
            We reserve the right at any time to modify,
            suspend, or discontinue the Service, or any part, version or feature thereof, in our sole discretion without prior
            notice to you. We will use reasonable efforts to notify you of any such material modifications to or suspensions or
            discontinuations of the Service by posting a notice on the Site or sending a notice to your via the Software. We
            will not be liable to you or any third party for any modification, suspension or discontinuation of the Service, or
            for any failure to notify you of same. If you have a paid subscription for the Service and we modify, suspend or
            discontinue the Service due to no action on your part, when applicable, we may provide a pro rata refund of advance
            payments made.
          </p>
          <p className='title'>PROCEDURE FOR MAKING CLAIMS OF INFRINGEMENT:</p>
          <p>
            HP respects the intellectual property rights of others. Pursuant to Title 17 of the United States Code, Section 512,
            HP has implemented procedures for receiving written notification of claimed copyright infringement and for
            processing such claims in accordance with such law. If you believe your copyright or other intellectual property
            right is being infringed by a user of the Software or the Service, please provide written notice to the following HP
            agent for notice of claims of infringement:
          </p>

          <p>
            Attn: DMCA Copyright Agent
            <br />
            Hewlett-Packard Company
            <br />
            3000 Hanover Street, MS 1050
            <br />
            Palo Alto, CA 94304-1112
            <br />
            Tel: 650-857-2709
            <br />
            Fax: 650-857-5409
            <br />
            Email:
            &nbsp;
            <a href='mailto:dmca_copyright_notice@hp.com'>dmca_copyright_notice@hp.com</a>
          </p>

          <p>
            Your written notice must: (a) contain your physical or electronic signature; (b) identify the copyrighted work or
            other intellectual property alleged to have been infringed; (c) identify the allegedly infringing material in a
            sufficiently precise manner to allow HP to locate that material; (d) contain adequate information by which HP can
            contact you (including postal address, telephone number, and e-mail address); (e) contain a statement that you have
            a good faith belief that use of the copyrighted material or other intellectual property is not authorized by the
            owner, the owner&#x27;s agent or the law; (f) contain a statement that the information in the written notice is accurate;
            and (g) contain a statement, under penalty of perjury, that you are authorized to act on behalf of the copyright or
            other intellectual property right owner. Please do not send notices or inquiries unrelated to alleged copyright or
            other intellectual property right infringement to HP’s above-referenced designated agent, as they will be deleted
            upon receipt.
          </p>
          <p className='title'>INVESTIGATIONS:</p>
          <p>
            We have no obligation to monitor your use of the Service. You agree, however, that we retain the right to monitor
            your use of the Service and to disclose any information (including but not limited to content) as necessary or
            appropriate to satisfy any law, regulation or governmental request, to operate the Service properly, to ensure your
            compliance with these TOS, and to protect us, our affiliates, other users and the general public.
          </p>
          <p>
            We reserve the right, and you hereby authorize us, to cooperate with law enforcement authorities, including but not
            limited to complying with warrants, court orders and subpoenas. We also reserve the right, and you hereby authorize
            us, to comply with any civil court orders and subpoenas. In addition, if we decide to investigate or resolve
            possible misuse by you involving the Service, the Software or the Site, you hereby authorize us to disclose to law
            enforcement or other government officials any information about you in our possession in connection with your use of
            the Service, the Software and the Site.
          </p>
          <p>
            We may take the actions described in this Section without giving notice to you.
          </p>
          <p>
            YOU AGREE TO WAIVE ANY CLAIMS YOU MAY HAVE AGAINST US AND AGAINST OUR SUBSIDIARIES, AFFILATES, EMPLOYEES, OFFICERS,
            DIRECTORS, AGENTS, LICENSORS, PARTNERS AND SUPPLIERS (COLLECTIVELY, ͞HP AFFILIATES͟) RELATING TO ANY ACTION TAKEN BY
            US OR ANY HP AFFILIATES AS PART OF OUR OR THEIR INVESTIGATION OF A SUSPECTED VIOLATION OF THESE TOS, ANY ACTION
            TAKEN BY US OR ANY HP AFFILIATES AS A RESULT OF OUR OR THEIR CONCLUSION THAT A VIOLATION OF THESE TOS HAS OCCURRED,
            OR ANY ACTION TAKEN BY US OR ANY HP AFFILIATES IN CONNECTION WITH ANY CIRCUMSTANCES REFERENCED IN OR OTHERWISE
            RELATED TO THIS SECTION. WITHOUT LIMITING THE FOREGOING, YOU AGREE THAT YOU MAY NOT AND WILL NOT SUE US OR ANY HP
            AFFILIATES OR RECOVER ANY DAMAGES WHATSOEVER FROM US OR ANY HP AFFILIATES AS A RESULT OF (i) REMOVAL OF YOUR CONTENT
            FROM THE SERVICE, (ii) SUSPENSION OR TERMINATION OF YOUR USE OF THE SERVICE, (iii) ANY OTHER ACTION TAKEN DURING THE
            INVESTIGATION OF A SUSPECTED VIOLATION, OR AS A RESULT OF OUR OR ANY HP AFFILIATE’S CONCLUSION THAT A VIOLATION OF
            THESE TOS HAS OCCURRED, OR (iv) PROVISION OF YOUR CONTENT OR OTHER INFORMATION TO THIRD PARTIES PURSUANT TO THIS
            SECTION. YOU HEREBY RELEASE US AND ALL HP AFFILIATES FROM ANY LIABILITY WHATSOEVER WITH RESPECT TO THE FOREGOING.
            INDEMNITY:
          </p>
          <p>
            You agree to defend, indemnify and hold harmless us and our HP Affiliates from any and all claims, losses,
            liabilities, demands, damages, costs and expenses, including reasonable attorneys’ fees, in any way arising from or
            related to (i) a violation of these TOS, (ii) any activity related to the use of the Service, Software or the Site
            by you or by any other person accessing the Service, Software or the Site using your account, and (iii) any content
            submitted by you or by any other person accessing the Service, Software or the Site. We and our HP Affiliates
            reserve the right to assume the exclusive defense and control of any matter at your expense and doing so will not
            excuse your indemnity obligations.
          </p>
          <p className='title'>DISCLAIMER OF WARRANTIES:</p>
          <p>
            You understand that your use of the Software, Service or Site may involve (i) transmitting content over various
            networks, and (ii) changes to the content to conform and adapt to technical requirements of connecting networks or
            devices.
          </p>
          <p>
            YOU EXPRESSLY AGREE TO ASSUME FULL RESPONSIBILITY FOR, AND ALL RISKS RELATED TO, YOUR USE OF THIS SOFTWARE, THE
            SERVICE AND SITE. WE MAKE NO WARRANTIES, REPRESENTATIONS OR ENDORSEMENTS WHATSOEVER WITH RESPECT TO SOFTWARE, THE
            SERVICE OR SITE, AND WE AND OUR HP AFFILIATES EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS, IMPLIED,
            STATUTORY OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, AND LACK OF VIRUSES, WITH RESPECT TO THIS SOFTWARE, THE SERVICE, THE
            SITE AND ANY INFORMATION, MATERIALS OR OTHER CONTENT ON THE SOFTWARE, THE SERVICE OR THE SITE.
          </p>
          <p>
            WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT THAT THIS SOFTWARE, THE SERVICE, THE SITE, OR ANY OF THEIR
            RESPECTIVE FUNCTIONS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT ANY PART OF THIS
            SOFTWARE, THE SERVICE, THE SITE OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS. WE LIKEWISE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF, OR THE RESULTS OF THE USE
            OF, THIS SOFTWARE, THE SERVICE, THE SITE OR INFORMATION, MATERIALS OR CONTENT ON THE SOFTWARE, THE SERVICE OR THE
            SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, TIMELINESS, RELIABILITY OR OTHERWISE. TO THE MAXIMUM EXTENT PERMITTED
            BY APPLICABLE LAW, THE SITE, THE SERVICE, THE SOFTWARE AND THE INFORMATION, MATERIALS AND CONTENT PROVIDED ON THE
            SITE, THE SERVICE AND THE SOFTWARE ARE PROVIDED ON AN AS IS AND AS AVAILABLE BASIS, WITH ALL FAULTS.
          </p>

          <p>
            Some jurisdictions do not allow exclusion of implied warranties or limitations on the duration of implied
            warranties, so the above disclaimers may not apply to you in their entireties, but will apply to the maximum extent
            permitted by applicable law.
          </p>
          <p className='title'>LIMITATION OF LIABILITY:</p>
          <p>
            IF YOU ARE DISSATISFIED WITH THE SERVICE, THE SOFTWARE OR THE SITE, OR ANY MATERIALS OR OTHER CONTENT MADE AVAILABLE
            VIA THE SOFTWARE, THE SERVICEOR THE SITE, OR WITH THESE TOS, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING
            THE SOFTWARE, THE SERVICE AND THE SITE.
          </p>
          <p>
            YOU AGREE THAT UNDER NO CIRCUMSTANCES WILL WE OR OUR HP AFFILIATES BE LIABLE FOR ANY DIRECT, SPECIAL, INCIDENTAL,
            INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS OR DATA OR
            ANY OTHER CONTENT, FOR BUSINESS INTERRUPTION, FOR PERSONAL INJURY, OR FOR LOSS OF PRIVACY) ARISING OUT OF OR IN ANY
            WAY RELATED TO THE USE OF OR INABILITY TO USE THIS SOFTWARE, THE SERVICE OR THE SITE, OR ANY MATERIALS OR OTHER
            CONTENT MADE AVAILABLE VIA THIS SOFTWARE, THE SERVICE OR THE SITE, OR OTHERWISE IN CONNECTION WITH THIS SOFTWARE,
            THE SERVICE OR THE SITE, OR ANY PROVISION OF THESE TOS, WHETHER BASED ON WARRANTY, CONTRACT, TORT, STATUTE OR ANY
            OTHER LEGAL THEORY, EVEN IF WE OR OUR HP AFFILIATES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND EVEN IF
            THE REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
          </p>

          <p>
            YOU FURTHER AGREE THAT IN NO EVENT WILL OUR OR OUR HP AFFILIATES’AGGREGATE MAXIMUM LIABILITY ARISING OUT OF ANY KIND
            OF CLAIM (WHETHER UNDER WARRANTY, CONTRACT, TORT, STATUTE OR ANY OTHER LEGAL THEORY) INANY WAY CONNECTED WITH THE
            SOFTWARE, THE SERVICE OR THE SITE, OR ANY RELATED MATERIALS OR OTHER CONTENT, EXCEED THE GREATER OF THE AMOUNT (IF
            ANY) ACTUALLY PAID BY YOU TO US SEPARATELY FOR THE SERVICE FOR THE ONE MONTH PERIOD IMMEDIATELY PRIOR TO THE DATE ON
            WHICH YOUR CLAIM AROSE,OR U.S. $5.00.
          </p>

          <p>
            Some jurisdictions do not allow the exclusion or limitation of particular types of damages, so the above limitations
            or exclusions may not apply to you in their entireties, but will apply to the maximum extent permitted by applicable
            law.
          </p>

          <p className='title'>COMPLIANCE WITH EXPORT LAWS:</p>

          <p>
            By using the Service, the Software or the Site you are responsible for compliance with U.S. and other applicable
            countries’ export control and other applicable laws and regulations (Export Laws). You will comply with all Export
            Laws to ensure that the Service, the Software, materials and other content, including but not limited to technical
            data, are not (1) exported or re-exported, directly or indirectly, in violation of Export Laws, or (2) used for any
            purpose prohibited by Export Laws, including without limitation nuclear, chemical, or biological weapons
            proliferation. Without limiting the foregoing, you agree that the materials and content may not, in violation of any
            Export
          </p>

          <p>
            Laws or other applicable laws, be exported or re-exported (a) into any U.S. embargoed countries, or (b) to anyone on
            the U.S. Treasury Department’s list of Specially Designated Nationals or the U.S. Commerce Department’s Table of
            Deny Orders. You represent and warrant that you are not located in, under the control of, or a national or resident
            of any such country or on any such list.
          </p>

          <p>
            If you choose to use the Software, the Service or the Site from outside the United States or Canada, or while you
            are a resident of the U.S. or Canada choose to access the Software, Service or the Site from outside the United
            States, you do so on your own initiative and are responsible for compliance with applicable laws and regulations.
          </p>

          <p className='title'>CAPACITY AND AUTHORITY TO CONTRACT:</p>

          <p>
            By using the Service, the Software and/or the Site, you represent that you are old enough to legally enter into a
            contract in your jurisdiction of residence and, if applicable, you are duly authorized by your employer to enter
            into this contract on behalf of your employer.
          </p>

          <p className='title'>CHOICE OF LAW AND VENUE:</p>
          <p>
            These TOS and all issues collateral thereto are governed by, and will be construed in accordance with, the laws of
            the State of California, U.S.A., without regard to its choice of law rules, and regardless of your actual place of
            residence. Without limiting the generality of the foregoing, you irrevocably and unconditionally (a) agree that any
            suit, action or other legal proceeding arising out of or related to these TOS, the Service, the Software, the Site
            or any issues collateral thereto must be brought in the state or federal courts of the State of California, (b)
            consent to the exclusive jurisdiction of each such court in any suit, action or proceeding, (c) waive any objection
            which you may have to the venue of any such suit, action or proceeding in any of such courts, and (d) waive any
            right that you may have to assert the defense of forum non conveniens in any such suit, action or proceeding.
          </p>

          <p>
            Except where expressly prohibited by law, you agree that regardless of any statute or law to the contrary, any claim
            or cause of action arising out of or related to use of the Service, the Software, the Site, or related to these TOS,
            must be filed within one year after such claim or cause of action arose or be forever barred.
          </p>

          <p className='title'>ENTIRE AGREEMENT:</p>
          <p>
            These TOS are the entire agreement between you and us relating to the Software, the Service and/or the Site and any
            other subject matter covered by these TOS, and they supersede all prior or contemporaneous oral or written
            communications, proposals and representations with respect to the Software, Service, the Site and any other subject
            matter covered by these TOS. Our failure to exercise or enforce any right under or provision of these TOS will not
            constitute a waiver of such right or provision. If any provision of these TOS is found by a court of competent
            jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the
            parties’ intentions as reflected in the provision, and the other provisions of the TOS will remain in full force and
            effect. You may not assign these TOS or any of your rights or obligations under the TOS. These TOS may be assigned
            by us and will inure to the benefit of our successors, assigns, and licensees. The section titles in these TOS are
            for convenience only and have no legal or contractual effect. All HP Affiliates are third party beneficiaries with
            respect to the provisions in these TOS that reference them. All provisions in these TOS that by their nature would
            survive termination of your right to use the Software or the Service (including but not limited to those related to
            limits on our and our HP Affiliates’ liability, your liability to us and our HP Affiliates, investigations,
            applicable law and venue, and our right to remove and discard your content from the Service) will survive such
            termination. These TOS will be interpreted without application of any strict construction in favor of you or against
            HP.
          </p>
          <p>
            &#xA9;2018 HP Inc, L.P.
            <br />
            &#xA9; HP Inc 2018
          </p>
        </div>
      </Wrapper>
      <BackGroundContent id='bgMainPage' />
    </React.Fragment>
  )
const Wrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  overflow-y: scroll;
  background-color: ${props => props.theme.colorTableBkg};
  flex-direction: column;

  .content {
    flex: 1 1 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    color: #333;
    padding: 30px;

    a {
      color: #333;
    }

    ul {
      li {
        font-size: 14px;
      }
    }

    p {
      line-height: 1.2em;
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      margin-bottom: 10px;
      font-size: 14px;

      &.title {
        font-size: 18px;
        margin-top: 20px;
        font-weight: 300;
      }
    }
  }
`

export default withUserAuth(TermAndConditionsPage)
