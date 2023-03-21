import React, { useMemo } from 'react'
import policies from './constants'

const PrivacyPolicy = ({ messages }: any) => {
  const renderText = useMemo(() => {
    return policies.map(
      (
        policy: {
          title: string
          text: string
        },
        id: number
      ) => {
        return (
          <div key={id}>
            <h1 className="text-[32px] font-bold mt-16">{policy.title}</h1>
            <p className="text-[20px] whitespace-pre-wrap text-start">{policy.text}</p>
          </div>
        )
      }
    )
  }, [])

  return (
    <div className="container max-w-[1000px] lg:py-[150px] py-[75px] lg:px-[100px] mx-auto 2xl:px-32 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4">
      <h1 className="text-[64px] font-bold mb-16">{messages.privacyPolicy.title}</h1>
      <p className="text-[20px]">{`
      Terms and conditions of the platform use

      Preamble 
      
      This "Terms and conditions of the platform use" is a legally binding agreement for the "Company", "Professional" and "User" to the extent stipulated in the same agreement. You as a "Professional" or "User" are obliged to read this text carefully before using the "WOLLY platform". As soon as you start using the "WOLLY platform", you automatically become a party to this agreement and, accordingly, you will be fully bound by the terms of the agreement. 
      
      1. Definition of terms
      
      The terms and definitions used in these "Terms and conditions of the platform use" shall have the meanings set forth below, unless the context of the document clearly indicates otherwise:
      
      1.1. "Company" - LLC WOLLY (identification number 405424580), which is registered and operates on the basis of Georgian legislation, is the copyright owner of www.wolly.ge, as well as the WOLLY application, which connects "Users" and "Professionals" through entrepreneurial activity.
      1.2. "WOLLY platform" - a platform operated by "WOLLY" LLC, which includes without any limitation the website www.wolly.ge, the WOLLY application and/or all other available alternative channels, with the help of which connecting the "Professional" and the "User" to provide the "Service" desired by the "Professional" and to receive the "Service" desired by the "User" are made possible.
      1.3. "Professional" - a natural or legal person (except "WOLLY" LLC) who is registered on the "WOLLY platform" as a service provider, craftsman or cleaner and is ready to provide the services offered by him/her upon receiving the relevant order.
      1.4. "User" - a legal or natural person who registers on the "WOLLY platform" in order to receive the desired service from the "Professional" in accordance with the provisions of this Agreement, orders the desired service from the "Professional" through the "WOLLY platform", pays the cost of the service, makes a change or cancels the order. A "User" is also defined as any person who visits the "WOLLY platform" for any other purpose, regardless of registration on the platform.
      1.5. "Terms and conditions of the platform use" - this legally binding document that regulates the terms and conditions of use of the "WOLLY platform", WOLLY's privacy and security policy and the "Order Cancellation Policy" located on the website - www.wolly.ge, as well as any annex to this Agreement, the text of which is included or may be included in the future as a link in this document.
      1.6. "Service" - the service to be provided by the "Professional" for the benefit of the "User" on the basis of the "Terms and conditions of the platform use" and the relevant "Service Agreement", when the "Professional" makes a public offer through the "WOLLY platform" and which includes the cleaning and/or any other household services ordered by the "User" using the "WOLLY platform".
      1.7. "WOLLY platform service" – intermediary service provided by the "Company" to the "User" and the "Professional", the purpose of which is to facilitate the conclusion of the "Service Agreement" between the "User" and the "Professional".
      1.8. "Service Agreement" – the legal relationship established between the "User" and the "Professional" through the "WOLLY platform", which arises from the moment of placing an order by the "User" on the "WOLLY platform" and its confirmation by the "Professional", and which, between the parties, can be oral or written. In order to avoid any misunderstandings, the provisions governing the relations between "Users" and "Professionals" in the present "Terms and conditions of platform use" unconditionally constitute a constituent part of the "Service Agreement" concluded between the "User" and the "Professional" in oral or written form. The essential terms of the "Service Agreement" that are not covered by these "Terms and conditions of platform use" may be regulated by an oral or written "Service Agreement" between the "User" and the "Professional".
      1.9. "Account" - means the account registered by the "User" or "Professional" on the "WOLLY platform" used to fill personal information, publicly offer "Services" to be provided, manage the "Professional" calendar, submit claims, rate the "Professional" and the platform offered to perform other functions.
      1.10. "Order" - a specific offer made by the "User" through the "WOLLY platform" to receive the "Services" of the "Professional", on which the "Service Agreement" is signed by the "Professional" through the statement of acceptance.
      1.11. "Service fee" - the amount that the "User" pays to the "Professional" in exchange for the service provided by the latter in the form of cash or non-cash payment.
      1.12. "Commission" - the amount of money paid from the "Service fee" in favor of the "Company", the payers of which for the purposes of this Agreement are the "Professional" and the "User".
      
      2. WOLLY platform services
      
      2.1. The provision of "WOLLY platform Services" by the "Company" means the creation and operation of a technological platform for "Users" and "Professionals" that provides "Users" to use the platform to plan and order desired services with independent third parties – "Professionals".  "Professionals" are also enabled by the "WOLLY platform" to receive orders and perform relevant "Services" using it.
      2.2. By agreeing to these "Terms and conditions of the platform use", you as a "User" acknowledge that the "Company" does not provide the "Service" (handyman, cleaner, or other household services), nor does it provide the operation of logistic services related to the "Service" and that all such "Services" are offered and provided by an independent third party "Professional" who is not an employee of the "Company" or any person affiliated with the "Company".
      2.3. The relationship between the "User" and the "Professional" regarding the provision of the "Service" is completely regulated by the respective "Service Agreement" concluded between them as the relevant parties after the "User" places an order using the "WOLLY platform" and the "Professional" confirms it.
      2.4. The "User" and the "Professional" confirm that the "Company" is not a party to such "Service Agreement" and is not subject to obligations and responsibilities arising from the provision of the "Service" or its non-performance, including that the "Company" is not responsible for:
      
      2.4.1. the qualification of "Professional";
      2.4.2. the materials used by the "Professional" in rendering the "Service" and their quality;
      2.4.3. the accuracy of the personal data provided by the "User" and "Professional" to the "Company";
      2.4.4. the timely performance of the "Service Agreement" concluded between the "User" and the "Professional";
      2.4.5. the existence of a permit/license/certificate, if its existence is laid down in the legislation of Georgia for the provision of the relevant "service";
      2.4.6. compensation for damages caused by a "Professional";
      
      2.5. In case of any kind of misunderstanding/complaint between the "User" and the "Professional", the "Company" is fully exempted from any claims that the parties may have against each other. The "Company" is entitled, at its own discretion, to be involved in the resolution of such misunderstanding/claim/dispute.
      
      3. Purpose of using the "WOLLY platform".
      
      3.1. The use of the "WOLLY platform" by "Users" on the one hand, and "Professionals" on the other hand, is intended to create more opportunities for each of them to receive and provide "Services" in the subject of their interest.
      3.2. For a "Professional", the purpose of using the "WOLLY platform" is:
      
      3.2.1. his/her use of the Internet space for the purpose of publicly offering his/her "services";
      3.2.2. simplifying the search for a "User" interested in receiving his/her "Services";
      3.2.3. managing one's own time effectively;
      
      3.3. For the "User", the purpose of using the "WOLLY platform" is:
      
      3.3.1. using a proper and simplified virtual space to find a "Professional" providing the necessary "Service";
      3.3.2. getting more information when selecting "Professional" and "Service";
      3.3.3. calling a "Professional" easily, quickly, at the desired time;
      3.3.4. receiving more information about a suitably qualified "Professional" based on feedback from other "Users".
      
      4. Terms of use of "WOLLY platform".
      
      4.1. In order for the "User" and "Professional" to be able to use the main resources of the "WOLLY platform", they are required to register on the platform and maintain an active personal account. During the registration process, the "User" and "Professional" are obliged to agree to the "Terms and conditions of the platform use" and the Privacy and Security Terms of WOLLY, otherwise they will not be granted the right to use the resources provided by the platform.
      4.2. Registration on the "WOLLY platform" is allowed for individuals (regardless of their citizenship) or legal entities who have reached the age of 18. Registration on the "WOLLY platform" requires that the "User’s" and/or "Professional’s" personal data, including first name, last name, address, phone number, age, e-mail address, as well as bank account details and all other data that the Company deems appropriate for the "Professional" to provide services to the "Customer", are submitted to the “Company” through the platform.
      4.3. A "Professional" registered on the "WOLLY platform" can be a handyman, a cleaner, or any other household service provider who must meet the following conditions:
      
      4.3.1. be a natural person or legal entity who has reached the age of 18;
      4.3.2. in the case of a natural person, not to have been convicted of a serious or particularly serious crime in the past;
      4.3.3. be registered as an individual entrepreneur;
      4.3.4. be registered with the tax authority as a small business;
      
      4.4. During registration, the "Professional" indicates the IBAN account number to which the "Service fee" paid by the "User" is directed, minus the "Company" commission and the transaction fee. The "Professional" is responsible for the correctness of the account number indicated by him/her. Any damage (if any) caused by the incorrect account number is the sole responsibility of the "Professional".
      4.5. When registering on the "WOLLY platform" it is mandatory that the data submitted to the "Company" through the platform is complete, accurate and valid on the date of registration. Failure to comply with such an obligation, including specifying an expired bank account as a payment method, may restrict the "User" or "Professional" from accessing the WOLLY platform and using its resources. Violation of the obligation stipulated in this clause may lead to the unilateral termination of this Agreement by the "Company" and a claim for damages.
      
      5. Rights and obligations
      
      5.1. The "Company" is entitled to request from the "User" or "Professional" at any time confirmation of the correctness of information or presentation of documents or other evidence.
      5.2. After completing the registration, the "Company" is authorized to identify and verify the "User" and/or "Professional" through the e-mail address or phone number specified by him/her. Once the "Company" verifies the "User" or "Professional", they are given full access to the platform and the features it offers.
      5.3. Account identification data is available only to "Users" as well as "Professionals" on their individually created "Accounts", therefore each of them is responsible for the consequences of unauthorized access to their "Account" by third parties. "The Company is not responsible (but at the same time ensures the implementation of all adequate measures to prevent such unauthorized access) for the damage caused to the owner of the "Account" as a result of unauthorized access from third parties.
      5.4. The "User" or "Professional" is obliged to change his/her password and immediately contact the WOLLY Customer Service Center, in the event that the "User" or "Professional" has reasonable suspicion that the login information, password or other security access code(s) to his/her personal account or the facilities have been stolen, lost, misappropriated, used without permission or otherwise misused.
      5.5. "User" and "Professional" are authorized to submit, upload, publish or otherwise make available textual, audio or visual data and information on the "WOLLY platform", which may include comments or feedback regarding the service. Any such information and data is the property of the "Company", therefore the "Company" may use such data for its purposes, including marketing purposes, without additional consent from the "User" or "Professional".
      5.6. Both the "Professional" and the "User" are entitled to terminate their registration on the "WOLLY platform" at any time. The "Company" is obliged to delete all bank account data of the "User" in case of cancellation of registration by the latter.
      
      6. Promo codes, referral codes and other discounts
      
      6.1. The "Company" is authorized to assign promo codes to "Users" during registration on the "WOLLY platform", which can be used when placing an order through the platform, and thus the "User" can receive a discount on the relevant service.
      6.2. By agreeing to the present "Terms and conditions of the platform use", the "Professional" also agrees to grant the "Company" unlimited authority, without prior agreement with the "Professional", to determine the amount of discount offered to "Users" when using such promo codes within the framework of marketing events.
      6.3. When receiving the "Service" with a discount through the promo code, the amount of the discounted amount is always deducted from the "Commission" received by the "Company". Therefore, the "Professional" will receive the "Service" fee in the same amount as if the "User" would have paid without the promo code when ordering.
      6.4. The "Company" is entitled to unilaterally cancel such promo codes without prior notice or justification to the "User" at its sole discretion.
      6.5. When registering on the "WOLLY platform", the "User" is assigned a referral code. A referral code is a unique combination of numbers or letters that allows different customers to participate in the "Professional" discount program.
      6.6. When ordering the "Services" of the "Professional" through the referral code, the respective "User" receives the services of the "Professional" at a discount. At the same time, the "User" whose referral code was sent by another "User" who made an order for the "service" of the "Professional", receives credit on his/her account, which he/she can use when placing an order on the "WOLLY platform".
      6.7. When placing an order using a promo code or referral code, the discounted amount for the "User" will be deducted from the "Commission" received by the "Company". Accordingly, the "Professional" will fully receive the "Service fee" specified by him/her on the "WOLLY platform" (excluding the transaction fee).
      6.8. In order to encourage the "Professional" to receive regular "Orders", the "Professional" will provide his/her "Services" to the customer with a discount, according to the number of "Orders". In case of three or more "Orders" of the "Services" of the same "Professional" by one "User" at one time, the amount of this discount will be not less than 5% and not more than 20%. In such a case, the "Company's" commission will be calculated from the discounted "Service fee".
      
      7. Prohibited actions on the WOLLY platform
      
      7.1. Any content submitted by the "User" and "Professional" on the "WOLLY platform" must not violate the rights of a third party and must not contain hate speech, obscene terminology, incitement to violence, illegal or false information, pornographic images. The "Company" is authorized to monitor and review the compliance of such data and information with these terms and at any time, based on its unilateral will, to delete or otherwise cancel any data that is in conflict with these rules. 7.2. It is strictly prohibited to offer or solicit "services" intended for the purchase or sale of the following products:
      
      7.2.1. narcotics or related paraphernalia;
      7.2.2. firearms or ammunition;
      7.2.3. cable and satellite TV signal suppression devices;
      7.2.4. pornographic material;
      7.2.5. unlicensed lottery and gambling related services;
      7.2.6. multi-level marketing, pyramid-style trading or Ponzi schemes, matrix programs or other get-rich-quick schemes or high-yield investment programs;
      7.2.7. goods or services that infringe the intellectual property rights of third parties, including without limitation the illegal use of electronic downloadable software;
      7.2.8. any other products or goods that the "Company" considers incompatible with the purposes of using the platform;
      
      7.3. In the event that the "User" or "Professional" carries out, or tries to carry out an operation in violation of the prohibitions specified in this article, the "Company" reserves the right to unilaterally:
      
      7.3.1. terminate or suspend the functionality of a "User’s" or "Professional’s" personal "Account"; and/or
      7.3.2. inform the law enforcement authorities about the operation; and/or
      7.3.3. demand compensation from the "User" or "Professional";
      
      7.4. It is forbidden for the "Professional" to transfer his/her obligations to other service providers after receiving the "Order". The "Professional" is obliged to deliver the received "Order" personally.
      7.5. A violation of the obligations defined by the present rules and conditions by the "User" or "Professional" will result in his/her responsibility. The "Company" reserves the right to block the "Account" of the "User" or "Professional" at the first violation. After the expiration of 1 (one) month, the latter may apply to the "Company" with a request to unblock the "Account". In case of repeated violations, the “Company” may block the relevant "Account" for an indefinite period of time, without the possibility of recovery.
      
      8. "Services" to be provided by "Professional" to "Users" through the "WOLLY platform"
      
      8.1. A "Professional" who has appropriate knowledge, qualifications and experience in the field of tidying/cleaning, computer technology or household services and is registered on the platform is entitled to offer and provide "Services" using the "WOLLY platform".
      8.2. Without any limitation, the "Professional" is authorized to independently, without using the "WOLLY platform", search for "Users" and provide for their benefit the same services that it offers to users through the platform. In this case, the present "Terms and conditions of the platform use" do not apply to the services provided without the platform.
      8.3. The "Company" has the right to refuse the registration of the "Professional" by its sole decision, in which case it is not obliged to explain the reasons for the refusal.
      8.4. The "Professional" can define the area where he/she wants to provide a "Service" on his/her personal "Account". The said information will be publicly available and will be used to provide the "User" with information about the relevant "Professionals" through the platform. "Professional" is authorized to periodically add/reduce and/or change such information.
      8.5. A "Professional" while offering a "Service" through the "WOLLY platform" assumes full responsibility that he/she has the appropriate qualifications, knowledge and experience, necessary equipment and inventory in connection with the "Service" provided by him/her and that as a result of the "Service" provided by him/her, he/she is fully responsible for the issues that arise.
      8.6. The offering or rendering of a “Service” by a “Professional” through the “WOLLY platform” shall not be construed as an offering or rendering of a Service by the “Company”. In the relationship with the "customers" the provider of "service" is only the "Professional". The "Company" is free from any liability that may result from the "Service" being provided by the "Professional", including improper service, damage/destruction of the item by the "Professional" in the process of providing the "Service", violation of the "Service Agreement" and warranty conditions, applicable laws and non-compliance with regulations, etc.
      8.7. A "Professional" using the "WOLLY platform" is authorized to offer and provide the following "Services":
      
      8.7.1. cleaning service, which includes:
      8.7.1.1. post-repair arrangement;
      8.7.1.2. general arrangement;
      
      8.7.2. other household services
      
      9. Principles of providing a "Service" by a "Professional"
      
      9.1. Although the "Professional" is a person independent of the "Company" and is not an employee, agent or representative of the "Company", and although the relationship between the "Company" and the "Professional" is not governed by the laws governing labor relations and/or representation, the "Professional" understands that the quality of the "Service" provided by him affects the reputation of the "Company" and the "WOLLY platform". Accordingly, the failure of each individual "Professional" to fulfill their obligations, or dishonest performance, may jeopardize the functioning of the "WOLLY platform" and the attraction of "Users" by other "Professionals".
      9.2. Taking into Account the previous paragraph, "Professionals" by registering on the "WOLLY platform" guarantee that while providing "Services", they will observe the principles of providing "Services" stipulated in this article.
      9.3. "Professionals" in providing "Services":
      
      9.3.1. will be collegial, which excludes any attempt to degrade the work done by other colleagues; 9.3.2. will follow the rules of ethics when dealing with "customers";
      9.3.3. will make all efforts to avoid conflicts;
      9.3.4. will be polite and sociable;
      9.3.5. will be orderly, sincere and approach their work with a sense of responsibility;
      9.3.6. will show up on time to fulfill the "Order";
      
      9.4. When executing an "Order", the "Professional" is prohibited from:
      
      9.4.1. visiting while not sober (being under the influence of alcohol or drugs);
      9.4.2. appearing without appropriate equipment (boots, mask, gloves);
      9.4.3. visiting with high temperature, flu or other virus symptoms;
      9.4.4. changing the "Service fee" without prior notice to the "User" and only in the event that additional works other than those previously agreed upon are to be performed;
      9.4.5. leaving their contact information to the "Users" with whom you have connected through the "WOLLY platform";
      
      9.5. The "Professional" is obliged to carry all the necessary tools and equipment, in good and clean condition, with him/her during the execution of the "Order". The "Professional" is obliged to warn the "User" about all possible complications while performing the work. At the end of the "Service", the "Professional" must ensure the removal of the remaining waste from the work, unless otherwise agreed with the customer.
      9.6. The "Company" is authorized to plan and implement the so-called "Mystery calls" for the purpose of monitoring the fulfillment of the conditions stipulated by this clause and other clauses of the "Terms and conditions of the platform use" by "Professionals". The aforementioned serves the sole purpose of maintaining a high degree of trust of "Users" and "Professionals" in the WOLLY platform and attracting other "Professionals" and "Users" to establish relationships provided by the platform.
      
      10. Choosing the desired service by the "User" and placing the "Order"
      
      10.1. The "WOLLY platform" allows the "User" to go to the main page after authentication, from where he/she can access various information through the navigation buttons.
      10.2. In order to place an “Order”, the "User" selects "category" from the main menu, after which several windows with clarifying questions appear on the screen. After ticking the desired answers, the "WOLLY platform" will select the desired "Service" for the "User".
      10.3. After selecting the "Service", a window with open questions appears on the screen, where the "User" has the opportunity to describe the specific characteristics of the "Service" he/she wants, including uploading the relevant photo material (if necessary).
      10.4. After specifying the "Service", the "User" determines the place and period of providing the "Service".
      10.5. After entering the data by the "User", the list of "Professionals" available in the period and location desired by the "User" will be displayed on the screen. Along with the data of each "Professional" the platform displays the cost of the "Service", the rating of the "Professional" and his/her schedule.
      10.6. After selecting the desired "Professional" and the time of rendering the "Service", the "User" will be redirected to the payment page through which the "User" will pay the "Service fee".
      10.7. The "User" is authorized to enter the promo code on the checkout page. The promo code is valid only for the period specified by the "Company" and it gives the "User" the opportunity to receive the "Service" of the "Professional" at a discount of the amount specified by the promo code.
      10.8. The "Order" will be considered placed only after the payment of the relevant "Service fee" by the "User". In case of non-implementation of the corresponding compensation, the pending "Order" will be considered canceled and the claims of the "User" regarding the provision of the "Service" will not be accepted.
      10.9. After payment of the "Service fee" the "Order" is considered as confirmed and information about the "Order" is sent to the respective "Professional" through the mobile application. The "Professional" is obliged to provide the "Service" at the time, place and in the amount specified in the "Order" by the "User", except for such cases when the "Professional" has the authority to cancel the order based on a valid reason.
      
      11. Payment of "Service fee" by "User" to "Professional"
      
      11.1. When ordering the service through the "WOLLY platform", the "User" pays the "Service fee" through non-cash payment using a bank plastic card, which consists, without any limitation, of the remuneration received by the "Professional", as well as the "Company’s" and the bank's remuneration from the “Commission".
      11.2. When paying by credit card, the recipient of the transfer is the payment system that sends the received amount (minus the "Commission") to the "Professional".
      11.3. The "Company" will support the "Users" in solving the problems possibly arising when paying by credit card through the Customer Service Center.
      11.4. The obligation of the "User" to the "Professional" to pay the "Service fee" shall be considered fulfilled from the moment when the cost of the specific "Service", paid by the "User", is fully reflected in the bank Account of the "Professional" (excluding the "Commission" belonging to the “Company”), and the "Commission" will be fully reflected in the relevant bank Account of the “Company”.
      11.5. The "Professional" is responsible for paying the transaction fee in favor of the bank in proportion to the "Service fee" (excluding the "Commission") received by him.
      11.6. The "User" pays the "Service fee" in advance during the process of placing the "Order". The cost is divided into 2 parts, of which one part represents the "Service fee" received by the "Professional", and the other part the "Commission" received by the "Company".
      11.7. In the process of providing the "Service", when the need to buy materials arises, the "Professional" and the "User" may agree on reimbursement of the cost of the materials, the amount of which is not included in the "Service fee".
      11.8. In the process of providing services, the travel of the "Professional" in order to buy materials is compensated through the platform when using the appropriate service – "Transportation".
      11.9. In the event that, according to the order cancellation policy, the obligation to return the "Service fee" to the "User" arises, the amount paid to the "User" will be returned to the same Account within 3 (three) working days in accordance with the conditions established by the order cancellation policy.
      11.10. The "Professional" is fully responsible for recording, declaring and fulfilling tax obligations as a result of the "Orders" made using the "WOLLY platform". A "Professional" must perform Accounting or hire a qualified person to perform such Accounting. The "Company" is entitled at any time to request the "Professional" to provide it with Accounting records of the "Orders" made through the "WOLLY platform".
      11.11. In order to optimize tax obligations, a “Professional” registered on the "WOLLY platform" must be registered with the tax authority as a person with the status of a small business.
      11.12. The "Company" warns the "Professional" that he/she is obliged to comply with the conditions stipulated by the tax legislation. Any responsibility arising from the violation of tax obligations is fully borne by the "Professional".
      
      12. "Commission"
      
      12.1. From the "Service fee" the "Professional" and the "User" pay a "Commission" in favor of the "Company".
      12.2. The amount of the "Commission" is determined from the total tax-free "Service fee" received from the "Order" placed through the "WOLLY platform" and its amount may be less than or equal to the "Service fee" and any additional fees received (so-called "Tea Money" or the fee received from the sale of chemical solutions during the rendering of "service" by the cleaner) up to 30%. The exact amount of the "Commission" is determined individually, and when determining its amount, the company takes into Account such circumstances as the number of orders taken by the "Professional", rating, positive evaluations of customers and others.
      12.3. The amount of "Commission" for "Professional" and "User" is distributed in the following proportion:
      
      12.3.1. 70% of the "Commission" is the remuneration to be paid by the "Professional" for finding a "User" through the "WOLLY platform";
      12.3.2. 30% of the "Commission" is the remuneration to be paid by the "User", which the latter pays in exchange for receiving the service of arranging contact with the "Professional" through the "WOLLY platform";
      
      12.4. Upon receipt of the total "Commission", the "User" and the "Professional" shall be deemed to have paid their respective portion of the "Commission" in favor of the "Company".
      12.5. The "Company" is responsible for the payment of transaction fee expenses incurred to the bank in connection with the payment of the "Commission".
      
      13. Cancellation of "Order" by "Customer" or "Professional"
      
      13.1. After the "Order" is confirmed and its "Service fee" is paid by the "Customer", the "Professional" is prohibited from canceling the received "Order" unless he has a valid reason for cancellation.
      13.2. The respectable grounds for cancellation of the order by the "Professional" may be the existence of any such objective circumstances (for example, the health condition of oneself or a family member, the death of a family member) that makes it impossible for the "Professional" to fulfill the order. The "Professional" is obliged to inform the Customer Service Center of the "Company" about such a circumstance and submit the relevant supporting documents (for example, health certificate form 100, death certificate, etc.) within a reasonable period of time.
      13.3. After the "User" has confirmed the "Order" and paid the "Service fee", if the "Professional" does not show up to provide the "Service" at the appropriate time and place, the "Service fee" paid by the "User" will be returned in full. Upon return, the "Professional" will refund the "Service fee" (excluding the "Commission") received by him/her, and the "Company" will refund the received "Commission". In such a case, the "Company" is authorized to impose a one-time fine of 500 GEL to be paid by the "Professional", the payment of which can be ensured by the "Company":
      
      13.3.1. by deducting the penalty amount from the "service fees" received from the subsequent "orders" received by the "Professional";
      13.3.2. by receiving money from the deposit used to secure the payment of any fine or other charge payable by the "Professional" to the "Company";
      13.3.3. by deducting money from the "Professional's" bank Account in an unauthorized manner;
      
      13.4. Before starting the order, the "User" has the right to cancel the order on the personal page in the column "Orders" by checking the "cancel placed order" button.
      13.5. The cancellation of the "Order" by the "User", depending on how much time is left before the execution of the order, or the status of the order, results in the full or partial refund of the paid "service fee" to the "User" or its non-return. When canceling an "Order", the issues of payment of "service fee" or "commission" are regulated in accordance with the "order cancellation policy" which is posted on the "WOLLY platform" and is a constituent and integral part of the present "Terms and conditions of the platform use".
      13.6. For the purposes of this article, the cancellation of the "order" by the "User" is also considered to be the case when the "Professional" arriving at the place to fulfill the "order" is unable to contact the "User" within 15 minutes. Such a case will be considered as cancellation of the order when the actual time remaining before its execution is less than 1 hour, and accordingly, the corresponding rule of the "order cancellation policy" will be applied regarding the return of the "service fee".  
      13.7. The "Company" reserves the right to restrict the use of the "WOLLY platform" if the "User" cancels 3 (three) "Orders" within 24 (twenty-four) hours. The limitation of the use of the "WOLLY platform" for the "User" can be extended for a period of up to 6 (six) months, after which the "User" is entitled to reactivate the Account with the help of the Customer Service Center.
      13.8. Upon cancellation of the "order" by the "User", the "service fee" paid to the "User" or its part is returned:
      
      13.8.1. In case of full refund - both from the "Professional" (the corresponding part of the "service fee" received by the latter, excluding the "commission"), as well as from the "Company" (the corresponding part of the "commission" received by the Company);
      13.8.2. In case of partial refund - the corresponding part of the refund amount is covered by the "Professional" from the "service fee" received by him.
      
      14. "Professional" assessment
      
      14.1. After the completion of the "Service", the "User" receives a message from the "Company" through the personal Account, which contains the instructions and form of the "Professional" evaluation.
      14.2. Evaluation can be done either immediately after receiving the notification or at any time by selecting the appropriate "Service" on the "Completed Orders" page.
      14.3. The "Professional" is rated with a minimum of 1 and a maximum of 5 Varsclavs for the effectiveness of the "service", where 1 means unsatisfactory quality of "service", and 5 the best quality of "service".
      14.4. The "User" has the opportunity to leave a comment along with the rating and explain the specific reasons on which his/her rating is based.
      14.5. After clicking the "Confirm" button, the "User" cannot change the rating and/or posted comment.
      14.6. Every new "Professional" registered on the "WOLLY platform" is automatically assigned a 5-star rating by the platform, which should not be considered a rating based on customer satisfaction.
      
      15. Warranty period and service
      
      15.1. "User" and "Professional" can agree on the existence of a warranty period in the "Service Agreement", during which the "Professional" is obliged to eliminate any defects related to the implementation of the "Service" within a reasonable time at its own expense, at the request of the "User".
      15.2. In case of refusal by the "Professional" to correct the defect during the warranty period and/or untimely correction, the "Company" has the right to debit the "Service fee" from the "Professional's" Account in favor of the "User".
      
      16. "Professional" representations and warranties
      
      16.1. The "Professional" declares and guarantees that:
      
      16.1.1. he/she is not employed by the "Company" on the basis of an employment contract and is not its full-time or freelance employee, partner and/or agent;
      16.1.2. he/she does not receive any compensation in the form of salary, travel expenses, bonus, reward or other payment forms from the "Company";
      16.1.3. sanctioning of the "Professional" due to claims and dissatisfaction arising from the service provided by him is provided only by this "Agreement" and the relationship between the "Company" and the "Professional" is not regulated by the internal regulations of the "Company" or other regulatory provisions;
      16.1.4. he/she shall not be entitled to claim any compensation from the "Company" in exchange for the "Services" provided under this "Agreement";
      16.1.5. he/she does not use Company's equipment, tools, machinery, and the “Company” does not provide the "Professional" with transportation, lodging, meals, insurance or other expenses;
      16.1.6. he/she does not take advantage of training programs organized by the "Company" to improve his/her professional skills;
      16.1.7. he/she does not act on behalf of the “Company” and is not an agent or representative of the “Company”;
      16.1.8. the basis of his remuneration is the service provided to the "User";
      16.1.9. he/she does not enjoy any benefits provided for "Company" employees;
      16.1.10. he/she is independent in his/her professional activities and is not subject to the organizational structure of the "Company" and in carrying out his/her professional activities he/she follows only professional knowledge and standards;
      16.1.11. he/she is not subject to reasonable working hours for "Company" employees and determines his/her own workload independently;
      16.1.12. he/she does not participate in any incentive program provided by the "Company" for its own employees. Taking into Account the number of services provided by the "Professional" on the "WOLLY platform", the assigned rating, positive user evaluations and other criteria or the appearance of the "Professional's" Account over other "Professionals" are not considered participation in such a program;
      16.1.13. he/she does not submit any report to the "Company" about the progress of work and its results;
      
      17. Intellectual Property Rights
      
      17.1. Copyright on the "WOLLY platform" belongs to the "Company" - "WOLLY" LLC. Any rights related to the "WOLLY platform", its use, utility, etc., as well as any content, including audio/video, photographs, including photographs containing the images of "Users" and "Professionals" are the exclusive property of the "Company".
      17.2. The use of the "WOLLY platform" by the "User" or "Professional" does not allow the "Company" name, logo, product or service name, trademarks, or any such reference to be made in any way when offering, ordering or providing "Services". There will be no prior consent of the "Company".
      17.3. You as a "User" or "Professional" have no right to:
      
      17.3.1. reproduce the computer program by any means and in any form, in whole or in part;
      17.3.2. transfer, adapt, systematize or otherwise change the programming language of a computer program from one programming language to another and reproduce the resulting outcomes;
      17.3.3. create a derivative work of, transfer, license, publicly display, transmit, or otherwise infringe the company's copyright through a computer program.
      17.3.4. copy data on the WOLLY platform, create databases based on them, or perform other unauthorized actions on the program;
      
      17.4. Subject to the User's or Professional's compliance with the platform terms and conditions, the Company grants you a limited, non-exclusive, non-licensable, revocable license to use the Company's platform on your personal devices for the sole purpose and to the extent necessary to fulfill the purposes of the "Users" and "Professionals" use of the "WOLLY platform" and to access and use any information made available in connection with the "Service" for personal and non-commercial use only.
      17.5. Any rights not expressly granted in this clause are reserved by the Company without limitation.
      
      18. Suspension and termination of "Professional" registration
      
      18.1. Non-fulfillment of the goals, principles, obligations or prohibitions provided for in the present "Terms and conditions of the platform use", regardless of who the negative consequences are for - the "Company", "User" or other "Professionals" – and depending on the severity of the violation, may lead to the "Professional"'s "Account" suspension or termination of registration.
      18.2. Considering the severity of the violation, the "Company" is entitled to give a written warning to the "Professional" before suspending or terminating the registration. Notice may be given by sending a letter to his contact e-mail address or residential address, or by any other means of communication.
      18.3. The "Company" has the right to immediately, without prior notice, terminate the registration of the "Professional" if the "Professional" violates the obligations stipulated by the "Terms and conditions of the platform use" and/or the applicable legislation, and/or the "Company" reasonably believes that termination of registration is the best way to protect "Users" of the "WOLLY platform" or third parties.
      18.4. Termination of registration leads to the termination of the contract between the "Company" and the "Professional" ("Terms and conditions of the platform use"), therefore the use of the "WOLLY platform" by the "Professional" in any other way, including the registration of a new "Account", will be considered as an unauthorized use of someone else's property, which can become the basis for imposing appropriate civil liability.
      18.5. The "Professional" is entitled at any time to terminate the registration on the "WOLLY platform" on his own initiative, which is the termination of this agreement ("Terms and conditions of the platform use").
      18.6. Regardless of whose initiative or for what reason the "Professional's" “Account" on the "WOLLY platform" was terminated, the "Company" is entitled to retain access to the "Professional's" personal data for processing purposes permitted by law.
      
      19. Liability of the parties
      
      19.1. The "User" as well as the "Professional" acknowledge that the "Company" is not the entity offering or providing the "Services" that are "ordered" through the "WOLLY platform" by the "User". Accordingly, the "Company" is not responsible for:
      
      19.1.1. delaying the implementation of the "service";
      19.1.2. non-performance or non-performance of the "Service";
      19.1.3. refusal or partial reimbursement of the "Service fee";
      19.1.4. damage to the property of the "User" or a third party during the rendering of the "service" by the "Professional";
      19.1.5. the determination and payment of fees arising from the services rendered by the "Professional" to the "User";
      19.1.6. all actions or omissions for which only the "Professional" or "User" can be responsible in connection with the "Service";
      
      19.2. The "User" and "Professional" are responsible for the relations that arise between each other based on the "Service Agreement" concluded between them (oral or written) and the applicable legislation.
      19.3. "User" and/or "Professional" will be fully responsible for non-fulfillment of the goals, principles, obligations or prohibitions provided for in the present "Terms and conditions of the platform use" for the damage caused to the "Company", including direct damage, indirect damage, consequential damage, damage of reputation and others, in accordance with the legislation of Georgia.
      19.4. In the event that the "Professional" provides the "Customer" with his contact data after completing the "Order" with the "WOLLY platform", the "Company" has the right to charge the "Professional" with a fine of 2,000 GEL.
      
      20. Making changes to the "Terms and conditions of the platform use"
      
      20.1. The "Company" is entitled to periodically unilaterally make changes and additions to the "Terms and conditions of the platform use" without obtaining further additional consent from the "User" and "Professional". Such changes will be effective upon their posting on the WOLLY platform.
      20.2. The "Company" is entitled, but not obliged, to inform the "User" and "Professional" about the changes through the "Company's" information means, including the website or any other channel available to the "Company" and/or via e-mail.
      20.3. The User's and Professional's continued use of the WOLLY platform after such changes and/or additions posted on the WOLLY platform constitutes is subject to acceptance of these changes and additions.
      
      21. Processing of personal data
      
      21.1. Personal information that the "Company" obtains from "Users" or "Professionals" is processed in accordance with the personal data processing and protection policy defined in these rules.
      21.2. By registering on the WOLLY platform, you agree that the company is authorized to process your personal data for purposes permitted by law, including advertising purposes, to send you promotional SMS or e-mail messages.
      21.3. The "Company" reserves the right, and the "User" and the "Professional" declare their consent, that the personal data of the "User" is being transferred to the "Professional" providing the corresponding "Service", and the personal data of the "Professional" is being transferred to the "User" participating in the corresponding "Service" for the purposes of providing the "Service".
      21.4. The "User" has the right to request from the "Company", and the "Company" has the right to provide him/her with the personal data of the "Professional", which may not be related to the purpose of providing the "Service" (e.g. the "Professional's" name, surname, residential address, telephone number, personal number), if the "User" needs to receive such personal data in order to apply to the relevant law enforcement authorities (for example, to file a lawsuit with the court, to apply to investigative bodies with a statement, etc.) and at the same time, if the "User" proves to the "Company" with a high degree of probability that the "Professional" has violated requirements established by the rules and conditions of using the platform, prohibitions and obligations stipulated by the "Service Agreement" or legislation.
      21.5. The transfer of personal data of the "User" or "Professional" to third parties for purposes other than those specified in this article is permitted only in cases provided for by law, based on the application of a competent body (e.g. court order, ruling, etc.).
      21.6. The "User" and the "Professional" agree that, in order to provide and offer effective services, after opening a personal Account, before terminating the contract, the "Company" may search, verify and process any information, including personal information, specified by them or related to it.
      
      22. Transitional Provisions of the "Terms and conditions of the platform use"
      
      22.1. The place of fulfillment of the obligation for the relations arising on the basis of these "Terms and conditions of the platform use" is the city of Tbilisi.
      22.2. If any article or part of the "Terms and conditions of the platform use" is found to be invalid or invalid by virtue of any law, it will be considered non-existent. However, all other provisions will remain in force.
      22.3. These "Terms and conditions of the platform use" are regulated and interpreted in accordance with the legislation of Georgia.
      
      23.
      
      All disputes and disagreements related to the "Terms and conditions of the platform use" will be resolved through negotiation between the parties, otherwise the parties will apply to the court. At the same time, the possibility of resolving the dispute by settlement between the parties does not deprive any of the parties of the right to apply to the court for the protection of their rights before holding the relevant negotiations. `}</p>
      {renderText}
    </div>
  )
}

export default PrivacyPolicy
