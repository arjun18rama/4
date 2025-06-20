/**
 * @fileoverview Dummy mailer module.
 */

/**
 * Sends a fake email.
 * @param {string} to - Recipient.
 * @param {string} subject - Email subject.
 */
export function sendMail(to, subject) {
  console.log(`Sending mail to ${to} with subject: ${subject}`);
}
