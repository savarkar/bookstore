import type { Faq } from './faq.model';

/** Where unresolved questions are escalated. Replace with the client's real portal. */
export const SUPPORT_PORTAL_URL = 'https://support.pageturner.example/tickets/new';

/**
 * 100 static answers for repetitive customer queries.
 * Policies below are SAMPLE values for the demo; replace with the client's real policies.
 */
export const FAQS: Faq[] = [
  // ---- Orders (1-15) ----
  { id: 1, q: 'How do I place an order?', a: 'Add books to your cart with the Add button, open the cart, and press Checkout. You will get a confirmation email once the order is placed.', k: 'buy purchase checkout order' },
  { id: 2, q: 'How can I track my order?', a: 'Once your order ships we email a tracking link. You can also open Order History in your account and press Track.', k: 'tracking status where package parcel shipment' },
  { id: 3, q: 'Can I change my order after placing it?', a: 'Orders can be changed within 1 hour of being placed, before they enter packing. After that, please place a new order and return the unwanted item.', k: 'edit modify update amend order' },
  { id: 4, q: 'How do I cancel my order?', a: 'Go to Order History and press Cancel while the order status is Processing. Once an order has shipped it cannot be cancelled, but you can return it within 30 days.', k: 'cancel cancellation stop order' },
  { id: 5, q: 'I did not receive an order confirmation email.', a: 'Please check your spam folder and confirm the email address on your account. Confirmation emails normally arrive within 10 minutes.', k: 'confirmation email missing receipt not received' },
  { id: 6, q: 'Can I order without creating an account?', a: 'Yes. Guest checkout is available. Creating an account lets you track orders, save a wishlist and earn rewards.', k: 'guest checkout without account register' },
  { id: 7, q: 'Can I order a book that is out of stock?', a: 'Out-of-stock titles can be added to your wishlist and we will email you when they are back. Most titles are restocked within 2 weeks.', k: 'unavailable sold out restock backorder' },
  { id: 8, q: 'How do I pre-order an upcoming book?', a: 'Upcoming titles show a Pre-order button. You are charged when the book ships, and it is sent on the release date.', k: 'preorder pre-order upcoming release coming soon' },
  { id: 9, q: 'Can I add a gift message to my order?', a: 'Yes. Tick "This is a gift" at checkout to add a message and hide prices from the packing slip.', k: 'gift message note wrap present' },
  { id: 10, q: 'Can I ship to a different address than my billing address?', a: 'Yes. Enter a separate delivery address at checkout. The billing address only needs to match your card.', k: 'different address shipping billing deliver someone else' },
  { id: 11, q: 'I was charged twice for my order.', a: 'A second pending authorisation usually drops off within 3-5 business days. If both charges are still there after that, please contact support with your order number.', k: 'double charge duplicate payment billed twice' },
  { id: 12, q: 'How do I get an invoice or receipt?', a: 'Open Order History, select the order and press Download invoice. A copy is also attached to your confirmation email.', k: 'invoice receipt bill vat tax document' },
  { id: 13, q: 'Is there a minimum order amount?', a: 'No minimum. Orders over $35 qualify for free standard shipping.', k: 'minimum order value amount' },
  { id: 14, q: 'Can I combine two orders into one shipment?', a: 'Orders placed within 1 hour of each other can be merged. Contact support quickly with both order numbers.', k: 'combine merge orders together shipment' },
  { id: 15, q: 'Is there a limit on how many copies I can buy?', a: 'Up to 10 copies of a title per order. For larger quantities see our bulk and corporate orders.', k: 'quantity limit maximum copies bulk many' },

  // ---- Shipping (16-30) ----
  { id: 16, q: 'How much is shipping?', a: 'Standard shipping is $4.99. Express is $12.99. Orders over $35 ship free with standard delivery.', k: 'shipping cost price fee delivery charge' },
  { id: 17, q: 'Do you offer free shipping?', a: 'Yes. Standard shipping is free on orders over $35.', k: 'free shipping threshold delivery' },
  { id: 18, q: 'How long does delivery take?', a: 'Standard delivery takes 3-5 business days. Express takes 1-2 business days. International orders take 7-14 business days.', k: 'delivery time arrive how long days shipping duration' },
  { id: 19, q: 'Do you offer express or next-day delivery?', a: 'Express (1-2 business days) is available for $12.99 on orders placed before 2 pm. Next-day is not guaranteed.', k: 'express fast overnight next-day urgent quick' },
  { id: 20, q: 'Do you ship internationally?', a: 'Yes, we ship to over 40 countries. Delivery takes 7-14 business days and shipping is calculated at checkout.', k: 'international overseas abroad worldwide global outside country' },
  { id: 21, q: 'Which countries do you ship to?', a: 'We ship to the US, Canada, UK, EU countries, Australia, New Zealand, India, Singapore and Japan, among others. The full list appears at checkout.', k: 'countries list regions where ship' },
  { id: 22, q: 'Do you deliver on weekends?', a: 'Saturday delivery is available with Express shipping in most areas. We do not deliver on Sundays.', k: 'weekend saturday sunday deliver' },
  { id: 23, q: 'My order is late. What should I do?', a: 'Please allow 2 extra business days beyond the estimate. If it still has not arrived, contact support with your order number and we will trace it.', k: 'late delayed overdue not arrived slow missing' },
  { id: 24, q: 'My tracking has not updated.', a: 'Carriers can take 24-48 hours to show the first scan. If there is no movement for 3 days, contact support.', k: 'tracking stuck not updating no movement' },
  { id: 25, q: 'My package arrived damaged.', a: 'We are sorry! Please send a photo of the damage within 7 days of delivery and we will ship a replacement or refund you.', k: 'damaged broken torn crushed wet condition' },
  { id: 26, q: 'I received the wrong book.', a: 'Sorry about that. Contact support with your order number and a photo of the book you received, and we will send the correct one at no cost.', k: 'wrong incorrect different book item received mistake' },
  { id: 27, q: 'My order says delivered but I did not receive it.', a: 'Please check with neighbours and around your property, then wait 24 hours. If it is still missing, contact support so we can open a carrier investigation.', k: 'delivered missing lost not received stolen' },
  { id: 28, q: 'Can I change my delivery address after ordering?', a: 'Addresses can be changed while the order status is Processing. Contact support right away with your order number and the new address.', k: 'change delivery address wrong address update shipping' },
  { id: 29, q: 'Do you deliver to PO boxes?', a: 'Yes, for Standard shipping within the US. Express shipping needs a street address.', k: 'po box post office box deliver' },
  { id: 30, q: 'Will I have to pay customs or import duties?', a: 'International orders may be subject to duties and taxes set by your country. These are paid by the recipient on delivery.', k: 'customs duties import tax international fee' },

  // ---- Returns & refunds (31-42) ----
  { id: 31, q: 'What is your return policy?', a: 'You can return unused books in original condition within 30 days of delivery for a full refund.', k: 'return policy send back refund days' },
  { id: 32, q: 'How do I return a book?', a: 'Open Order History, choose the order, press Return and print the prepaid label if eligible. Pack the book securely and drop it off with the carrier.', k: 'return process label send back how' },
  { id: 33, q: 'How long do refunds take?', a: 'Refunds are issued within 2 business days of receiving the return and appear on your statement in 5-7 business days.', k: 'refund time money back how long reimburse arrive come show appear wait' },
  { id: 34, q: 'Who pays for return shipping?', a: 'Returns are free if the item was damaged or incorrect. Otherwise a $3.99 return label fee is deducted from the refund.', k: 'return shipping cost fee label pay' },
  { id: 35, q: 'Can I exchange a book for another one?', a: 'We do not do direct exchanges. Return the book for a refund and place a new order for the one you want.', k: 'exchange swap replace different book' },
  { id: 36, q: 'Can I return a book that I wrote in or used?', a: 'Books must be in original, unmarked condition to be returned. Highlighted, written-in or damaged books are not eligible.', k: 'used marked highlighted written condition return' },
  { id: 37, q: 'Can I return an ebook or audiobook?', a: 'Digital purchases can be refunded within 7 days if the file has not been downloaded. Contact support to request this.', k: 'ebook audiobook digital return refund download' },
  { id: 38, q: 'Can I return a book I received as a gift?', a: 'Yes. Gift recipients can return within 30 days and receive store credit. The original purchaser can request a refund to the original payment method.', k: 'gift return recipient store credit receipt' },
  { id: 39, q: 'How do I get a refund for a damaged book?', a: 'Send a photo of the damage through support within 7 days of delivery. We will refund you in full or send a replacement at no cost.', k: 'damaged refund broken defective replacement' },
  { id: 40, q: 'Can my refund go to a different payment method?', a: 'Refunds go back to the original payment method. If that is not possible, we can issue store credit.', k: 'refund different payment method card store credit' },
  { id: 41, q: 'Can I return a pre-order?', a: 'Yes. Cancel a pre-order free of charge any time before it ships. After shipping the normal 30-day return policy applies.', k: 'preorder pre-order cancel return refund' },
  { id: 42, q: 'Do you offer price matching or price adjustment?', a: 'If the price of a book drops within 14 days of your purchase, contact support and we will refund the difference. We do not match other retailers.', k: 'price match adjustment cheaper drop lower competitor' },

  // ---- Payments & promotions (43-54) ----
  { id: 43, q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay and PageTurner gift cards.', k: 'payment methods cards accepted pay credit debit' },
  { id: 44, q: 'Is it safe to pay on your website?', a: 'Yes. All payments are encrypted over HTTPS and processed by PCI-compliant providers. We never store your full card number.', k: 'secure safe security encrypted ssl card details fraud' },
  { id: 45, q: 'Why was my card declined?', a: 'Common causes are an incorrect billing address, insufficient funds or a bank security hold. Check your details and try again, or contact your bank.', k: 'card declined failed rejected payment error not working' },
  { id: 46, q: 'Do you accept PayPal?', a: 'Yes. Choose PayPal at checkout and you will be redirected to log in and confirm payment.', k: 'paypal pay' },
  { id: 47, q: 'Can I pay with a gift card?', a: 'Yes. Enter your gift card code in the Payment step at checkout. Any remaining balance stays on the card.', k: 'gift card redeem use code voucher' },
  { id: 48, q: 'How do I buy a gift card?', a: 'Gift cards from $10 to $200 are sold in the Gift Cards section and are delivered by email within minutes.', k: 'buy purchase gift card voucher present' },
  { id: 49, q: 'How do I check my gift card balance?', a: 'Sign in and open Account > Gift Cards, then enter your card code to see the balance.', k: 'gift card balance remaining check' },
  { id: 50, q: 'Can I pay in installments?', a: 'Yes. Orders over $50 can be split into 4 interest-free payments through Klarna at checkout, subject to approval.', k: 'installments instalments split pay later klarna afterpay monthly' },
  { id: 51, q: 'Do prices include tax?', a: 'Prices are shown before sales tax or VAT. Tax is calculated at checkout based on your delivery address.', k: 'tax vat gst included price sales' },
  { id: 52, q: 'Can I pay in a different currency?', a: 'Prices are in US dollars. Your bank will convert at its own exchange rate if your card uses another currency.', k: 'currency euro pound exchange rate convert' },
  { id: 53, q: 'How do I use a promo code?', a: 'Enter the code in the Promo code box in your cart and press Apply. The discount shows before you pay.', k: 'promo code coupon discount voucher apply enter' },
  { id: 54, q: 'My promo code does not work.', a: 'Codes may be expired, limited to certain titles, or cannot be combined with other offers. Check the terms on the offer or contact support.', k: 'promo code coupon invalid expired not working error' },

  // ---- Account (55-66) ----
  { id: 55, q: 'How do I create an account?', a: 'Press Sign up at the top of the page, enter your email and a password, and confirm using the email we send you.', k: 'register sign up create account join' },
  { id: 56, q: 'I forgot my password.', a: 'Press Sign in, then "Forgot password" and enter your email. We will send a reset link that is valid for 1 hour.', k: 'forgot reset password change lost' },
  { id: 57, q: 'How do I change my email address?', a: 'Go to Account > Profile, edit your email and confirm using the link we send to the new address.', k: 'change update email address account profile' },
  { id: 58, q: 'How do I delete my account?', a: 'Go to Account > Privacy > Delete account. Your data is erased within 30 days, except records we must keep for tax reasons.', k: 'delete close remove account data erase gdpr' },
  { id: 59, q: 'How do I update my saved shipping address?', a: 'Open Account > Addresses, then edit, add or remove an address. You can also choose a default.', k: 'update change saved shipping address default' },
  { id: 60, q: 'How do I unsubscribe from marketing emails?', a: 'Use the Unsubscribe link at the bottom of any marketing email, or switch it off in Account > Preferences. Order emails will still be sent.', k: 'unsubscribe stop emails marketing newsletter spam opt out' },
  { id: 61, q: 'How do I subscribe to your newsletter?', a: 'Enter your email in the newsletter box in the footer or turn on Email updates in Account > Preferences.', k: 'subscribe newsletter updates emails sign up' },
  { id: 62, q: 'How do you use my personal data?', a: 'We use your data only to process orders and improve your experience, and we never sell it. See our Privacy Policy for details and your rights.', k: 'privacy personal data information gdpr policy cookies' },
  { id: 63, q: 'How do I see my order history?', a: 'Sign in and open Account > Order History to view, track, reorder or return past orders.', k: 'order history past orders previous view account' },
  { id: 64, q: 'How do I save books to a wishlist?', a: 'Sign in and press the heart icon on a book. Your list is found in Account > Wishlist.', k: 'wishlist wish list save favourite favorite later' },
  { id: 65, q: 'Do you have a loyalty or rewards program?', a: 'Yes. PageTurner Rewards gives 1 point per $1 spent. 100 points equal $5 off. Join free from your account.', k: 'loyalty rewards points program member club' },
  { id: 66, q: 'I cannot log in to my account.', a: 'Check your email and password, and try Forgot password to reset it. After 5 failed attempts the account is locked for 15 minutes.', k: 'login log in sign in cannot locked access error' },

  // ---- Products (67-80) ----
  { id: 67, q: 'How do I find a specific book?', a: 'Use the search bar at the top to search by title or author, or filter by category and sort by price or rating.', k: 'find search look book title author' },
  { id: 68, q: 'Are your books new or used?', a: 'All books are brand new unless a listing says "Used" with a condition grade.', k: 'new used second-hand condition secondhand' },
  { id: 69, q: 'Do you sell ebooks?', a: 'Yes. Titles with an Ebook badge are available instantly in EPUB and PDF formats.', k: 'ebook e-book digital epub pdf kindle' },
  { id: 70, q: 'Do you sell audiobooks?', a: 'Yes. Audiobooks are available as MP3 downloads from the product page, and play in our free app.', k: 'audiobook audio listen mp3 narrated' },
  { id: 71, q: 'Do you have signed copies by authors?', a: 'Signed editions appear with a Signed badge when available. They are limited and non-returnable.', k: 'signed autographed author signature copies' },
  { id: 72, q: 'Can you recommend a book?', a: 'Sort by Top rated to see our highest-rated titles, or filter by category. Our staff picks are shown on the home page.', k: 'recommend suggestion bestseller popular best top' },
  { id: 73, q: 'Do you sell hardcover and paperback editions?', a: 'Most titles are available in both. Choose the format on the product page; formats and prices differ.', k: 'hardcover paperback format edition binding' },
  { id: 74, q: 'Where can I find the ISBN of a book?', a: 'The ISBN is listed in the product details of each book, below the description.', k: 'isbn number barcode identifier' },
  { id: 75, q: 'Can you order a book that is not listed?', a: 'Yes, special orders are available. Contact support with the title, author and ISBN and we will source it, usually within 2-3 weeks.', k: 'special order not listed source find rare unavailable request' },
  { id: 76, q: 'Do you sell textbooks?', a: 'Yes. Browse Technology and Non-Fiction for study titles, or ask support to source a specific course book by ISBN.', k: 'textbook course study university college school' },
  { id: 77, q: 'Do you have books for children?', a: 'We have a growing children section. Use search with terms like "kids", or contact us to request a title.', k: 'kids children child young picture book' },
  { id: 78, q: 'Do you have large print or accessible editions?', a: 'Large print and accessible editions are marked on the product page where available. Ask support if you need a specific title.', k: 'large print accessible dyslexia braille visually impaired' },
  { id: 79, q: 'How are the book ratings calculated?', a: 'Ratings are the average score from verified customers on a scale of 1 to 5 stars.', k: 'rating stars reviews score calculated average' },
  { id: 80, q: 'Do you sell stationery or accessories?', a: 'Not at the moment. We focus on books and gift cards, and plan to add bookmarks and reading accessories.', k: 'stationery accessories bookmarks gifts merchandise' },

  // ---- Digital (81-86) ----
  { id: 81, q: 'How do I download my ebook?', a: 'After purchase, open Account > My Library and press Download next to the title. You can re-download any time.', k: 'download ebook library file get access' },
  { id: 82, q: 'Which devices can I read ebooks on?', a: 'EPUB works on most e-readers, phones and tablets. PDF opens on any device. Our reading app is available for iOS and Android.', k: 'devices kindle kobo ipad phone tablet e-reader compatible read' },
  { id: 83, q: 'Can I share an ebook with a friend?', a: 'Ebooks are licensed to one account and cannot be shared. You can gift a copy to a friend instead.', k: 'share lend ebook friend family sharing' },
  { id: 84, q: 'My ebook download link is not working.', a: 'Links expire after 7 days. Sign in and re-download from Account > My Library. If that fails, contact support.', k: 'download link broken expired failed error ebook' },
  { id: 85, q: 'Can I read my ebook offline?', a: 'Yes. Once downloaded, your ebook can be read offline on any device or in the reading app.', k: 'offline read internet no connection ebook' },
  { id: 86, q: 'Do your ebooks have DRM?', a: 'Most ebooks are DRM-free. Titles with restrictions are labelled on the product page before purchase.', k: 'drm copy protection restrictions ebook' },

  // ---- Offers & business (87-92) ----
  { id: 87, q: 'Do you offer student discounts?', a: 'Yes. Verified students get 10% off. Sign in and verify with your school email in Account > Student discount.', k: 'student discount university school education percent off' },
  { id: 88, q: 'Do you offer bulk or corporate discounts?', a: 'Orders of 20 or more copies qualify for volume pricing. Contact support with your title list and we will send a quote.', k: 'bulk corporate business wholesale volume company quote discount' },
  { id: 89, q: 'Do you run sales or seasonal offers?', a: 'Yes. We hold sales in spring, back-to-school and holiday seasons. Subscribe to our newsletter to hear first.', k: 'sale offer deal seasonal black friday discount special' },
  { id: 90, q: 'Do you have an affiliate program?', a: 'Yes. Bloggers and creators earn 6% commission on referred sales. Apply through the support portal.', k: 'affiliate partner commission referral blogger influencer' },
  { id: 91, q: 'Can schools and libraries place orders?', a: 'Yes. Institutions can order by purchase order with net-30 terms. Contact support to set up an institutional account.', k: 'school library institution purchase order invoice net 30 education' },
  { id: 92, q: 'Can I sell my old books to you?', a: 'We do not buy used books at the moment. We recommend local second-hand shops or charity donation.', k: 'sell buyback trade-in used books old donate' },

  // ---- Support & general (93-100) ----
  { id: 93, q: 'How do I contact customer support?', a: 'Email support@pageturner.example or open a ticket on our support portal. We reply within 1 business day.', k: 'contact customer service support help phone email reach' },
  { id: 94, q: 'What are your customer support hours?', a: 'Our team is available Monday to Friday, 9 am to 6 pm Eastern Time. Tickets raised outside those hours are answered the next business day.', k: 'support hours open times working availability' },
  { id: 95, q: 'Do you have a physical store?', a: 'PageTurner is online-only. Everything you see on the site is shipped from our warehouse.', k: 'physical store shop location address visit branch' },
  { id: 96, q: 'Do you host author events or book clubs?', a: 'Yes. Online author talks and a monthly book club run regularly. Subscribe to the newsletter for dates.', k: 'author events book club talk signing meetup reading' },
  { id: 97, q: 'How do I report a problem with the website?', a: 'Please tell us what happened, the page and your device, via the support portal. Screenshots help.', k: 'bug website error problem broken report issue glitch' },
  { id: 98, q: 'Is your website accessible?', a: 'We follow WCAG 2.1 AA guidelines: keyboard navigation, screen-reader labels and reduced-motion support. Tell us if you find a barrier.', k: 'accessibility accessible screen reader keyboard wcag disability' },
  { id: 99, q: 'Do you have a mobile app?', a: 'Our site is fully responsive on phones and tablets. A reading app for ebooks is available on iOS and Android.', k: 'mobile app ios android iphone download application' },
  { id: 100, q: 'How do I leave a review?', a: 'Sign in, open a book you purchased and press Write a review. Reviews are checked before they are published.', k: 'review rating feedback write comment opinion' }
];

/** Common starter questions shown as quick replies (FAQ ids). */
export const STARTER_IDS = [2, 16, 31, 43, 93];
