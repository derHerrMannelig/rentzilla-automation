import mainPage from '../pageobjects/main.page.js'
import feedbackPage from '../pageobjects/feedback.page.js'
import testData from '../fixtures/data.json' assert { type: 'json' };

describe('Feedback section', () => {
  before(async () =>{
    await browser.setWindowSize(1920, 1080)
    await mainPage.openBaseUrl()
    await browser.pause(2000)
  })
  it('should verify feedback section', async () => {
    (await feedbackPage.feedbackForm).scrollIntoView();
    await expect(await feedbackPage.feedbackForm).toBeDisplayed();
    await feedbackPage.clickFeedbackSubmit();
    await expect(await feedbackPage.feedbackName).toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackPhone).toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackNameError).toBeDisplayed();
    await expect(await feedbackPage.feedbackPhoneError).toBeDisplayed();
    (await feedbackPage.feedbackName).setValue(`${testData.name1}`);
    await feedbackPage.clickFeedbackSubmit();
    await expect(await feedbackPage.feedbackName).not.toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackPhone).toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackNameError).not.toBeDisplayed();
    await expect(await feedbackPage.feedbackPhoneError).toBeDisplayed();
    await feedbackPage.clickFeedbackPhone();
    await expect(await feedbackPage.feedbackPhone).toHaveValue('+380');
    (await feedbackPage.feedbackPhone).setValue(`${testData.phone1}`);
    (await feedbackPage.feedbackName).clearValue();
    await feedbackPage.clickFeedbackSubmit();
    await expect(await feedbackPage.feedbackName).toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackPhone).not.toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackNameError).toBeDisplayed();
    await expect(await feedbackPage.feedbackPhoneError).not.toBeDisplayed();
    (await feedbackPage.feedbackName).setValue(`${testData.name1}`);
    await feedbackPage.clickFeedbackPhone();
    (await feedbackPage.feedbackPhone).setValue(`${testData.phone2}`);
    await browser.pause(1000);
    await feedbackPage.clickFeedbackSubmit();
    await expect(await feedbackPage.feedbackName).not.toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackPhone).toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackNameError).not.toBeDisplayed();
    await expect(await feedbackPage.feedbackPhoneError).toBeDisplayed();
    await feedbackPage.clickFeedbackPhone();
    (await feedbackPage.feedbackPhone).setValue(`${testData.phone3}`);
    await browser.pause(1000);
    await feedbackPage.clickFeedbackSubmit();
    await expect(await feedbackPage.feedbackPhone).toHaveAttribute('class', expect.stringContaining('ConsultationForm_error__F1NM0'));
    await expect(await feedbackPage.feedbackPhoneError).toBeDisplayed();
    await feedbackPage.clickFeedbackPhone();
    (await feedbackPage.feedbackPhone).setValue(`${testData.phone1}`);
    await browser.pause(1000);
    await feedbackPage.clickFeedbackSubmit();
    await browser.pause(2000);
    await browser.acceptAlert();
  })
})
